"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [{ activeUsers: 1455, inactiveUsers: 300 }];

const chartConfig = {
  activeUsers: {
    label: "Active User",
    color: "rgb(34 197 94)",
  },
  inactiveUsers: {
    label: "Inactive User",
    color: "rgb(239 68 68)",
  },
} satisfies ChartConfig;

export const UsersCard = () => {
  const totalVisitors = chartData[0].activeUsers + chartData[0].inactiveUsers;

  return (
    <Card className="flex h-fit flex-col gap-x-4">
      <CardHeader className="items-start">
        <CardTitle>Total Users</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={160}
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
                          className="fill-foreground text-xl font-bold sm:text-2xl"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground text-sm sm:text-base"
                        >
                          Total Users
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="activeUsers"
              stackId="a"
              fill="var(--color-activeUsers)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="inactiveUsers"
              fill="var(--color-inactiveUsers)"
              stackId="a"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-y-4 sm:flex-row sm:items-center sm:justify-around sm:gap-x-4">
        <div className="flex flex-col items-center gap-x-3">
          <div className="flex flex-row items-center gap-x-4">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="font-semibold">{chartData[0].activeUsers}</span>
          </div>
          <span className="text-muted-foreground">
            {chartConfig.activeUsers.label}
          </span>
        </div>
        <div className="flex flex-col items-center gap-x-3">
          <div className="flex flex-row items-center gap-x-4">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <span className="font-semibold">{chartData[0].inactiveUsers}</span>
          </div>
          <span className="text-muted-foreground">
            {chartConfig.inactiveUsers.label}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};
