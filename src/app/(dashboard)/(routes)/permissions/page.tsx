"use client";

import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

import { Separator } from "@/components/ui/separator";

import { PermissionProps } from "@/interface";
import { Heading } from "@/components/common/heading";
import { PermissionsDataTable } from "@/components/permissions/PermissionsDataTable";
import { PermissionsTableColumns } from "@/components/permissions/PermissionTableColumns";
import { PermissionAddModal } from "@/components/permissions/PermissionAddModal";

export default function PermissionsPage() {
  const [data, setData] = React.useState<PermissionProps[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/permissions");
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
          label="Manage Permissions"
          className="text-3xl font-medium text-blue-600"
        />
        <PermissionAddModal />
      </div>

      <Separator className="h-0.5 rounded-full" />
      {/* Data Table */}
      <PermissionsDataTable columns={PermissionsTableColumns} data={data} />
    </div>
  );
}
