# Design Guidelines: Rez The Builder LLC - Professional Handyman Website

## Design Approach

**Hybrid System-Based Approach** combining Material Design's structure with service marketplace patterns (Thumbtack, HomeAdvisor inspiration) for trust-building. The design prioritizes professionalism, accessibility, and conversion optimization for a call-only business model.

**Core Principles:**
- Trust through clarity and professionalism
- Mobile-first for on-the-go homeowners
- Prominent, persistent call-to-action
- Service discoverability through intuitive search
- Local authenticity and credibility signals

---

## Color Palette

**Light Mode:**
- Primary: 217 91% 25% (Deep professional blue - trust and reliability)
- Primary Light: 217 91% 35% (Hover states)
- Accent: 32 95% 44% (Warm orange for CTAs - action and urgency)
- Success: 142 76% 36% (Green for trust badges)
- Background: 0 0% 98% (Soft white)
- Surface: 0 0% 100% (Pure white cards)
- Text Primary: 217 19% 27% (Dark blue-gray)
- Text Secondary: 217 10% 50% (Medium gray)

**Dark Mode:**
- Primary: 217 91% 65% (Lighter blue for contrast)
- Primary Light: 217 91% 75%
- Accent: 32 95% 55% (Adjusted orange)
- Success: 142 76% 45%
- Background: 217 19% 12% (Deep blue-black)
- Surface: 217 19% 18% (Elevated surfaces)
- Text Primary: 0 0% 95% (Near white)
- Text Secondary: 0 0% 70% (Light gray)

---

## Typography

**Font Families:**
- Headings: 'Inter', sans-serif (700, 600 weights) - Clean, modern, professional
- Body: 'Inter', sans-serif (400, 500 weights)
- Accent/Numbers: 'Inter', sans-serif (800 weight for phone numbers)

**Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl font-bold
- Page Headers: text-4xl md:text-5xl font-bold
- Section Titles: text-3xl md:text-4xl font-semibold
- Card Titles: text-xl md:text-2xl font-semibold
- Body: text-base md:text-lg
- Small Text: text-sm
- Phone Number (Hero): text-3xl md:text-4xl lg:text-5xl font-extrabold

---

## Layout System

**Spacing Primitives:** Consistent use of 4, 8, 12, 16, 20, 24 Tailwind units
- Component padding: p-4, p-6, p-8
- Section spacing: py-16, py-20, py-24
- Gap utilities: gap-4, gap-6, gap-8
- Container: max-w-7xl mx-auto px-4 md:px-6 lg:px-8

**Grid Patterns:**
- Service cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Feature highlights: grid-cols-1 md:grid-cols-2
- Review cards: grid-cols-1 md:grid-cols-3

---

## Core Components

### Navigation
- Sticky header with white/dark surface background
- Logo left, navigation center, phone CTA right
- Mobile: Hamburger menu with full-screen overlay
- Links: Home, About, Job Finder, FAQ, Contact
- Prominent phone button with icon

### Hero Section
- Full-width with professional background image (tools, completed work, or Eastside neighborhood)
- Height: min-h-[600px] md:min-h-[700px]
- Overlay gradient for text readability
- Centered content with max-w-4xl
- Large headline + supporting subhead
- Two CTAs: Primary "Call Now" (accent orange), Secondary "Browse Services" (outline white with blur background)
- Trust badges row below CTAs (Licensed • Bonded • Insured)

### Call-to-Action Buttons
- Primary: Rounded-full, accent color background, white text, shadow-lg, bold font
- Size: px-8 py-4 text-lg
- Hover: Slight scale and shadow increase
- Phone icon included with number
- Sticky mobile bar at bottom: Fixed, backdrop-blur, shadow-2xl

### Service Cards (Job Finder)
- White/dark surface cards with rounded-xl
- Padding: p-6
- Border subtle: border border-gray-200 dark:border-gray-700
- Hover: shadow-lg transition, subtle scale
- Layout: Icon top-left, title, description, "Call to book" link
- Category badges with pill shape

### Search Component
- Prominent search bar with magnifying glass icon
- Rounded-full input field
- Real-time filtering indication
- Clear button when active
- Sticky on scroll for Job Finder page

### Review/Testimonial Cards
- Grid layout with subtle background tint
- Star rating visual (5 gold stars)
- Quote text in italics
- Customer name and city below
- Avatar placeholder circles

### Trust Indicators
- Badge components with icons
- Row layout for credentials: License number, Insurance, Bonding
- Service area tags in pill format
- Review count with star visual prominently displayed

### Footer
- Three-column layout (desktop): Company info, Quick links, Contact
- Single column (mobile) stacked
- Dark background with light text
- Business hours clearly listed
- Social proof summary
- Copyright and licensing info

---

## Images

**Hero Section:**
- Large professional image of completed handyman work, tools in action, or satisfied customer with fixed home
- Recommendation: Wide shot of Eastside neighborhood home with professional tools/ladder
- Overlay: Linear gradient from transparent to rgba(0,0,0,0.4) for text contrast

**About Page:**
- Professional photo of Reza (business owner) with tools or at work site
- Placement: Left side of two-column layout, text right

**Service Area Map:**
- Optional visual map highlighting Redmond, Bellevue, Kirkland, Issaquah, Sammamish
- Can use simple illustration or interactive map component

**Job Finder Icons:**
- Each service category gets a relevant icon from Heroicons (wrench, hammer, paint brush, etc.)
- Consistent sizing: w-12 h-12

---

## Page-Specific Layouts

### Home Page
1. Hero with image background and CTAs
2. "What We Do" - Grid of service category cards (3 columns desktop)
3. "Why Choose Reza" - 4-column trust points with icons
4. Reviews showcase - 3 testimonial cards
5. Service areas - Visual map or list with location icons
6. Final CTA banner before footer

### Job Finder Page
- Sticky search bar at top
- Category filter pills below search
- Results grid: 3 columns desktop, 1 mobile
- Each card shows service name, description, relevant tags
- "Call to discuss" CTA on each card
- Shows result count

### Contact Page
- Centered layout, max-w-2xl
- Giant phone number with call icon
- Business hours in clear typography
- Service areas listed
- "No forms" message emphasized
- Optional: Simple map showing service area

### FAQ Page
- Accordion-style Q&A
- 4-6 questions with expand/collapse
- Each answer ends with call prompt
- Clean, readable spacing

---

## Responsive Behavior
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Mobile: Single column, larger touch targets (min 44px)
- Tablet: 2-column grids
- Desktop: 3-column grids, side-by-side layouts
- Sticky CTA bar appears on mobile scroll
- Navigation collapses to hamburger < 768px

---

## Interaction & Animation
- Minimal, purposeful animations only
- Button hover: slight scale (1.02) and shadow increase
- Card hover: subtle lift with shadow
- Smooth scrolling for anchor links
- Search results: Gentle fade-in for filtered items
- Page transitions: Simple fade
- Loading states: Subtle pulse for search results