"use client";

import * as z from "zod";
import React from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { API } from "@/config/axios";
import { UserSchema } from "@/schemas";
import { RolesProps, UserEditModalProps } from "@/interface";

export const UserEditModal: React.FC<UserEditModalProps> = ({
  defaultValues,
  userId,
  onSuccess,
}) => {
  const [roles, setRoles] = React.useState<RolesProps[]>([]);

  React.useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await API.get("/roles");
        setRoles(response.data);
      } catch (error) {
        toast.error("Failed to get roles.");
        console.log(error);
      }
    };
    fetchRoles();
  }, []);

  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = async (values: z.infer<typeof UserSchema>) => {
    try {
      await API.put(`/users/${userId}`, values);
      toast.success("User created successfully.");
      window.location.reload();
      onSuccess();
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while creating user!");
    }
  };
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>
        <DialogDescription>Edit a User Informations</DialogDescription>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Enter user Name"
                      autoComplete="name"
                      value={field.value}
                      onVolumeChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Enter user Email"
                      autoComplete="email"
                      value={field.value}
                      onVolumeChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Active">Active</SelectItem>
                          <SelectItem value="Inactive">Inactive</SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-6">
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {roles.map((role) => (
                            <SelectItem key={role.id} value={role.roleName}>
                              {role.roleName}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter>
              <Button className="w-full">Save User</Button>
            </DialogFooter>
          </div>
        </form>
      </Form>
    </>
  );
};
