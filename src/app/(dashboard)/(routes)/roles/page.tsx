"use client";

import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

import { Separator } from "@/components/ui/separator";

import { Heading } from "@/components/common/heading";
import { RolesDataTable } from "@/components/roles/RolesDataTable";
import { RolesTableColumns } from "@/components/roles/RolesTableColumns";
import { RolesProps } from "@/interface";
import { ActionBtn } from "@/components/common/ActionBtn";
import { RiAddFill } from "react-icons/ri";

export default function Logs() {
  const [data, setData] = React.useState<RolesProps[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/roles");
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
          label="Manage Roles"
          className="text-3xl font-medium text-blue-600"
        />
        <ActionBtn label="Add Role" icon={RiAddFill} className="max-w-32" />
      </div>

      <Separator className="h-0.5 rounded-full" />
      {/* Data Table */}
      <RolesDataTable columns={RolesTableColumns} data={data} />
    </div>
  );
}
