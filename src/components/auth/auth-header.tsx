interface AuthHeaderProps {
  authTitle: string;
  authDescription: string;
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({
  authDescription,
  authTitle,
}) => {
  return (
    <div className="flex flex-col gap-y-2 text-center font-[family-name:var(--font-geist-sans)] text-black">
      <h1 className="text-4xl font-semibold">{authTitle}</h1>
      <p className="font-[family-name:var(--font-geist-mono)] text-lg text-muted-foreground">
        {authDescription}
      </p>
    </div>
  );
};
