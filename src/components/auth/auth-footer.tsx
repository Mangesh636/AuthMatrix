import Link from "next/link";

import { Button } from "../ui/button";

interface AuthFooterProps {
  authLabel: string;
  authHref: string;
}

export const AuthFooter: React.FC<AuthFooterProps> = ({
  authHref,
  authLabel,
}) => {
  return (
    <Button
      variant={"link"}
      className="w-full font-[family-name:var(--font-geist-mono)] text-base font-medium"
      size={"sm"}
      asChild
    >
      <Link href={authHref}>{authLabel}</Link>
    </Button>
  );
};
