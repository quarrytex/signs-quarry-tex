# Sign + Wrap Systems - Project Documentation

## Overview

Sign + Wrap Systems is a professional signage and vehicle wrap business website built as a modern single-page application. The platform showcases the company's services in vehicle wraps, glass/window graphics, and dimensional signage while providing a fully functional quote request system for potential clients. The application features a portfolio gallery with filtering, service descriptions, company information, and a contact form with backend data persistence.

**Recent Updates (October 2025):**
- **OPTIMIZED: Hero Video Loading** - Enhanced mobile performance with preload="auto" and automatic retry logic for improved loading speed and reliability
- **NEW: Multi-Step Quote Request System** - Interactive service selection (Vehicle Wrap, Window Wrap, Custom Signs) with service-specific forms
  - Vehicle Wrap form: email, vehicle type, vehicle color, project details, image URLs
  - Window Wrap form: email, project details, image URLs
  - Custom Signs form: email, project details, image URLs
  - Automated email notifications to qtisignservices@gmail.com via Resend integration
- **NEW: Interactive Configurator** - Design & price configurator for all three services with real-time pricing calculations and strategic pricing models
- **NEW: Cocreate Page** - Static content page showcasing collaborative projects with contractors and creatives, featuring real project stories and team updates (renamed from "News")
- **NEW: Careers Page** - Career opportunities and training program information with hands-on workshop details
- **NEW: Shop** - E-commerce shop page for selling vehicle accessories including American flag decals and wraps with Stripe payment integration, product listings, and checkout flow
- **NEW: Industry Solutions Page** - Comprehensive industry-specific signage solutions page covering Retail & Food Service, Healthcare & Medical, Corporate & Professional Services, Construction & Contractors, Beauty & Cosmetics, and Real Estate sectors
- **Portfolio Gallery** - 29 vehicle wrap projects (including Mazzella's Gourmet Market van wrap), 9 window wrap projects, and 7 dimensional sign projects (all real client work)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Library**: Radix UI primitives with shadcn/ui component system
- **Styling**: Tailwind CSS with custom design tokens following the "New York" style variant

**Design System:**
- Modern, portfolio-focused aesthetic inspired by creative agencies
- Dark mode support with theme toggle functionality
- Custom color palette: Deep Charcoal backgrounds, Industrial Blue for CTAs, Vibrant Cyan for accents
- Typography: Inter font family (400-800 weights)
- Responsive layout using Tailwind's utility classes
- Component library structured under `@/components/ui/` for reusable primitives

**State Management:**
- TanStack Query (React Query) for server state management
- React hooks for local component state
- Toast notifications for user feedback

**Page Structure:**
- Home page (/) - Single-page application with smooth scrolling between sections
  - Sections: Hero (with video background and dark gradient tint overlay on all devices), Services/Portfolio (merged section with portfolio layout), About, Contact, Footer
- Vehicle & Fleet Wraps page (/vehicle-fleet) - Portfolio gallery with 29 vehicle and fleet wrap projects
- Glass Wraps page (/glass-wraps) - Portfolio gallery with 9 glass wrap projects
- Signs page (/signs) - Portfolio gallery with 7 dimensional sign projects
- Industry Solutions page (/industry-solutions) - Industry-specific signage solutions (Retail, Healthcare, Corporate, Construction, Beauty, Real Estate)
- Configurator page (/configurator) - Interactive design and pricing tool
- Cocreate page (/cocreate) - Company announcements and news blog
- Careers page (/team) - Career opportunities and training program information
- Shop page (/shop) - E-commerce product listings for vehicle accessories (American flags, QR codes, etc.)
- Checkout page (/checkout) - Stripe-powered payment processing for product purchases
- Terms page (/terms) - Terms of service
- Privacy page (/privacy) - Privacy policy
- Responsive navigation header with mobile menu support

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- ESM module system
- Development/production environment configuration

**API Design:**
- RESTful endpoints under `/api` prefix
- Quote request endpoints:
  - `POST /api/quote-requests` - Create new quote request
  - `GET /api/quote-requests` - Retrieve all quote requests
- Configuration endpoints:
  - `POST /api/configurations/calculate` - Calculate price estimate
  - `POST /api/configurations` - Save configuration
  - `GET /api/configurations` - Retrieve all configurations
- News endpoints:
  - `POST /api/news` - Create new news post
  - `GET /api/news` - Retrieve all news posts (sorted newest first)
  - `GET /api/news/:id` - Get specific news post
- Team endpoints:
  - `POST /api/team` - Create new team member
  - `GET /api/team` - Retrieve all team members (sorted by orderIndex)
  - `GET /api/team/:id` - Get specific team member
- Product endpoints:
  - `POST /api/products` - Create new product
  - `GET /api/products` - Retrieve all products (sorted by orderIndex)
  - `GET /api/products/:id` - Get specific product
- Order endpoints:
  - `POST /api/orders` - Create new order
  - `GET /api/orders` - Retrieve all orders (sorted newest first)
  - `GET /api/orders/:id` - Get specific order
- Stripe payment endpoints:
  - `POST /api/create-payment-intent` - Create Stripe payment intent for checkout
  - `POST /api/stripe-webhook` - Handle Stripe payment webhooks for order status updates
- Request validation using Zod schemas derived from Drizzle ORM
- JSON request/response format
- Error handling middleware with appropriate HTTP status codes

**Data Layer:**
- Drizzle ORM for type-safe database interactions
- Schema-first approach with Zod validation integration
- Currently using in-memory storage (MemStorage class) as implementation
- Designed for PostgreSQL database migration (schema and config present)
- Six main data models: Quote Requests, Configurations, News Posts, Team Members, Products, and Orders

**Development Tools:**
- Vite middleware integration for HMR in development
- Request logging middleware for API monitoring
- Replit-specific plugins for development environment

**Email Integration:**
- Resend integration for transactional emails
- Automated quote request notifications sent to qtisignservices@gmail.com
- Email includes service type, customer email, vehicle details (if applicable), project details, and image URLs

### Database Schema

**Quote Requests Table:**
- `id`: UUID primary key (auto-generated)
- `email`: Text field (required, validated as email)
- `service`: Text field (required - "vehicle-wrap", "window-wrap", or "custom-signs")
- `vehicleType`: Text field (optional - for vehicle wraps only)
- `vehicleColor`: Text field (optional - for vehicle wraps only)
- `projectDetails`: Text field (required - project description)
- `imageUrls`: Text array (optional - URLs to reference images)
- `createdAt`: Timestamp (auto-generated)

**Configurations Table:**
- `id`: UUID primary key (auto-generated)
- `serviceType`: Text field (required - "vehicle-wrap", "glass-wrap", or "dimensional-sign")
- `customerName`: Text field (optional)
- `customerEmail`: Text field (optional, validated as email if provided)
- `options`: JSONB field (configuration options based on service type)
- `estimatedPrice`: Integer (calculated price in cents)
- `createdAt`: Timestamp (auto-generated)

**News Posts Table:**
- `id`: UUID primary key (auto-generated)
- `title`: Text field (required)
- `content`: Text field (required)
- `author`: Text field (optional)
- `publishedDate`: Timestamp (auto-generated)

**Team Members Table:**
- `id`: UUID primary key (auto-generated)
- `name`: Text field (required)
- `role`: Text field (required)
- `imageUrl`: Text field (optional - URL to headshot)
- `bio`: Text field (optional - short biography)
- `orderIndex`: Integer (default 0, for display ordering)

**Products Table:**
- `id`: UUID primary key (auto-generated)
- `name`: Text field (required)
- `description`: Text field (required)
- `price`: Integer (required - price in cents)
- `category`: Text field (required)
- `imageUrl`: Text field (optional - product image URL)
- `features`: Text array (optional - list of product features)
- `inStock`: Integer (required, default 1 - inventory count)
- `orderIndex`: Integer (default 0, for display ordering)

**Orders Table:**
- `id`: UUID primary key (auto-generated)
- `customerName`: Text field (required)
- `customerEmail`: Text field (required, validated as email)
- `customerPhone`: Text field (optional)
- `productId`: Text field (required - references product)
- `productName`: Text field (required - denormalized for history)
- `quantity`: Integer (required)
- `totalPrice`: Integer (required - total in cents)
- `stripePaymentIntentId`: Text field (optional - Stripe payment ID)
- `status`: Text field (required - pending, paid, completed, cancelled)
- `createdAt`: Timestamp (auto-generated)

**Validation Rules:**
- Quote Requests: Email (valid format), service (enum), and project details required; vehicle type and color required only for vehicle-wrap service; image URLs optional (must be valid URLs)
- Configurations: Service type and options required; customer info optional
- News Posts: Title and content required (minimum 1 character each); author optional
- Team Members: Name and role required (minimum 1 character each); imageUrl, bio, and orderIndex optional
- Products: Name, description, price (positive), category, and inStock (non-negative) required; imageUrl and features optional
- Orders: Customer name, email (valid format), productId, productName, quantity (min 1), totalPrice (non-negative), and status required; phone and stripePaymentIntentId optional

### External Dependencies

**UI Component Libraries:**
- `@radix-ui/*` - Accessible, unstyled UI primitives (20+ components including dialogs, dropdowns, navigation, etc.)
- `class-variance-authority` - Type-safe component variant management
- `tailwindcss` - Utility-first CSS framework
- `lucide-react` - Icon library

**Data Management:**
- `@tanstack/react-query` - Asynchronous state management
- `react-hook-form` - Form state and validation
- `@hookform/resolvers` - Validation schema integration
- `zod` - Runtime type validation

**Database & ORM:**
- `drizzle-orm` - TypeScript ORM
- `drizzle-zod` - Zod schema generation from Drizzle schemas
- `@neondatabase/serverless` - Neon PostgreSQL serverless driver
- `drizzle-kit` - Database migration toolkit

**Date Handling:**
- `date-fns` - Modern date utility library

**Development:**
- `@replit/vite-plugin-runtime-error-modal` - Error overlay
- `@replit/vite-plugin-cartographer` - Replit integration
- `@replit/vite-plugin-dev-banner` - Development banner

**Routing:**
- `wouter` - Minimalist routing library

**Payment Processing:**
- `stripe` - Server-side Stripe SDK for payment processing
- `@stripe/react-stripe-js` - React components for Stripe Elements
- `@stripe/stripe-js` - Client-side Stripe.js library

**Additional UI:**
- `cmdk` - Command menu component
- `embla-carousel-react` - Carousel/slider functionality
- `vaul` - Drawer component
- `input-otp` - OTP input handling
- `react-day-picker` - Date picker
- `recharts` - Charting library

**Assets:**
- Static images stored in `attached_assets/stock_images/` directory
- American flag images used as product images in the shop
- Hero video with optimized loading (preload="auto", automatic retry logic for playback reliability)
- Dark gradient overlay on hero video for text readability on all devices
- Images and videos imported and bundled via Vite's asset handling

**Payment Configuration:**
- Stripe integration requires two environment variables:
  - `VITE_STRIPE_PUBLIC_KEY` - Publishable key (starts with pk_) - safe for client-side
  - `STRIPE_SECRET_KEY` - Secret key (starts with sk_) - server-side only
- Shop functionality works without Stripe keys but checkout requires configuration
- Payment intent creation, order tracking, and webhook handling implemented