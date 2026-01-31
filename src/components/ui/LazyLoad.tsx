'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface LazyLoadProps {
    children: ReactNode;
    placeholder?: ReactNode;
    rootMargin?: string;
    threshold?: number;
}

export default function LazyLoad({
    children,
    placeholder,
    rootMargin = '100px',
    threshold = 0.1,
}: LazyLoadProps) {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin, threshold }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [rootMargin, threshold]);

    return (
        <div ref={containerRef}>
            {isVisible ? children : placeholder || <div className="min-h-[200px] bg-gray-100 animate-pulse rounded-lg" />}
        </div>
    );
}
