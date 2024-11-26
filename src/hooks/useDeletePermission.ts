"use client";

import { toast } from "react-hot-toast";

import { API } from "@/config/axios";

const useDeletePermission = () => {
  const deletePermission = async (PermissionId: number) => {
    try {
      await API.delete(`/permissions/${PermissionId}`);
      toast.success("Permission deleted successfully");
      window.location.reload();
    } catch (error) {
      toast.error("Failed to delete Permission");
      console.error(error);
    }
  };

  return { deletePermission };
};

export default useDeletePermission;
