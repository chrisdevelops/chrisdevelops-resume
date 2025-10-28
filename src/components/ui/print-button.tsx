'use client';

import { Button } from './button';
import { useCallback } from 'react';

export default function PrintScrollButton() {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const smoothScrollTo = (y: number, timeout = 8000) =>
    new Promise<void>((resolve) => {
      const target = Math.max(0, Math.min(y, document.documentElement.scrollHeight - window.innerHeight));
      const start = performance.now();

      window.scrollTo({ top: target, behavior: 'smooth' });

      const tick = () => {
        const pos = window.scrollY || document.documentElement.scrollTop || 0;
        const arrived = Math.abs(pos - target) < 2;
        const timedOut = performance.now() - start > timeout;

        if (arrived || timedOut) {
          resolve();
          return;
        }
        requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    });

  const handleClick = useCallback(async () => {
    const bottom = document.documentElement.scrollHeight - (window.innerHeight + 200);

    await smoothScrollTo(bottom);
    await smoothScrollTo(0);

    window.print();
  }, []);

  return (
    <Button
        onClick={handleClick}
        variant="ghost"
        className="text-sm md:text-base">
        Print Resume
    </Button>
  );
}
