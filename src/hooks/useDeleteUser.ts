"use client";

import { toast } from "react-hot-toast";

import { API } from "@/config/axios";

const useDeleteUser = () => {
  const deleteUser = async (userId: number) => {
    try {
      await API.delete(`/users/${userId}`);
      toast.success("User deleted successfully");
      window.location.reload();
    } catch (error) {
      toast.error("Failed to delete user");
      console.error(error);
    }
  };

  return { deleteUser };
};

export default useDeleteUser;
