# Shopdash - Modern E-commerce Admin Panel

A sleek, responsive admin dashboard for e-commerce businesses to manage their online operations efficiently with real-time insights.

![image](https://github.com/user-attachments/assets/518dc5d5-261b-4560-925d-6d479d4a1740)

## Features

![image](https://github.com/user-attachments/assets/acd4f097-5d05-441a-92a2-becd6aef4b51)


- **Analytics Dashboard** - Interactive charts and KPIs showing sales trends, customer acquisition, and revenue metrics
- **Inventory Management** - Grid view of products with search, filter, and quick-edit capabilities
- **Order Processing** - Streamlined workflow for viewing, processing, and tracking customer orders
- **Responsive Design** - Clean, minimalist UI with dark/light mode toggle and mobile-friendly layouts
- **Role-based Access** - Customizable permissions for different team members

![image](https://github.com/user-attachments/assets/9ba436bb-f6ae-4a96-93fb-c5cac2180926)


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
![image](https://github.com/user-attachments/assets/7ca7eeab-fb09-4d75-9e49-29f6c0ae1797)

### MY VISON

A tool that’s intuitive and powerful, freeing you to focus on growing your business, not fighting your workflow! 🌟

![Screenshot 2025-03-16 at 7 09 30 PM](https://github.com/user-attachments/assets/61c6f068-c3be-4507-8031-5c7b1e237a2b)
Why I built it: To simplify online store management and make it smarter, not harder! 🙌


![Screenshot 2025-03-16 at 7 09 40 PM](https://github.com/user-attachments/assets/426b05aa-95e3-4460-b4f8-d3af1edab9f3)

The Problem: Too many store owners stuck with chaos—spreadsheets for inventory 📊, separate order software 📦, and outdated analytics tools 🛠️. It’s slow, messy, and stressful.
The Solution: Shopdash—a sleek admin panel that unifies it all:




![Screenshot 2025-03-16 at 7 09 40 PM](https://github.com/user-attachments/assets/1bb01b65-6c74-4fb8-971f-75a90f50699e)

📈 Analytics: Instantly track sales, customer habits, and trends—no more digging through reports.
🗂️ Inventory: Stay on top of stock levels, prevent overselling, and keep customers happy.
🚚 Orders: Manage orders from start to finish, fast and error-free.





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

