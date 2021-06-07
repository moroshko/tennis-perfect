type Props = {
  size?: number;
};

export default function FacebookIcon({ size = 32 }: Props) {
  return (
    <svg viewBox="0 0 256 256" width={size} height={size} role="img">
      <circle cx="128" cy="128" r="96" opacity="0.2" />
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M168,88.00094H152a24,24,0,0,0-24,24v112"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="96"
        y1="144.00094"
        x2="160"
        y2="144.00094"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  );
}
