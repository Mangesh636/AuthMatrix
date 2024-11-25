"use client";

import React from "react";
import { RiAddFill } from "react-icons/ri";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { ActionBtn } from "@/components/common/action-btn";

export const UserModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <ActionBtn label="Add User" icon={RiAddFill} className="max-w-32" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add User</DialogTitle>
            <DialogDescription>Add a user</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild className="flex items-center justify-around">
              <Button>Discard Changes</Button>
              <Button>Save Changes</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
