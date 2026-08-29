interface MethodistLogoProps {
  className?: string;
  size?: number;
}

export function MethodistLogo({ className = "h-36 w-auto", size }: MethodistLogoProps) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="Cruz e Chama — Símbolo oficial da Igreja Metodista Unida"
      role="img"
    >
      {/* Official UMC Scarlet Red Dual Flame */}
      {/* Primary Inner Flame Tongue */}
      <path
        d="M255 20C255 20 240 68 220 114C198 156 172 186 172 228C172 288 214 332 256 384C258 386 260 388 260 482C256 462 250 436 244 408C236 372 218 344 210 318C202 288 210 262 228 238C242 220 250 202 250 202C250 202 224 228 206 258C184 294 176 322 176 348C176 376 188 400 204 420C172 392 164 358 164 324C164 278 190 234 226 184C246 156 255 20 255 20Z"
        fill="#E5192D"
      />
      {/* Outer Left Flame Tongue */}
      <path
        d="M174 158C174 158 172 194 172 230C172 274 192 314 224 348C206 328 196 304 196 276C196 246 204 222 222 188C206 208 194 234 194 262C194 288 204 312 220 330C184 300 174 264 174 228C174 198 182 172 182 172L174 158Z"
        fill="#E5192D"
      />

      {/* Official Black Latin Cross */}
      {/* Vertical Shaft */}
      <path d="M266 48H276V434L266 444V48Z" fill="#1D1D1F" />
      {/* Horizontal Crossbeam */}
      <path d="M206 160H336L328 170H214L206 160Z" fill="#1D1D1F" />

      {/* Registered Trademark ® */}
      <g transform="translate(296, 414)">
        <circle cx="9" cy="9" r="8" stroke="#1D1D1F" strokeWidth="1.6" fill="none" />
        <text
          x="9"
          y="12.5"
          textAnchor="middle"
          fontSize="10"
          fontFamily="'IBM Plex Sans', -apple-system, sans-serif"
          fontWeight="bold"
          fill="#1D1D1F"
        >
          R
        </text>
      </g>
    </svg>
  );
}
