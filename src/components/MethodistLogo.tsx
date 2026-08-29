import { useEffect } from "react";
import type { SVGProps } from "react";

interface MethodistLogoProps {
  className?: string;
  size?: number;
  onLoad?: SVGProps<SVGSVGElement>["onLoad"];
}

export function MethodistLogo({
  className = "w-full h-full object-contain",
  size,
  onLoad,
}: MethodistLogoProps) {
  useEffect(() => {
    if (onLoad) {
      // Execute callback asynchronously once mounted/rendered
      const timer = setTimeout(() => {
        try {
          (onLoad as unknown as () => void)();
        } catch {
          // ignore
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [onLoad]);

  return (
    <svg
      viewBox="0 0 360 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      style={size ? { width: size, height: size } : undefined}
      aria-label="Cruz e Chama — Símbolo oficial da Igreja Metodista Unida"
      role="img"
    >
      {/* Official UMC Scarlet Dual Flame */}
      {/* Primary Flame Tongue (Left-to-Center sweeping upward) */}
      <path
        d="M176 18C176 18 162 72 144 122C122 170 94 204 94 250C94 316 142 364 186 422C188 424 190 426 190 464C186 442 180 412 174 382C164 342 144 312 136 282C126 248 136 218 156 192C172 172 182 152 182 152C182 152 154 182 134 216C110 256 102 288 102 316C102 348 116 374 134 396C98 366 90 328 90 290C90 238 120 190 160 134C182 104 176 18 176 18Z"
        fill="#D32F2F"
      />
      {/* Outer Left Flame Tongue */}
      <path
        d="M98 170C98 170 96 210 96 250C96 298 118 342 154 380C134 358 122 332 122 300C122 268 132 242 152 204C134 226 120 256 120 286C120 316 132 342 150 362C110 328 98 288 98 250C98 216 108 186 108 186L98 170Z"
        fill="#D32F2F"
      />

      {/* Official Black Latin Cross */}
      {/* Vertical Shaft */}
      <rect x="200" y="52" width="28" height="412" fill="#1D1D1F" rx="1.5" />
      {/* Horizontal Crossbeam */}
      <rect x="130" y="152" width="168" height="28" fill="#1D1D1F" rx="1.5" />

      {/* Registered Trademark ® */}
      <g transform="translate(236, 442)">
        <circle cx="8" cy="8" r="7" stroke="#1D1D1F" strokeWidth="1.4" fill="none" />
        <text
          x="8"
          y="11"
          textAnchor="middle"
          fontSize="9"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="bold"
          fill="#1D1D1F"
        >
          R
        </text>
      </g>
    </svg>
  );
}
