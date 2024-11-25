"use client";

import { IconType } from "react-icons";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface ActionBtnProps {
  label: string;
  icon?: IconType;
  className?: string;
  onClick?: () => void;
}

export const ActionBtn: React.FC<ActionBtnProps> = ({
  label,
  className,
  icon: Icon,
  onClick,
}) => {
  return (
    <Button
      className={cn(
        "flex flex-1 items-center justify-start rounded-lg border-2 border-blue-600/80 bg-transparent p-3 text-blue-600/80 transition hover:border-blue-600/30 hover:bg-blue-600/80 hover:text-white",
        "flex flex-1 items-center justify-start rounded-lg border-2 border-blue-600/80 bg-transparent p-3 text-blue-600/80 transition hover:border-blue-600/30 hover:bg-blue-600/80 hover:text-white",
        className,
      )}
      onClick={onClick}
    >
      {Icon && <Icon className="mr-3 h-5 w-5" />}
      {label}
    </Button>
  );
};
