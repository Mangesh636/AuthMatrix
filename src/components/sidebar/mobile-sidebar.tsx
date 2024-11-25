"use client";

import { Menu } from "lucide-react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import { Sidebar } from "./sidebar";
import { ClientOnly } from "../client-only";

export const MobileSidebar = () => {
  return (
    <ClientOnly>
      <Sheet>
        <SheetTrigger>
          <Button size={"icon"} variant={"ghost"} className="md:hidden" asChild>
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="w-72 p-0">
          <VisuallyHidden.Root>
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Sidebar Content</SheetDescription>
          </VisuallyHidden.Root>
          <Sidebar />
        </SheetContent>
      </Sheet>
    </ClientOnly>
  );
};
