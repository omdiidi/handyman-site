# Rez The Builder LLC - Handyman Website

## Overview

A professional handyman service website for Rez The Builder LLC, serving the Eastside Washington area (Redmond, Bellevue, Kirkland, Issaquah, and Sammamish). The application is a marketing and lead generation website designed to convert visitors into phone calls, featuring service discovery, customer reviews, and clear calls-to-action throughout. Built with React, TypeScript, Express, and styled with Tailwind CSS using shadcn/ui components.

## Recent Updates (October 8, 2025)

**Completed Features:**
- Hero section with auto-rotating slideshow (14 real project images, 5-second intervals with fade transitions)
- 5-star rating display (5.0 with 200+ reviews) and service area badges on hero
- Smart job finder with 33 professional services
- Advanced search with debouncing (300ms), fuzzy matching, and synonym support
- Closest match suggestions (top 3) when no exact results found
- Reviews section with "Show More" functionality (displays 15 reviews, loads 3 at a time)
- Comprehensive FAQ section (9 questions) with clickable phone links
- Sticky call/text bar for mobile (appears after 400px scroll)
- "Browse all services" button with search icon that auto-focuses job finder search
- Page title updates for better SEO ("Find your service - Rez The Builder LLC")

**Design System:**
- Professional blue (217 91% 25%) and orange (32 95% 44%) color scheme
- Mobile-first responsive design
- Call-only business model (no forms or email)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript in strict mode
- Vite for development and production builds
- Client-side routing using Wouter (lightweight React Router alternative)
- Mobile-first responsive design approach

**UI Component System**
- shadcn/ui component library with Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- "New York" style variant with neutral base color
- Custom color palette for light/dark modes focused on trust and professionalism
- Inter font family for all typography

**State Management & Data Fetching**
- TanStack React Query for server state management
- No complex global state - component-level state with React hooks
- Query client configured with infinite stale time and no automatic refetching

**Key Design Patterns**
- Component composition with shared UI primitives
- Path aliases (@/, @shared/, @assets/) for clean imports
- Separation of page components from reusable UI components
- Example components provided for all major features

### Backend Architecture

**Server Framework**
- Express.js with TypeScript
- ESM module system throughout
- Vite middleware integration for development
- Static file serving for production builds

**Storage Layer**
- In-memory storage implementation (MemStorage class) for development
- Defined storage interface (IStorage) for easy database migration
- User model already defined but unused (placeholder for future auth)
- Drizzle ORM configured but not actively used yet

**API Design**
- RESTful conventions with /api prefix for all routes
- JSON request/response format
- Centralized error handling middleware
- Request logging with timing and JSON response capture

### External Dependencies

**Database**
- Drizzle ORM configured for PostgreSQL (via @neondatabase/serverless)
- Schema defined in shared/schema.ts with Zod validation
- Migration system ready (drizzle-kit) but not actively used
- Connection expects DATABASE_URL environment variable

**UI Component Libraries**
- Radix UI primitives (20+ component packages)
- Embla Carousel for image rotation
- cmdk for command palette (unused currently)
- Lucide React for icons

**Development Tools**
- Replit-specific plugins (cartographer, dev-banner, runtime-error-modal)
- TypeScript with strict checking and path resolution
- PostCSS with Tailwind and Autoprefixer
- esbuild for server bundling in production

**Key Integrations**
- Phone calls: tel: links to 425-442-9328
- SMS messaging: sms: links for text contact
- No email forms - phone-first contact strategy
- No authentication or user accounts currently implemented

**Content Strategy**
- Static content driven by attached asset text files
- Service catalog with fuzzy search and tag-based matching
- FAQ accordion from predefined content
- Customer reviews from static data (no dynamic review system)