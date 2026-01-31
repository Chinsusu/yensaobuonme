import { getProducts, getCategories } from '@/lib/api';
import ProductCard from '@/components/products/ProductCard';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sản phẩm',
    description: 'Khám phá các sản phẩm yến sào cao cấp từ Yến Sào Hòn Nội',
};

interface PageProps {
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ProductsPage({ searchParams }: PageProps) {
    const category = typeof searchParams.category === 'string' ? searchParams.category : undefined;
    const search = typeof searchParams.search === 'string' ? searchParams.search : undefined;
    const sort = typeof searchParams.sort === 'string' ? searchParams.sort : 'created_at';
    const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page) : 1;

    const [productsRes, categoriesRes] = await Promise.all([
        getProducts({ category, search, sort, page, per_page: 12 }).catch(() => ({ success: false, data: [], meta: undefined })),
        getCategories().catch(() => ({ success: false, data: [] })),
    ]);

    const products = productsRes.data || [];
    const categories = categoriesRes.data || [];
    const meta = productsRes.meta;

    const sortOptions = [
        { value: 'created_at', label: 'Mới nhất' },
        { value: 'price', label: 'Giá thấp đến cao' },
        { value: 'price-desc', label: 'Giá cao đến thấp' },
        { value: 'name', label: 'Tên A-Z' },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Sản phẩm</h1>
                    <p className="text-amber-100">
                        {search ? `Kết quả tìm kiếm: "${search}"` : 'Khám phá các sản phẩm yến sào cao cấp'}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-32">
                            <h3 className="font-semibold text-gray-800 mb-4">Danh mục</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/san-pham"
                                        className={`block px-3 py-2 rounded-lg transition-colors ${!category ? 'bg-amber-100 text-amber-700' : 'hover:bg-gray-100'
                                            }`}
                                    >
                                        Tất cả sản phẩm
                                    </Link>
                                </li>
                                {categories.map((cat) => (
                                    <li key={cat.id}>
                                        <Link
                                            href={`/san-pham?category=${cat.slug}`}
                                            className={`block px-3 py-2 rounded-lg transition-colors ${category === cat.slug ? 'bg-amber-100 text-amber-700' : 'hover:bg-gray-100'
                                                }`}
                                        >
                                            {cat.name}
                                        </Link>
                                        {cat.children && cat.children.length > 0 && (
                                            <ul className="ml-4 mt-1 space-y-1">
                                                {cat.children.map((child) => (
                                                    <li key={child.id}>
                                                        <Link
                                                            href={`/san-pham?category=${child.slug}`}
                                                            className={`block px-3 py-1.5 text-sm rounded-lg transition-colors ${category === child.slug ? 'bg-amber-100 text-amber-700' : 'text-gray-600 hover:bg-gray-100'
                                                                }`}
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Products Grid */}
                    <main className="lg:col-span-3">
                        {/* Toolbar */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-gray-600">
                                Hiển thị <strong>{products.length}</strong>
                                {meta && ` / ${meta.total}`} sản phẩm
                            </p>
                            <div className="flex items-center gap-2">
                                <label className="text-sm text-gray-600">Sắp xếp:</label>
                                <select
                                    defaultValue={sort}
                                    className="px-3 py-2 border rounded-lg text-sm focus:border-amber-500 outline-none"
                                    onChange={(e) => {
                                        const url = new URL(window.location.href);
                                        url.searchParams.set('sort', e.target.value);
                                        window.location.href = url.toString();
                                    }}
                                >
                                    {sortOptions.map((opt) => (
                                        <option key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Products */}
                        {products.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {products.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl p-12 text-center">
                                <div className="text-6xl mb-4">🥚</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Không tìm thấy sản phẩm
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Hãy thử tìm kiếm với từ khóa khác hoặc xem tất cả sản phẩm
                                </p>
                                <Link href="/san-pham" className="btn-primary">
                                    Xem tất cả
                                </Link>
                            </div>
                        )}

                        {/* Pagination */}
                        {meta && meta.last_page > 1 && (
                            <div className="flex justify-center gap-2 mt-8">
                                {Array.from({ length: meta.last_page }, (_, i) => i + 1).map((p) => (
                                    <Link
                                        key={p}
                                        href={`/san-pham?${new URLSearchParams({
                                            ...(category && { category }),
                                            ...(search && { search }),
                                            ...(sort && { sort }),
                                            page: p.toString(),
                                        }).toString()}`}
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${p === page
                                                ? 'bg-amber-500 text-white'
                                                : 'bg-white hover:bg-amber-100'
                                            }`}
                                    >
                                        {p}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
