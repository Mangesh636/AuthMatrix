"use client";

import React from "react";
import axios from "axios";
import { FilterIcon } from "lucide-react";
import toast from "react-hot-toast";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FilterBtnProps } from "@/interface";

export const FilterBtn = () => {
  const [roles, setRoles] = React.useState<FilterBtnProps[]>([]);

  React.useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get("http://localhost:8080/roles");
        setRoles(response.data);
      } catch (error) {
        toast.error("Failed to get roles.");
        console.log(error);
      }
    };
    fetchRoles();
  }, []);

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <FilterIcon className="h-4 w-4" />
        <SelectValue placeholder="Filter by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="active">Active</SelectItem>
        <SelectItem value="inactive">Inactive</SelectItem>
        {roles.map((role) => (
          <SelectItem key={role.id} value={role.name}>
            {role.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
