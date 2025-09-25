import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="120"
      height="30"
      {...props}
    >
      <text
        x="10"
        y="35"
        fontFamily="var(--font-poppins), sans-serif"
        fontSize="35"
        fontWeight="bold"
        fill="hsl(var(--primary-foreground))"
        className="dark:fill-primary-foreground fill-primary"
      >
        alive
      </text>
      <circle cx="100" cy="25" r="5" fill="hsl(var(--accent))" />
    </svg>
  );
}
