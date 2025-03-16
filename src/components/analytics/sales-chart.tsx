"use client";

import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

export function SalesChart({ dateRange }: { dateRange: DateRange }) {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    // In a real app, you would fetch data based on the date range
    // For demo purposes, we'll generate random data
    generateChartData();
  }, [dateRange]);

  const generateChartData = () => {
    // Generate random sales data for the chart
    const days = 30;
    const labels = Array.from({ length: days }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (days - i - 1));
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    });

    const data = {
      labels,
      datasets: [
        {
          label: "Online Sales",
          data: Array.from(
            { length: days },
            () => Math.floor(Math.random() * 1000) + 500,
          ),
          borderColor: "rgb(59, 130, 246)",
          backgroundColor: "rgba(59, 130, 246, 0.5)",
        },
        {
          label: "In-store Sales",
          data: Array.from(
            { length: days },
            () => Math.floor(Math.random() * 800) + 300,
          ),
          borderColor: "rgb(16, 185, 129)",
          backgroundColor: "rgba(16, 185, 129, 0.5)",
        },
      ],
    };

    setChartData(data);
  };

  return (
    <div className="w-full h-[350px] bg-white rounded-md">
      {/* This is a placeholder for a real chart component */}
      <div className="w-full h-full flex flex-col">
        <div className="flex justify-between items-center mb-4 px-4 pt-4">
          <div className="text-sm font-medium">Sales Trends</div>
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-xs text-gray-500">Online</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-gray-500">In-store</span>
            </div>
          </div>
        </div>

        <div className="flex-1 px-4">
          {/* Chart visualization */}
          <div className="w-full h-full bg-gradient-to-b from-blue-50 to-white rounded-md relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-gray-500 py-4">
              <div>$2000</div>
              <div>$1500</div>
              <div>$1000</div>
              <div>$500</div>
              <div>$0</div>
            </div>

            {/* Chart area */}
            <div className="absolute left-12 right-4 top-4 bottom-8 flex items-end">
              {/* Generate 30 bars for the chart */}
              {Array.from({ length: 30 }, (_, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center gap-1"
                >
                  <div
                    className="w-4/5 bg-blue-500 rounded-t-sm"
                    style={{ height: `${Math.random() * 70 + 20}%` }}
                  ></div>
                  <div
                    className="w-4/5 bg-green-500 rounded-t-sm"
                    style={{ height: `${Math.random() * 60 + 10}%` }}
                  ></div>
                </div>
              ))}
            </div>

            {/* X-axis labels */}
            <div className="absolute left-12 right-4 bottom-0 flex justify-between text-xs text-gray-500">
              <div>May 1</div>
              <div>May 10</div>
              <div>May 20</div>
              <div>May 30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
