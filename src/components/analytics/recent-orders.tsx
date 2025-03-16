"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

type Order = {
  id: string;
  customer: string;
  amount: number;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  date: string;
};

export function RecentOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // In a real app, you would fetch data from your API
    // For demo purposes, we'll generate random data
    const statuses: Order["status"][] = [
      "processing",
      "shipped",
      "delivered",
      "cancelled",
    ];
    const names = [
      "John Smith",
      "Emma Johnson",
      "Michael Brown",
      "Olivia Davis",
      "William Wilson",
      "Sophia Martinez",
      "James Taylor",
      "Isabella Anderson",
      "Robert Thomas",
      "Ava Jackson",
    ];

    const mockOrders = Array.from({ length: 5 }, (_, i) => ({
      id: `ORD-${Math.floor(Math.random() * 10000)}`,
      customer: names[Math.floor(Math.random() * names.length)],
      amount: Math.floor(Math.random() * 500) + 50,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      date: new Date(
        Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000),
      ).toLocaleDateString(),
    }));

    setOrders(mockOrders);
  }, []);

  return (
    <div className="w-full">
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-md"
          >
            <div className="flex flex-col">
              <div className="font-medium">{order.customer}</div>
              <div className="text-xs text-muted-foreground">{order.id}</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-sm font-medium">${order.amount}</div>
              <StatusBadge status={order.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: Order["status"] }) {
  const variants = {
    processing: "bg-blue-100 text-blue-800",
    shipped: "bg-yellow-100 text-yellow-800",
    delivered: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
  };

  return (
    <Badge
      className={`${variants[status]} hover:${variants[status]}`}
      variant="outline"
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
}
