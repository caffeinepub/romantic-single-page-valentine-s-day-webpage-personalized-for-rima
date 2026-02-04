import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionShellProps {
  children: ReactNode;
  className?: string;
}

export default function SectionShell({ children, className }: SectionShellProps) {
  return (
    <section className={cn('w-full px-4 sm:px-6 lg:px-8', className)}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
