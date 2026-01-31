'use client';

import { useState } from 'react';
import { useCart, CartItem } from '@/hooks/useCart';
import { MinusIcon, PlusIcon, CheckIcon } from '@heroicons/react/24/outline';

interface AddToCartButtonProps {
    product: Omit<CartItem, 'quantity'>;
    disabled?: boolean;
}

export default function AddToCartButton({ product, disabled }: AddToCartButtonProps) {
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);
    const { addItem } = useCart();

    const handleAddToCart = () => {
        if (disabled) return;

        addItem(product, quantity);
        setAdded(true);

        // Reset after 2 seconds
        setTimeout(() => {
            setAdded(false);
            setQuantity(1);
        }, 2000);
    };

    const handleQuantityChange = (delta: number) => {
        setQuantity(prev => Math.max(1, Math.min(99, prev + delta)));
    };

    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-lg">
                <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-4 py-3 hover:bg-gray-100 transition-colors"
                    type="button"
                >
                    <MinusIcon className="w-4 h-4" />
                </button>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min={1}
                    max={99}
                    className="w-16 text-center py-3 border-x outline-none"
                />
                <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-4 py-3 hover:bg-gray-100 transition-colors"
                    type="button"
                >
                    <PlusIcon className="w-4 h-4" />
                </button>
            </div>
            <button
                onClick={handleAddToCart}
                disabled={disabled}
                className={`flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all ${added ? 'bg-green-600 hover:bg-green-700' : ''
                    }`}
            >
                {added ? (
                    <>
                        <CheckIcon className="w-5 h-5" />
                        Đã thêm vào giỏ
                    </>
                ) : disabled ? (
                    'Hết hàng'
                ) : (
                    'Thêm vào giỏ hàng'
                )}
            </button>
        </div>
    );
}
