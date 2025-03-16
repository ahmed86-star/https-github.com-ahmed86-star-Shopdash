"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Zap } from "lucide-react";

type Sale = {
  id: string;
  customer: string;
  product: string;
  amount: number;
  time: string;
  location: string;
};

const products = [
  "Premium Headphones",
  "Wireless Keyboard",
  "Smart Watch",
  "Bluetooth Speaker",
  "Laptop Stand",
  "Phone Case",
  "USB-C Cable",
  "Wireless Mouse",
  "Power Bank",
  "Fitness Tracker",
];

const locations = [
  "New York, USA",
  "London, UK",
  "Tokyo, Japan",
  "Paris, France",
  "Sydney, Australia",
  "Berlin, Germany",
  "Toronto, Canada",
  "Mumbai, India",
  "São Paulo, Brazil",
  "Dubai, UAE",
];

const generateRandomSale = (): Sale => {
  const now = new Date();
  return {
    id: Math.random().toString(36).substring(2, 10),
    customer: `Customer ${Math.floor(Math.random() * 1000) + 1}`,
    product: products[Math.floor(Math.random() * products.length)],
    amount: Math.floor(Math.random() * 200) + 20,
    time: now.toLocaleTimeString(),
    location: locations[Math.floor(Math.random() * locations.length)],
  };
};

export function LiveSalesFeed() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [totalSales, setTotalSales] = useState(0);

  useEffect(() => {
    // Initialize with some data
    const initialSales = Array(5)
      .fill(null)
      .map(() => generateRandomSale());

    setSales(initialSales);
    setTotalSales(initialSales.reduce((sum, sale) => sum + sale.amount, 0));

    // Simulate real-time data
    const interval = setInterval(() => {
      const newSale = generateRandomSale();
      setSales((prev) => [newSale, ...prev.slice(0, 4)]);
      setTotalSales((prev) => prev + newSale.amount);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-primary/5 dark:bg-primary/10">
        <CardTitle className="text-lg flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          Live Sales Feed
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Total Sales Today
                </p>
                <h3 className="text-3xl font-bold">
                  ${totalSales.toLocaleString()}
                </h3>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {sales.map((sale) => (
              <div
                key={sale.id}
                className="flex items-center justify-between p-3 rounded-lg border border-border bg-card/50 animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
              >
                <div className="flex flex-col">
                  <span className="font-medium">{sale.product}</span>
                  <span className="text-xs text-muted-foreground">
                    {sale.customer} • {sale.location}
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-medium text-green-600 dark:text-green-400">
                    ${sale.amount}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {sale.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
