import { Suspense, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return <Suspense>{children}</Suspense>;
}

export default AuthLayout;
