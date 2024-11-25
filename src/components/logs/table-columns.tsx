"use client";

import React from "react";
import { ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "../ui/button";

import { LogProps } from "@/interface";

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
    accessorKey: "timestamp",
    header: "Time Stamp",
  },
  {
    id: "action",
    header: "Action",
  },
];
