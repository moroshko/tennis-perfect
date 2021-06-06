type Props = {
  size?: number;
};

export default function Instagram({ size = 40 }: Props) {
  return (
    <svg
      className="duotone-icon"
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="#000000"
      role="img"
    >
      <path
        d="M172,36H84A47.99987,47.99987,0,0,0,36,84v88a47.99988,47.99988,0,0,0,48,48h88a47.99988,47.99988,0,0,0,48-48V84A47.99987,47.99987,0,0,0,172,36ZM128,168a40,40,0,1,1,40-40A40.0001,40.0001,0,0,1,128,168Z"
        opacity="0.2"
      />
      <circle
        cx="128"
        cy="128"
        r="40"
        fill="none"
        stroke="#000000"
        strokeMiterlimit="10"
        strokeWidth="16"
      />
      <rect
        x="36"
        y="36"
        width="184"
        height="184"
        rx="48"
        strokeWidth="16"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="180" cy="75.99998" r="12" />
    </svg>
  );
}
