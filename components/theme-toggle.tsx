'use client';

import { useTheme } from 'next-themes';
import { Checkbox, Label } from '@/components/ui';
import { CiDark, CiLight } from 'react-icons/ci';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <Checkbox
        id="theme-toggle"
        className="hidden"
        onCheckedChange={handleChangeTheme}
      />
      <Label
        htmlFor="theme-toggle"
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'icon' }),
          'px-2 cursor-pointer font-black rounded-none border-r border-input'
        )}
      >
        <span>
          {resolvedTheme === 'dark' ? (
            <CiLight strokeWidth="0.5" />
          ) : (
            <CiDark strokeWidth="0.5" />
          )}
        </span>
        <span className="sr-only">toggle dark mode theme</span>
      </Label>
    </div>
  );
}
