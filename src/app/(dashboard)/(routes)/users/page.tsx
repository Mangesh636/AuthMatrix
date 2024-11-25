"use client";

import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

import { Separator } from "@/components/ui/separator";

import { Heading } from "@/components/common/heading";
import { DataTable } from "@/components/users/data-table";
import { TableColumns } from "@/components/users/table-columns";
import { UserProps } from "@/interface";
import { UserModal } from "@/components/users/user-modal";

export default function Users() {
  const [data, setData] = React.useState<UserProps[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/users");
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
          label="Manage Users"
          className="text-3xl font-medium text-blue-600"
        />
        <UserModal />
      </div>

      <Separator className="h-0.5 rounded-full" />
      {/* Data Table */}
      <DataTable columns={TableColumns} data={data} />
    </div>
  );
}
