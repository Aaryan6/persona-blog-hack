interface IconProps {
  className?: string;
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="50" cy="50" r="20" />
      <line x1="50" y1="15" x2="50" y2="25" />
      <line x1="50" y1="75" x2="50" y2="85" />
      <line x1="15" y1="50" x2="25" y2="50" />
      <line x1="75" y1="50" x2="85" y2="50" />
      <line x1="26" y1="26" x2="33" y2="33" />
      <line x1="67" y1="67" x2="74" y2="74" />
      <line x1="26" y1="74" x2="33" y2="67" />
      <line x1="67" y1="33" x2="74" y2="26" />
    </svg>
  );
}

export function FlowerIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="50" cy="50" r="15" />
      <path d="M50 20C55 30 65 35 75 35C65 40 60 50 60 60C55 50 45 45 35 45C45 40 50 30 50 20Z" />
      <path d="M50 20C45 30 35 35 25 35C35 40 40 50 40 60C45 50 55 45 65 45C55 40 50 30 50 20Z" />
      <line x1="50" y1="65" x2="50" y2="85" />
    </svg>
  );
}

export function CameraIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="20" y="30" width="60" height="45" rx="5" />
      <circle cx="50" cy="50" r="15" />
      <rect x="35" y="20" width="30" height="10" rx="2" />
      <circle cx="70" cy="40" r="3" />
    </svg>
  );
}
