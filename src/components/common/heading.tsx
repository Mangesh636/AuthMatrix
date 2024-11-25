import { cn } from "@/lib/utils";

interface HeadingProps {
  label: string;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ className, label }) => {
  return (
    <h1 className={cn("font-[family-name:var(--font-geist-sans)]", className)}>
      {label}
    </h1>
  );
};
