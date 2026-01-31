'use client';

interface SortSelectProps {
    currentSort: string;
    options: { value: string; label: string }[];
}

export default function SortSelect({ currentSort, options }: SortSelectProps) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const url = new URL(window.location.href);
        url.searchParams.set('sort', e.target.value);
        window.location.href = url.toString();
    };

    return (
        <select
            defaultValue={currentSort}
            className="px-3 py-2 border rounded-lg text-sm focus:border-amber-500 outline-none"
            onChange={handleChange}
        >
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
}
