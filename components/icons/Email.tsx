type Props = {
  size?: number;
};

export default function EmailIcon({ size = 32 }: Props) {
  return (
    <svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="#000000"
      role="img"
    >
      <polygon
        points="224.006 56 128.006 144 32.006 56 224.006 56"
        opacity="0.2"
      />
      <polyline
        points="224 56 128 144 32 56"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="110.54541"
        y1="128.00013"
        x2="34.4668"
        y2="197.73926"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="221.53418"
        y1="197.73926"
        x2="145.45424"
        y2="127.99964"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  );
}
