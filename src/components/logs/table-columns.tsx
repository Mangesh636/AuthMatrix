"use client";

import React from "react";
import { ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "../ui/button";

import { LogProps } from "@/interface";

const formatTimestamp = (timestamp: string) => {
  return new Date(timestamp).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

export const TableColumns: ColumnDef<LogProps>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Sr.No
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "user.name",
    header: "Name",
  },
  {
    accessorKey: "user.role",
    header: "User Role",
  },
  {
    accessorKey: "user.role",
    header: "User Role",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
  {
    accessorKey: "timestamp",
    header: "Time Stamp",
    cell: ({ row }) => formatTimestamp(row.getValue("timestamp")),
  },
];
