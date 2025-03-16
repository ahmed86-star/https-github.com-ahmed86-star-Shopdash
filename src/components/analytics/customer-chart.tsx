"use client";

import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

interface CustomerChartProps {
  dateRange: DateRange;
  isDetailed?: boolean;
}

export function CustomerChart({
  dateRange,
  isDetailed = false,
}: CustomerChartProps) {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    // In a real app, you would fetch data based on the date range
    // For demo purposes, we'll generate random data
    generateChartData();
  }, [dateRange]);

  const generateChartData = () => {
    // Generate random customer data
    const data = {
      newCustomers: Math.floor(Math.random() * 500) + 300,
      returningCustomers: Math.floor(Math.random() * 800) + 500,
      sources: [
        { name: "Direct", value: Math.floor(Math.random() * 30) + 20 },
        { name: "Social", value: Math.floor(Math.random() * 25) + 15 },
        { name: "Organic", value: Math.floor(Math.random() * 20) + 10 },
        { name: "Referral", value: Math.floor(Math.random() * 15) + 5 },
        { name: "Email", value: Math.floor(Math.random() * 10) + 5 },
      ],
    };

    setChartData(data);
  };

  if (isDetailed) {
    return (
      <div className="w-full h-[350px] bg-white rounded-md p-4">
        <div className="grid grid-cols-2 gap-8 h-full">
          {/* Customer Acquisition Sources */}
          <div className="flex flex-col">
            <h3 className="text-sm font-medium mb-4">Acquisition Sources</h3>
            <div className="flex-1 flex items-center justify-center">
              {/* Donut chart visualization */}
              <div className="relative w-48 h-48">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Create pie/donut chart segments */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#3b82f6"
                    strokeWidth="20"
                    strokeDasharray="251.2"
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#10b981"
                    strokeWidth="20"
                    strokeDasharray="251.2"
                    strokeDashoffset="188.4"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#f59e0b"
                    strokeWidth="20"
                    strokeDasharray="251.2"
                    strokeDashoffset="138.2"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#ef4444"
                    strokeWidth="20"
                    strokeDasharray="251.2"
                    strokeDashoffset="75.4"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#8b5cf6"
                    strokeWidth="20"
                    strokeDasharray="251.2"
                    strokeDashoffset="25.1"
                  />
                  <circle cx="50" cy="50" r="30" fill="white" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
                  1,243
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {chartData?.sources.map((source: any, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      [
                        "bg-blue-500",
                        "bg-green-500",
                        "bg-yellow-500",
                        "bg-red-500",
                        "bg-purple-500",
                      ][index % 5]
                    }`}
                  ></div>
                  <div className="text-xs">
                    <div className="font-medium">{source.name}</div>
                    <div className="text-gray-500">{source.value}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Retention */}
          <div className="flex flex-col">
            <h3 className="text-sm font-medium mb-4">Customer Retention</h3>
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="text-sm">New Customers</div>
                <div className="text-sm font-medium">
                  {chartData?.newCustomers}
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: "35%" }}
                ></div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm">Returning Customers</div>
                <div className="text-sm font-medium">
                  {chartData?.returningCustomers}
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Retention Rate</h4>
                <div className="text-3xl font-bold">68%</div>
                <div className="flex items-center text-xs text-green-500 mt-1">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    ></path>
                  </svg>
                  <span>4.2% from last month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[200px] bg-white rounded-md">
      {/* This is a placeholder for a real chart component */}
      <div className="w-full h-full flex items-center justify-center">
        {/* Donut chart visualization */}
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Create pie/donut chart segments */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#3b82f6"
              strokeWidth="20"
              strokeDasharray="251.2"
              strokeDashoffset="0"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#10b981"
              strokeWidth="20"
              strokeDasharray="251.2"
              strokeDashoffset="62.8"
            />
            <circle cx="50" cy="50" r="30" fill="white" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-sm font-medium">Total</div>
            <div className="text-lg font-semibold">1,243</div>
          </div>
        </div>

        <div className="flex flex-col gap-3 ml-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <div className="text-xs">
              <div className="font-medium">New</div>
              <div className="text-gray-500">
                {chartData?.newCustomers || 0}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="text-xs">
              <div className="font-medium">Returning</div>
              <div className="text-gray-500">
                {chartData?.returningCustomers || 0}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
