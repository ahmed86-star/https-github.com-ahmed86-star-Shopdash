"use client";

import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

type Product = {
  name: string;
  sales: number;
  revenue: number;
  growth: number;
};

export function TopProducts({ dateRange }: { dateRange: DateRange }) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // In a real app, you would fetch data based on the date range
    // For demo purposes, we'll generate random data
    const mockProducts = [
      {
        name: "Premium Headphones",
        sales: Math.floor(Math.random() * 100) + 50,
        revenue: Math.floor(Math.random() * 5000) + 2000,
        growth: Math.floor(Math.random() * 30) - 5,
      },
      {
        name: "Wireless Keyboard",
        sales: Math.floor(Math.random() * 80) + 30,
        revenue: Math.floor(Math.random() * 3000) + 1000,
        growth: Math.floor(Math.random() * 20) + 5,
      },
      {
        name: "Smart Watch",
        sales: Math.floor(Math.random() * 60) + 20,
        revenue: Math.floor(Math.random() * 4000) + 1500,
        growth: Math.floor(Math.random() * 15) - 2,
      },
      {
        name: "Bluetooth Speaker",
        sales: Math.floor(Math.random() * 50) + 15,
        revenue: Math.floor(Math.random() * 2500) + 800,
        growth: Math.floor(Math.random() * 25) + 10,
      },
    ];

    setProducts(mockProducts);
  }, [dateRange]);

  return (
    <div className="w-full">
      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center text-xs font-medium">
                {index + 1}
              </div>
              <div>
                <div className="font-medium text-sm">{product.name}</div>
                <div className="text-xs text-muted-foreground">
                  {product.sales} units
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="font-medium">
                ${product.revenue.toLocaleString()}
              </div>
              <div
                className={`text-xs ${product.growth >= 0 ? "text-green-500" : "text-red-500"}`}
              >
                {product.growth >= 0 ? "+" : ""}
                {product.growth}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
