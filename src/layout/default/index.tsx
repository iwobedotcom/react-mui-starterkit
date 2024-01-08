import { Suspense, ReactNode } from 'react';

interface DefaultLayoutProps {
  children: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Suspense>
      Header
      {children}
      Footer
    </Suspense>
  );
}

export default DefaultLayout;
