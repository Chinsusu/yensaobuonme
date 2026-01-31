'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Sản phẩm', href: '/san-pham' },
    { name: 'Giới thiệu', href: '/gioi-thieu' },
    { name: 'Tin tức', href: '/tin-tuc' },
    { name: 'Liên hệ', href: '/lien-he' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
            {/* Top bar */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-white text-sm py-2">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <span>🎁 Miễn phí vận chuyển cho đơn hàng từ 500.000đ</span>
                    <span className="hidden md:block">Hotline: 0909.123.456</span>
                </div>
            </div>

            {/* Main header */}
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">Y</span>
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl font-bold text-gray-800">Yến Sào</h1>
                            <p className="text-xs text-amber-600">Hòn Nội</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-amber-600 font-medium transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Right side */}
                    <div className="flex items-center space-x-4">
                        {/* Search */}
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="p-2 text-gray-600 hover:text-amber-600 transition-colors"
                            aria-label="Tìm kiếm"
                        >
                            <MagnifyingGlassIcon className="w-6 h-6" />
                        </button>

                        {/* Cart */}
                        <Link
                            href="/gio-hang"
                            className="relative p-2 text-gray-600 hover:text-amber-600 transition-colors"
                        >
                            <ShoppingCartIcon className="w-6 h-6" />
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-xs rounded-full flex items-center justify-center">
                                0
                            </span>
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 text-gray-600"
                            aria-label="Menu"
                        >
                            {isMenuOpen ? (
                                <XMarkIcon className="w-6 h-6" />
                            ) : (
                                <Bars3Icon className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Search bar */}
                {isSearchOpen && (
                    <div className="py-4 border-t">
                        <form action="/san-pham" className="relative max-w-2xl mx-auto">
                            <input
                                type="search"
                                name="search"
                                placeholder="Tìm kiếm sản phẩm..."
                                className="w-full px-4 py-3 pl-12 rounded-full border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                            />
                            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </form>
                    </div>
                )}
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t">
                    <nav className="container mx-auto px-4 py-4 space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
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
