"use client";

import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

export function RevenueChart({ dateRange }: { dateRange: DateRange }) {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    // In a real app, you would fetch data based on the date range
    // For demo purposes, we'll generate random data
    generateChartData();
  }, [dateRange]);

  const generateChartData = () => {
    // Generate random revenue data for the chart
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const currentMonth = new Date().getMonth();

    const labels = Array.from({ length: 6 }, (_, i) => {
      const monthIndex = (currentMonth - 5 + i) % 12;
      return months[monthIndex < 0 ? monthIndex + 12 : monthIndex];
    });

    const data = {
      labels,
      datasets: [
        {
          data: Array.from(
            { length: 6 },
            () => Math.floor(Math.random() * 20000) + 10000,
          ),
        },
      ],
    };

    setChartData(data);
  };

  return (
    <div className="w-full h-[200px] bg-white rounded-md">
      {/* This is a placeholder for a real chart component */}
      <div className="w-full h-full flex flex-col">
        <div className="flex-1 relative">
          {/* Line chart visualization */}
          <div className="absolute inset-0 flex items-end">
            <svg
              className="w-full h-full"
              viewBox="0 0 300 150"
              preserveAspectRatio="none"
            >
              {/* Grid lines */}
              <line
                x1="0"
                y1="30"
                x2="300"
                y2="30"
                stroke="#e5e7eb"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="60"
                x2="300"
                y2="60"
                stroke="#e5e7eb"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="90"
                x2="300"
                y2="90"
                stroke="#e5e7eb"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="120"
                x2="300"
                y2="120"
                stroke="#e5e7eb"
                strokeWidth="1"
              />

              {/* Revenue line */}
              <path
                d="M0,120 C20,100 40,110 60,80 C80,60 100,70 120,50 C140,40 160,60 180,30 C200,20 220,40 240,10 C260,30 280,20 300,5"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
              />

              {/* Area under the line */}
              <path
                d="M0,120 C20,100 40,110 60,80 C80,60 100,70 120,50 C140,40 160,60 180,30 C200,20 220,40 240,10 C260,30 280,20 300,5 L300,150 L0,150 Z"
                fill="url(#blue-gradient)"
                fillOpacity="0.2"
              />

              {/* Gradient definition */}
              <defs>
                <linearGradient
                  id="blue-gradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Data points */}
            <div className="absolute inset-0 flex justify-between items-end px-4 pb-6">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mb-1"></div>
                  <div className="text-xs text-gray-500">
                    {chartData?.labels[i]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Y-axis labels */}
          <div className="absolute left-2 top-0 bottom-6 flex flex-col justify-between text-xs text-gray-500">
            <div>$30k</div>
            <div>$20k</div>
            <div>$10k</div>
            <div>$0</div>
          </div>
        </div>
      </div>
    </div>
  );
}
