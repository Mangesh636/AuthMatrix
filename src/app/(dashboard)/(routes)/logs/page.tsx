"use client";

import axios from "axios";
import { saveAs } from "file-saver";
import Papa from "papaparse";
import React from "react";
import toast from "react-hot-toast";
import { RiFilePdf2Line } from "react-icons/ri";

import { Separator } from "@/components/ui/separator";

import { LogProps } from "@/interface";
import { ActionBtn } from "@/components/common/ActionBtn";
import { LogsDataTable } from "@/components/logs/LogsDataTable";
import { Heading } from "@/components/common/heading";
import { LogsTableColumns } from "@/components/logs/LogsTableColumns";

export default function Logs() {
  const [data, setData] = React.useState<LogProps[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/logs");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        toast.error("Failed to get users.");
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const exportToCSV = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "users.csv");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Heading
          label="Activity Logs"
          className="text-3xl font-medium text-blue-600"
        />
        <ActionBtn
          label="Export"
          icon={RiFilePdf2Line}
          onClick={exportToCSV}
          className="max-w-32"
        />
      </div>

      <Separator className="h-0.5 rounded-full" />
      {/* Data Table */}
      <LogsDataTable columns={LogsTableColumns} data={data} />
    </div>
  );
}
