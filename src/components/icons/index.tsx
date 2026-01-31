import {
    CheckCircleIcon,
    TrophyIcon,
    TruckIcon,
    ArrowPathIcon,
    ChatBubbleLeftRightIcon,
    ShieldCheckIcon,
    MapPinIcon,
    HandRaisedIcon,
    BeakerIcon,
    SunIcon,
    StarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/outline';

// Re-export for easy importing
export {
    CheckCircleIcon,
    TrophyIcon,
    TruckIcon,
    ArrowPathIcon,
    ChatBubbleLeftRightIcon,
    ShieldCheckIcon,
    MapPinIcon,
    HandRaisedIcon,
    BeakerIcon,
    SunIcon,
    StarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
};

// Icon wrapper for consistent sizing
interface IconWrapperProps {
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export function IconWrapper({ children, size = 'md', className = '' }: IconWrapperProps) {
    const sizeClasses = {
        sm: 'w-6 h-6',    // 24px
        md: 'w-12 h-12',  // 48px
        lg: 'w-20 h-20',  // 80px
    };

    return (
        <div
            className={`flex items-center justify-center ${sizeClasses[size]} ${className}`}
            style={{ color: '#8B4513' }}
        >
            {children}
        </div>
    );
}

// Solid star icon for ratings
export function StarSolidIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
        >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
}

// Rating stars component
interface RatingStarsProps {
    rating?: number;
    reviewCount?: number;
    size?: 'sm' | 'md';
}

export function RatingStars({ rating = 5, reviewCount, size = 'md' }: RatingStarsProps) {
    const sizeClass = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';

    return (
        <div className="flex items-center gap-1">
            <div className="flex" aria-label={`Đánh giá ${rating} trên 5 sao`}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <StarSolidIcon
                        key={star}
                        className={`${sizeClass} ${star <= rating ? 'text-accent' : 'text-gray-300'}`}
                    />
                ))}
            </div>
            {reviewCount !== undefined && (
                <span className="text-sm text-text-muted">({reviewCount})</span>
            )}
        </div>
    );
}

// Placeholder icon for images
export function PlaceholderIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
        </svg>
    );
}
