"use client";

import * as z from "zod";
import React from "react";
import toast from "react-hot-toast";
import { RiAddFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { API } from "@/config/axios";
import { ActionBtn } from "../common/ActionBtn";
import { PermissionSchema } from "@/schemas";

export const PermissionAddModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const form = useForm<z.infer<typeof PermissionSchema>>({
    resolver: zodResolver(PermissionSchema),
    defaultValues: {
      key: "",
      label: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof PermissionSchema>) => {
    try {
      await API.post("/permissions", values);
      toast.success("User created successfully.");
      window.location.reload();
      setIsOpen(false);
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while creating user!");
    }
  };
  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <ActionBtn
            label="Add Permission"
            icon={RiAddFill}
            className="max-w-48"
          />
        </DialogTrigger>
        <DialogContent className="max-w-[350px] sm:max-w-[425px]">
          <div className="flex flex-col items-center gap-2">
            <DialogHeader>
              <DialogTitle>Add Permission</DialogTitle>
            </DialogHeader>
            <DialogDescription>Create a new Permission</DialogDescription>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="label"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Permission Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Enter permission Name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="key"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Permission Key</FormLabel>
                      <FormDescription>
                        Permission key should not have any space
                      </FormDescription>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Enter permission Key"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Permission Description</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Short Description about permission"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button className="w-full">Create Permission</Button>
                </DialogFooter>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};
