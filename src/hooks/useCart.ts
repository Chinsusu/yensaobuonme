'use client';

import { useState, useEffect, useCallback } from 'react';

export interface CartItem {
    product_id: number;
    name: string;
    slug: string;
    price: string;
    image: string | null;
    quantity: number;
}

const CART_KEY = 'yensao_cart';

// Event to notify other components of cart changes
const cartChangeEvent = new Event('cartChange');

export function useCart() {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(CART_KEY);
        if (stored) {
            try {
                setItems(JSON.parse(stored));
            } catch {
                setItems([]);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save cart to localStorage when items change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem(CART_KEY, JSON.stringify(items));
            window.dispatchEvent(cartChangeEvent);
        }
    }, [items, isLoaded]);

    // Listen for cart changes from other components
    useEffect(() => {
        const handleCartChange = () => {
            const stored = localStorage.getItem(CART_KEY);
            if (stored) {
                try {
                    setItems(JSON.parse(stored));
                } catch {
                    // ignore
                }
            }
        };
        window.addEventListener('cartChange', handleCartChange);
        return () => window.removeEventListener('cartChange', handleCartChange);
    }, []);

    const addItem = useCallback((product: Omit<CartItem, 'quantity'>, quantity = 1) => {
        setItems(prev => {
            const existing = prev.find(item => item.product_id === product.product_id);
            if (existing) {
                return prev.map(item =>
                    item.product_id === product.product_id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { ...product, quantity }];
        });
    }, []);

    const removeItem = useCallback((productId: number) => {
        setItems(prev => prev.filter(item => item.product_id !== productId));
    }, []);

    const updateQuantity = useCallback((productId: number, quantity: number) => {
        if (quantity < 1) {
            removeItem(productId);
            return;
        }
        setItems(prev =>
            prev.map(item =>
                item.product_id === productId
                    ? { ...item, quantity: Math.min(99, quantity) }
                    : item
            )
        );
    }, [removeItem]);

    const clearCart = useCallback(() => {
        setItems([]);
    }, []);

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    const subtotal = items.reduce((acc, item) => {
        return acc + parseFloat(item.price) * item.quantity;
    }, 0);

    return {
        items,
        isLoaded,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
    };
}

// Lightweight hook for Header - only track count
export function useCartCount() {
    const [count, setCount] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const updateCount = () => {
            const stored = localStorage.getItem(CART_KEY);
            if (stored) {
                try {
                    const items: CartItem[] = JSON.parse(stored);
                    setCount(items.reduce((acc, item) => acc + item.quantity, 0));
                } catch {
                    setCount(0);
                }
            } else {
                setCount(0);
            }
        };

        updateCount();
        setIsLoaded(true);

        window.addEventListener('cartChange', updateCount);
        window.addEventListener('storage', updateCount);
        return () => {
            window.removeEventListener('cartChange', updateCount);
            window.removeEventListener('storage', updateCount);
        };
    }, []);

    return { count, isLoaded };
}
