import * as z from "zod";

import { UserSchema } from "@/schemas";

export interface RolesProps {
  id: number;
  roleName: string;
  permissions: any;
  permission: number[];
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

export interface LogProps {
  id: number;
  timestamp: string;
  action: string;
  userName: string;
  userRole: string;
  status: string;
  details: string;
}

/* Chart Interfaces */
export interface ChartConfigProps {
  [key: string]: {
    label: string;
    color: string;
    count?: number;
  };
}

/* Edit Modal Interface */
export interface UserEditModalProps {
  userId: number;
  defaultValues?: z.infer<typeof UserSchema>;
  onSuccess: () => void;
}

/* Permissions Interface */
export interface PermissionProps {
  id: number;
  label: string;
  key: string;
  description: string;
}
