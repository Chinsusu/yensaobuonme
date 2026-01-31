'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
    ShoppingCartIcon,
    Bars3Icon,
    XMarkIcon,
    MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { useCartCount } from '@/hooks/useCart';

const navigation = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Sản phẩm', href: '/san-pham' },
    { name: 'Blog', href: '/tin-tuc' },
    { name: 'Giới thiệu', href: '/gioi-thieu' },
    { name: 'Liên hệ', href: '/lien-he' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { count: cartCount, isLoaded: cartLoaded } = useCartCount();

    // Add shadow on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-normal ${isScrolled ? 'shadow-md' : ''
                }`}
            style={{ borderBottom: '1px solid #E5E5E5' }}
        >
            {/* Main header - 80px height */}
            <div className="container mx-auto h-20">
                {/* 12-column grid: Logo (2) + Nav (7) + Actions (3) */}
                <div className="grid grid-cols-12 items-center h-full gap-4">

                    {/* Logo - 2 columns */}
                    <div className="col-span-6 lg:col-span-2">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 cursor-pointer"
                            aria-label="Trang chủ Yến Sào Ban Mê"
                        >
                            {/* Logo image */}
                            <Image
                                src="/logo.png"
                                alt="Yến Sào Ban Mê Logo"
                                width={50}
                                height={50}
                                className="w-10 h-10 lg:w-12 lg:h-12"
                                priority
                            />
                            <div className="hidden sm:block">
                                <h1 className="text-base lg:text-lg font-bold font-heading" style={{ color: '#8B4513' }}>
                                    Yến Sào Ban Mê
                                </h1>
                                <p className="text-xs" style={{ color: '#D4AF37' }}>Buôn Ma Thuột</p>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation - 7 columns (desktop only) */}
                    <nav className="hidden lg:flex col-span-7 items-center justify-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-text hover:text-primary font-medium transition-colors duration-normal relative group cursor-pointer"
                            >
                                {item.name}
                                <span
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-normal group-hover:w-full"
                                    style={{ backgroundColor: '#8B4513' }}
                                />
                            </Link>
                        ))}
                    </nav>

                    {/* Actions - 3 columns */}
                    <div className="col-span-6 lg:col-span-3 flex items-center justify-end space-x-4">
                        {/* Search button */}
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="p-2 text-text-light hover:text-primary transition-colors duration-normal cursor-pointer"
                            aria-label="Tìm kiếm"
                        >
                            <MagnifyingGlassIcon className="w-6 h-6" />
                        </button>

                        {/* Cart */}
                        <Link
                            href="/gio-hang"
                            className="relative p-2 text-text-light hover:text-primary transition-colors duration-normal cursor-pointer"
                            aria-label={`Giỏ hàng${cartLoaded && cartCount > 0 ? `, ${cartCount} sản phẩm` : ''}`}
                        >
                            <ShoppingCartIcon className="w-6 h-6" />
                            {cartLoaded && cartCount > 0 && (
                                <span
                                    className="absolute -top-1 -right-1 w-5 h-5 text-white text-xs rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: '#8B4513' }}
                                >
                                    {cartCount > 99 ? '99+' : cartCount}
                                </span>
                            )}
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 text-text-light cursor-pointer"
                            aria-label={isMenuOpen ? 'Đóng menu' : 'Mở menu'}
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? (
                                <XMarkIcon className="w-6 h-6" />
                            ) : (
                                <Bars3Icon className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Search bar (expandable) */}
                {isSearchOpen && (
                    <div className="py-4 border-t" style={{ borderColor: '#E5E5E5' }}>
                        <form action="/san-pham" className="relative max-w-2xl mx-auto">
                            <input
                                type="search"
                                name="search"
                                placeholder="Tìm kiếm sản phẩm..."
                                className="input pl-12 rounded-full"
                                autoFocus
                            />
                            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                        </form>
                    </div>
                )}
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t" style={{ borderColor: '#E5E5E5' }}>
                    <nav className="container mx-auto py-4 space-y-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-3 text-text hover:bg-secondary hover:text-primary rounded-lg transition-colors duration-normal cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
