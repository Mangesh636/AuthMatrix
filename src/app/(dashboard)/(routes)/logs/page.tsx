"use client";

import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { RiFilePdf2Line } from "react-icons/ri";

import { Separator } from "@/components/ui/separator";

import { Heading } from "@/components/common/heading";
import { DataTable } from "@/components/logs/data-table";
import { TableColumns } from "@/components/logs/table-columns";
import { RolesProps } from "@/interface";
import { ActionBtn } from "@/components/common/action-btn";

export default function Logs() {
  const [data, setData] = React.useState<RolesProps[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/logs");
        setData(response.data);
      } catch (error) {
        toast.error("Failed to get users.");
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Heading
          label="Activity Logs"
          className="text-3xl font-medium text-blue-600"
        />
        <ActionBtn label="Export" icon={RiFilePdf2Line} className="max-w-32" />
      </div>

      <Separator className="h-0.5 rounded-full" />
      {/* Data Table */}
      <DataTable columns={TableColumns} data={data} />
    </div>
  );
}
