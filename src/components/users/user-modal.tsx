"use client";

import React from "react";

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

interface UserModalProps {
  label: string;
  open: boolean;
}

export const UserModal: React.FC<UserModalProps> = ({ label, open }) => {
  const [isOpen, setIsOpen] = React.useState(open);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>{label}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>Make changes to your Profile</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild className="flex items-center justify-around">
            <Button>Discard Changes</Button>
            <Button>Save Changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
