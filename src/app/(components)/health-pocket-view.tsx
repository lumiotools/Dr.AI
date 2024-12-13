'use client';

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  HeartPulseIcon,
  ScaleIcon,
  ThermometerIcon,
  DropletIcon,
  ChevronRightIcon,
  InfoIcon,
  LucideIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const healthData = {
  weekly: [
    { day: "Mon", bp: 120, sugar: 95, bmi: 24.2 },
    { day: "Tue", bp: 122, sugar: 98, bmi: 24.3 },
    { day: "Wed", bp: 119, sugar: 92, bmi: 24.1 },
    { day: "Thu", bp: 121, sugar: 96, bmi: 24.2 },
    { day: "Fri", bp: 118, sugar: 94, bmi: 24.0 },
    { day: "Sat", bp: 117, sugar: 93, bmi: 23.9 },
    { day: "Sun", bp: 120, sugar: 95, bmi: 24.1 },
  ],
};

const healthMetrics = [
  {
    id: "bp",
    title: "Blood Pressure",
    value: "120/80",
    unit: "mmHg",
    icon: HeartPulseIcon,
    color: "text-red-500",
    tip: "Maintain between 120/80 mmHg. Regular exercise helps!",
    details:
      "Monitor daily, preferably at the same time. Avoid caffeine 30 minutes before measuring.",
  },
  {
    id: "bmi",
    title: "BMI",
    value: "24.5",
    unit: "",
    icon: ScaleIcon,
    color: "text-blue-500",
    tip: "Target BMI: 18.5-24.9. Balanced diet is key.",
    details:
      "BMI is a measure of body fat based on height and weight. Regular exercise and proper nutrition help maintain a healthy BMI.",
  },
  {
    id: "sugar",
    title: "Blood Sugar",
    value: "95",
    unit: "mg/dL",
    icon: DropletIcon,
    color: "text-purple-500",
    tip: "Fasting blood sugar: 70-100 mg/dL. Monitor after meals.",
    details:
      "Check blood sugar levels regularly, especially if you have diabetes or pre-diabetes.",
  },
  {
    id: "temperature",
    title: "Body Temperature",
    value: "36.6",
    unit: "°C",
    icon: ThermometerIcon,
    color: "text-orange-500",
    tip: "Normal range: 36.1-37.2°C",
    details:
      "Measure when you feel unwell. Significant variations may indicate health issues.",
  },
];

interface HealthMetric {
  id: string;
  title: string;
  value: string;
  unit: string;
  icon: LucideIcon;
  color: string;
  tip: string;
  details: string;
}

export function HealthPocketView() {
  const [selectedMetric, setSelectedMetric] = useState<HealthMetric | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChartAnimated, setIsChartAnimated] = useState(false);

  useEffect(() => {
    setIsChartAnimated(true);
  }, []);

  const handleMetricClick = (metric: HealthMetric) => {
    setSelectedMetric(metric);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-amber-500">
          Health Pocket
        </h1>
        <div className="flex items-center gap-2">
          <InfoIcon className="h-5 w-5 text-emerald-300" />
          <p className="text-sm text-emerald-300">
            Monitor your vitals (BP, BMI, Sugar Levels) and track your health
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {healthMetrics.map((metric, index) => (
          <Card
            key={metric.id}
            className="bg-emerald-900/50 border-emerald-800 p-6 hover:bg-emerald-800/50 transition-all cursor-pointer"
            onClick={() => handleMetricClick(metric)}
            id={`0r75zm_${index}`}
          >
            <div
              className="flex items-center justify-between"
              id={`i7ipn3_${index}`}
            >
              <div className="flex items-center gap-4" id={`kw15a2_${index}`}>
                <metric.icon
                  className={`h-8 w-8 ${metric.color}`}
                  id={`94r50j_${index}`}
                />
                <div id={`drlo6d_${index}`}>
                  <h3
                    className="font-semibold text-white"
                    id={`uti9e6_${index}`}
                  >
                    {metric.title}
                  </h3>
                  <p
                    className="text-2xl text-emerald-300"
                    id={`69svz9_${index}`}
                  >
                    {metric.value}
                    <span className="text-sm ml-1" id={`nturmh_${index}`}>
                      {metric.unit}
                    </span>
                  </p>
                </div>
              </div>
              <ChevronRightIcon
                className="h-6 w-6 text-emerald-300"
                id={`y4v4rc_${index}`}
              />
            </div>

            <div className="mt-4 h-[100px]" id={`a0wak0_${index}`}>
              <ResponsiveContainer
                width="100%"
                height="100%"
                id={`rv9wlt_${index}`}
              >
                <LineChart
                  data={healthData.weekly}
                  className={`transition-all duration-1000 ${
                    isChartAnimated ? "opacity-100" : "opacity-0"
                  }`}
                  id={`y62t4o_${index}`}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--chart-1))"
                    id={`q0rk09_${index}`}
                  />

                  <XAxis
                    dataKey="day"
                    stroke="hsl(var(--chart-2))"
                    id={`sxax09_${index}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(158 64% 10%)",
                      border: "1px solid hsl(158 64% 20%)",
                      borderRadius: "8px",
                      color:"white"
                    }}
                  />

                  <Line
                    type="monotone"
                    dataKey={metric.id}
                    stroke={`hsl(var(--chart-${
                      (healthMetrics.indexOf(metric) % 5) + 1
                    }))`}
                    strokeWidth={2}
                    dot={false}
                    animationDuration={2000}
                    id={`jx6y75_${index}`}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent
          className="bg-emerald-900 border-emerald-800 max-w-2xl"
        >
          <DialogHeader>
            <DialogTitle className="text-amber-500 text-2xl">
              {selectedMetric?.title}
            </DialogTitle>
            <DialogDescription className="text-emerald-300">
              {selectedMetric?.details}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="bg-emerald-800/50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-500 mb-2">
                Quick Tip:
              </h4>
              <p className="text-white">
                {selectedMetric?.tip}
              </p>
            </div>

            <div
              className="h-[300px] bg-emerald-800/30 rounded-lg p-4"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={healthData.weekly}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--chart-1))"
                  />

                  <XAxis
                    dataKey="day"
                    stroke="hsl(var(--chart-2))"
                  />
                  <YAxis stroke="hsl(var(--chart-2))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(158 64% 10%)",
                      border: "1px solid hsl(158 64% 20%)",
                      borderRadius: "8px",
                      color:"white"
                    }}
                  />

                  <Bar
                    dataKey={selectedMetric?.id || "bp"}
                    fill={`hsl(var(--chart-${
                      (healthMetrics.indexOf(selectedMetric || healthMetrics[0]) % 5) + 1
                    }))`}
                    radius={[4, 4, 0, 0]}
                    animationDuration={2000}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
