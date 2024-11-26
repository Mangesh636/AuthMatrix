"use client";

import React from "react";
import toast from "react-hot-toast";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

import { API } from "@/config/axios";

const chartConfig = {
  active: {
    label: "Active Users",
    color: "#22c55e",
  },
  inactive: {
    label: "Inactive Users",
    color: "#ef4444",
  },
} satisfies ChartConfig;

export const UserStatistics = () => {
  const [chartData, setChartData] = React.useState<
    { status: string; count: number }[]
  >([]);

  const [totalUser, setTotalUser] = React.useState(0);

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await API.get("/users");
        const users = response.data;

        // Calculate inactive and active users
        const activeCount = users.filter(
          (user: any) => user.status === "Active",
        ).length;
        const inactiveCount = users.filter(
          (user: any) => user.status === "Inactive",
        ).length;

        // Calculate total users
        setTotalUser(activeCount + inactiveCount);

        // Updating chart data
        setChartData([
          { status: "Active", count: activeCount },
          { status: "Inactive", count: inactiveCount },
        ]);
      } catch (error) {
        toast.error("Something went Wrong!");
        console.log(error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>User Statistics</CardTitle>
        <CardDescription>
          View detailed statistics about user activity
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalUser.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Total Users
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            {chartData.map((entry) => (
              <RadialBar
                key={entry.status}
                dataKey={entry.status}
                data={[{ [entry.status]: entry.count }]}
                cornerRadius={5}
                fill={
                  chartConfig[
                    entry.status.toLowerCase() as "active" | "inactive"
                  ].color
                }
                className="stroke-transparent stroke-2"
              />
            ))}
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-row justify-center gap-4 text-sm">
        <div className="flex flex-row items-center gap-1">
          <span className="h-3 w-3 rounded-full bg-green-500" />
          {chartConfig.active.label}
        </div>
        <div className="flex flex-row items-center gap-1">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          {chartConfig.inactive.label}
        </div>
      </CardFooter>
    </Card>
  );
};
