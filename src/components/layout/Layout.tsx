import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className={cn("flex-grow", className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
}