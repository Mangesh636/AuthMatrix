"use client";

import { toast } from "react-hot-toast";

import { API } from "@/config/axios";

const useDeleteRole = () => {
  const deleteRole = async (RoleId: number) => {
    try {
      await API.delete(`/roles/${RoleId}`);
      toast.success("Role deleted successfully");
      window.location.reload();
    } catch (error) {
      toast.error("Failed to delete Role");
      console.error(error);
    }
  };

  return { deleteRole };
};

export default useDeleteRole;
