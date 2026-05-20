interface PCBPatternProps {
  className?: string;
}

export function PCBPattern({ className = "" }: PCBPatternProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="pcb-caatinga"
          x="0"
          y="0"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <rect width="120" height="120" fill="none" />
          <path
            d="M0 60 L30 60 L30 30 L60 30 L60 0"
            stroke="#39FF14"
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M60 120 L60 90 L90 90 L90 60 L120 60"
            stroke="#B87333"
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M30 120 L30 90 L0 90"
            stroke="#39FF14"
            strokeWidth="0.5"
            fill="none"
            opacity="0.2"
          />
          <path
            d="M90 0 L90 30 L120 30"
            stroke="#B87333"
            strokeWidth="0.5"
            fill="none"
            opacity="0.2"
          />
          <circle cx="30" cy="60" r="2" fill="#39FF14" opacity="0.25" />
          <circle cx="60" cy="30" r="2" fill="#39FF14" opacity="0.25" />
          <circle cx="90" cy="90" r="2" fill="#B87333" opacity="0.25" />
          <circle cx="60" cy="90" r="2" fill="#B87333" opacity="0.25" />
          <circle cx="30" cy="90" r="2" fill="#39FF14" opacity="0.2" />
          <circle cx="90" cy="30" r="2" fill="#B87333" opacity="0.2" />
          <path
            d="M15 15 L15 45 L45 45 L45 15 Z"
            stroke="#39FF14"
            strokeWidth="0.3"
            fill="none"
            opacity="0.1"
          />
          <path
            d="M75 75 L75 105 L105 105 L105 75 Z"
            stroke="#B87333"
            strokeWidth="0.3"
            fill="none"
            opacity="0.1"
          />
          <path
            d="M10 110 L20 100 L30 110 L40 100 L50 110"
            stroke="#C4573A"
            strokeWidth="0.3"
            fill="none"
            opacity="0.15"
          />
          <path
            d="M70 10 L80 20 L90 10 L100 20 L110 10"
            stroke="#C4573A"
            strokeWidth="0.3"
            fill="none"
            opacity="0.15"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pcb-caatinga)" />
    </svg>
  );
}
