"use client";

import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

import { Separator } from "@/components/ui/separator";

import { Heading } from "@/components/common/heading";
import { UserDataTable } from "@/components/users/UserDataTable";
import { UserTableColumns } from "@/components/users/UserTableColumns";
import { UserProps } from "@/interface";
import { UserAddModal } from "@/components/users/UserAddModal";

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
        <UserAddModal />
      </div>

      <Separator className="h-0.5 rounded-full" />
      {/* Data Table */}
      <UserDataTable columns={UserTableColumns} data={data} />
    </div>
  );
}
