import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

import { AuthFooter } from "./auth-footer";
import { AuthHeader } from "./auth-header";
import { AuthSocials } from "./auth-social";

interface AuthCardProps {
  title: string;
  description: string;
  label: string;
  href: string;
  children: React.ReactNode;
}

export const AuthCard: React.FC<AuthCardProps> = ({
  children,
  description,
  href,
  label,
  title,
}) => {
  return (
    <Card className="w-[400px] drop-shadow-sm">
      <CardHeader>
        <AuthHeader authTitle={title} authDescription={description} />
      </CardHeader>
      <CardContent className="space-y-6">
        {children}
        <AuthSocials />
      </CardContent>
      <CardFooter>
        <AuthFooter authLabel={label} authHref={href} />
      </CardFooter>
    </Card>
  );
};
