import Image from "next/image";

interface Props {
  /** Rendered height in px; width scales proportionally (700:140 ratio). */
  height?: number;
  className?: string;
  priority?: boolean;
}

/**
 * Single source of truth for the CAREDMVPrep logo.
 * Always renders /logo-header.png — the approved horizontal logo.
 */
export default function BrandLogo({ height = 44, className, priority }: Props) {
  return (
    <Image
      src="/logo-header.png"
      alt="CAREDMVPrep – Your Road to Success"
      width={700}
      height={140}
      style={{ height: `${height}px`, width: "auto" }}
      className={className}
      priority={priority}
    />
  );
}
