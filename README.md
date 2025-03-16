# Shopdash - Modern E-commerce Admin Panel

A sleek, responsive admin dashboard for e-commerce businesses to manage their online operations efficiently with real-time insights.

![Shopdash Dashboard](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80)

## Features

- **Analytics Dashboard** - Interactive charts and KPIs showing sales trends, customer acquisition, and revenue metrics
- **Inventory Management** - Grid view of products with search, filter, and quick-edit capabilities
- **Order Processing** - Streamlined workflow for viewing, processing, and tracking customer orders
- **Responsive Design** - Clean, minimalist UI with dark/light mode toggle and mobile-friendly layouts
- **Role-based Access** - Customizable permissions for different team members

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, shadcn/ui
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Payments**: Stripe
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Stripe account (for payment processing)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ahmed86-star/Shopdash.git
   cd Shopdash
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   ```
   Then fill in your Supabase and Stripe credentials in the `.env.local` file.

4. Run the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/src/app` - Next.js app router pages and API routes
- `/src/components` - Reusable React components
- `/src/lib` - Utility functions and shared code
- `/supabase` - Supabase client configuration and edge functions

## Deployment

The application can be easily deployed to Vercel:

```bash
vercel
```

Make sure to set up the required environment variables in your Vercel project settings.

## License

MIT

