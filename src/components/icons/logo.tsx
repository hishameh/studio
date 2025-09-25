import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 30"
      width="120"
      height="30"
      {...props}
    >
      <text
        x="0"
        y="22"
        fontFamily="var(--font-headline), sans-serif"
        fontSize="28"
        fontWeight="bold"
        fill="currentColor"
        className="text-foreground"
      >
        alive
      </text>
      <circle cx="80" cy="15" r="5" fill="hsl(var(--primary))" />
    </svg>
  );
}
