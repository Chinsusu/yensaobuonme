# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

- Full-text search
- Redis caching
- API with rate limiting

### Features (MVP)
- Browse products by category
- Product search and filters
- Product detail with image gallery
- Shopping cart
- Guest checkout
- Order tracking
- Blog posts with categories
- Static pages (About, Contact, etc.)
- Mobile responsive design

## [0.5.0] - TBD (Week 4)

### Added
- SEO meta tags on all pages
- Auto-generated sitemap
- Schema.org markup
- Blog content (15+ posts)
- Product descriptions
- Performance optimization

## [0.5.0] - 2026-01-31 (Phase 4 - SEO)

### Added
- SEO utilities (lib/seo.ts) với generateSEO metadata function
- Schema.org JSON-LD generators (Organization, Website, Product, Article, Breadcrumb)
- JsonLd component cho structured data embedding
- Dynamic sitemap.ts với auto-fetch products/posts
- robots.txt configuration
- Enhanced root layout với full metadata, viewport, icons
- Product detail với Product + Breadcrumb Schema.org markup
- Twitter Card và Open Graph meta tags
- Canonical URLs và metadataBase

## [0.4.0] - 2026-01-31 (Phase 3 - Frontend)

### Added
- Next.js 14 frontend with App Router
- TypeScript + TailwindCSS setup
- API client with full type definitions
- Homepage with hero, categories, featured products, USP sections
- Product listing page with sidebar filters, pagination, sorting
- Product detail page with gallery, pricing, add to cart
- Cart page with quantity controls, free shipping progress
- Checkout page with customer form, address, payment method
- Order success confirmation page
- Blog listing with featured post layout
- Blog detail with tags, share buttons
- About page with story, values, stats, team sections
- Contact page with form, info, map placeholder
- Dynamic static pages (policies, shipping, payment guides)
- Header component (navigation, search, cart, mobile menu)
- Footer component (newsletter, links, contact)
- ProductCard, SortSelect components
- Premium amber/gold theme design
- Responsive mobile-first design
- SEO metadata configuration
- **Total: 11 routes, 15+ components**

## [0.3.0] - 2026-01-31 (Phase 2 - API)

### Added
- RESTful API endpoints (20+ routes)
- CategoryController: list categories (nested), show with products
- ProductController: list with filters/sorting/pagination, featured, detail
- PostController: list posts, show detail, categories
- ContentController: static pages, public settings
- CartController: add/update/remove/clear items (session-based)
- OrderController: create order, view details, track order
- API Resources: ProductResource, CategoryResource, PostResource
- Stock validation and transaction handling
- Redis caching for featured products and settings

## [0.2.0] - 2026-01-31 (Phase 1 - Backend)

### Added
- Laravel 10 project setup with Filament 3
- 13 database migrations (users, categories, products, orders, posts, etc.)
- 11 Eloquent models with relationships and scopes
- Filament Resources: Product, Category, Order, Post, Page, Setting
- Dashboard widgets: StatsOverview, RevenueChart, LatestOrders
- Model factories for testing
- Database seeders with sample data
- Spatie Media Library and Sitemap packages

## [0.1.0] - 2026-01-31

### Added
- Project documentation
- Development roadmap
- Database design
- System architecture
- Coding standards
- API documentation
- Setup guides

---

## Version Numbering

- **MAJOR** version when you make incompatible API changes
- **MINOR** version when you add functionality in a backward compatible manner
- **PATCH** version when you make backward compatible bug fixes

### Example Updates

```markdown
## [1.1.0] - 2026-04-15

### Added
- Product reviews and ratings
- Wishlist functionality
- VNPay payment integration

### Changed
- Improved checkout UX
- Updated product image gallery

### Fixed
- Cart quantity bug on mobile
- SEO meta tags not updating

### Security
- Updated Laravel to 11.5
- Fixed XSS vulnerability in search
```

