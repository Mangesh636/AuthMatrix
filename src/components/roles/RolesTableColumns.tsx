"use client";

import React from "react";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

import { RolesProps } from "@/interface";
import { API } from "@/config/axios";
import useDeleteRole from "@/hooks/useDeleteRoles";

export const RolesTableColumns: ColumnDef<RolesProps>[] = [
  {
    accessorKey: "roleName",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Role Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "permissions",
    header: "Permissions",
    cell: ({ row }) => {
      const [permissionNames, setPermissionNames] = React.useState<string[]>(
        [],
      );
      const permissionIds = row.original.permissions;
      React.useEffect(() => {
        const fetchPermissionNames = async () => {
          try {
            const response = await API.get("/permissions");
            const allPermissions: Permission[] = response.data;

            // Map permission IDs to their names
            const names = permissionIds.map(
              (id: any) =>
                allPermissions.find((p) => p.id === id)?.label ||
                `Permission ${id}`,
            );

            setPermissionNames(names);
          } catch (error) {
            console.error("Error fetching permissions:", error);
          }
        };

        fetchPermissionNames();
      }, [permissionIds]);

      return (
        <div className="flex flex-wrap gap-1">
          {permissionNames.map((label, index) => (
            <span
              key={index}
              className="rounded-md bg-secondary px-2 py-1 text-sm text-secondary-foreground"
            >
              {label}
            </span>
          ))}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const role = row.original;
      const { deleteRole } = useDeleteRole();
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => deleteRole(role.id)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
