"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users } from "lucide-react";

export function RealTimeVisitors() {
  const [visitors, setVisitors] = useState({
    current: 0,
    locations: [],
    trend: 0,
  });

  useEffect(() => {
    // Simulate real-time data with random values
    const interval = setInterval(() => {
      const randomChange = Math.floor(Math.random() * 5) - 2; // -2 to +2
      const newVisitors = Math.max(0, visitors.current + randomChange);
      const trend =
        ((newVisitors - visitors.current) / Math.max(1, visitors.current)) *
        100;

      const locations = [
        { city: "New York", count: Math.floor(newVisitors * 0.3) },
        { city: "London", count: Math.floor(newVisitors * 0.25) },
        { city: "Tokyo", count: Math.floor(newVisitors * 0.2) },
        { city: "Paris", count: Math.floor(newVisitors * 0.15) },
        { city: "Sydney", count: Math.floor(newVisitors * 0.1) },
      ];

      setVisitors({
        current: newVisitors,
        locations,
        trend,
      });
    }, 3000);

    // Initialize with some data
    setVisitors({
      current: Math.floor(Math.random() * 50) + 20,
      locations: [
        { city: "New York", count: 12 },
        { city: "London", count: 8 },
        { city: "Tokyo", count: 6 },
        { city: "Paris", count: 5 },
        { city: "Sydney", count: 3 },
      ],
      trend: 5.2,
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-primary/5 dark:bg-primary/10">
        <CardTitle className="text-lg flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          Real-Time Visitors
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Current Visitors
                </p>
                <h3 className="text-3xl font-bold">{visitors.current}</h3>
              </div>
            </div>
            <div className="text-sm px-2 py-1 rounded-md bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
              {visitors.trend > 0 ? "+" : ""}
              {visitors.trend.toFixed(1)}%
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Top Locations</h4>
            <div className="space-y-2">
              {visitors.locations.map((location, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{location.city}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{
                          width: `${(location.count / visitors.current) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {location.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
