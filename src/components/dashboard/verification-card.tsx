"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const emailData = [
  {
    label: "Verified",
    percentage: 60,
    color: "bg-green-500",
  },
  {
    label: "Pending",
    percentage: 40,
    color: "bg-red-500",
  },
];

export const VerificationCard = () => {
  return (
    <Card className="flex h-fit flex-col gap-4 sm:w-[370px] md:w-full">
      <CardHeader className="items-start">
        <CardTitle>Email Verified</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-4xl font-bold">
            {emailData[0].percentage.toLocaleString()}%
          </span>
          <span className="text-sm text-muted-foreground">Users Verified</span>
        </div>
        <div className="flex h-2 overflow-hidden rounded-full bg-slate-100">
          {emailData.map((index) => (
            <div
              key={index.label}
              style={{ width: `${index.percentage}%` }}
              className={cn("origin-left animate-grow", index.color)}
            />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <div className="mt-2 flex gap-6 text-sm text-muted-foreground">
          {emailData.map((index) => (
            <div key={index.label} className="flex items-center gap-2">
              <span className={cn("h-2 w-2 rounded-full", index.color)} />
              {index.label}
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};
