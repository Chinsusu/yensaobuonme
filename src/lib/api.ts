const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
    meta?: {
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

async function fetchApi<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`;

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...options.headers,
        },
        ...options,
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
}

// Categories
export async function getCategories() {
    return fetchApi<Category[]>('/categories');
}

export async function getCategoryBySlug(slug: string) {
    return fetchApi<CategoryWithProducts>(`/categories/${slug}`);
}

// Products
export async function getProducts(params?: ProductQueryParams) {
    const searchParams = new URLSearchParams();
    if (params?.category) searchParams.set('category', params.category);
    if (params?.featured) searchParams.set('featured', '1');
    if (params?.search) searchParams.set('search', params.search);
    if (params?.sort) searchParams.set('sort', params.sort);
    if (params?.order) searchParams.set('order', params.order);
    if (params?.page) searchParams.set('page', params.page.toString());
    if (params?.per_page) searchParams.set('per_page', params.per_page.toString());

    const query = searchParams.toString();
    return fetchApi<Product[]>(`/products${query ? `?${query}` : ''}`);
}

export async function getFeaturedProducts() {
    return fetchApi<Product[]>('/products/featured');
}

export async function getProductBySlug(slug: string) {
    return fetchApi<ProductDetail>(`/products/${slug}`);
}

// Posts
export async function getPosts(params?: PostQueryParams) {
    const searchParams = new URLSearchParams();
    if (params?.category) searchParams.set('category', params.category);
    if (params?.page) searchParams.set('page', params.page.toString());

    const query = searchParams.toString();
    return fetchApi<Post[]>(`/posts${query ? `?${query}` : ''}`);
}

export async function getPostBySlug(slug: string) {
    return fetchApi<PostDetail>(`/posts/${slug}`);
}

// Settings
export async function getSettings() {
    return fetchApi<Record<string, string>>('/settings');
}

// Pages
export async function getPageBySlug(slug: string) {
    return fetchApi<Page>(`/pages/${slug}`);
}

// Types
export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    image: string | null;
    parent_id: number | null;
    children?: Category[];
}

export interface CategoryWithProducts extends Category {
    products: Product[];
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    sku: string | null;
    short_description: string | null;
    price: string;
    compare_at_price: string | null;
    stock_quantity: number;
    is_featured: boolean;
    is_active: boolean;
    category: Category;
    primary_image: string | null;
}

export interface ProductDetail extends Product {
    description: string | null;
    weight: string | null;
    origin: string | null;
    images: { id: number; url: string; alt: string | null }[];
    meta_title: string | null;
    meta_description: string | null;
}

export interface Post {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    featured_image: string | null;
    published_at: string;
    author: { id: number; name: string };
}

export interface PostDetail extends Post {
    content: string;
    categories: { id: number; name: string; slug: string }[];
    tags: { id: number; name: string; slug: string }[];
}

export interface Page {
    id: number;
    title: string;
    slug: string;
    content: string;
    meta_title: string | null;
    meta_description: string | null;
}

export interface ProductQueryParams {
    category?: string;
    featured?: boolean;
    search?: string;
    sort?: string;
    order?: 'asc' | 'desc';
    page?: number;
    per_page?: number;
}

export interface PostQueryParams {
    category?: string;
    page?: number;
}
