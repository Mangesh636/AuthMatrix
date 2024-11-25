export interface FilterBtnProps {
  id: number;
  name: string;
}

export interface RolesProps {
  roleName: string;
  permission: number[];
}

export interface UserProps {
  id: number;
  name: string;
  avatarFallback?: string;
  avatarSrc?: string;
  email: string;
  role: string;
  status: string;
}

export interface PermissionProps {
  id: number;
  name: string;
  description: string;
}

export interface LogProps {
  id: number;
  timestamp: string;
  action: string;
  user: {
    id: number;
    name: string;
    role: string;
  };
  status: string;
  details: string;
}
