import { ReactNode } from "react";
import cx from "classnames";
import Link from "next/link";
import styles from "./Button.module.css";

type Props = {
  type?: "button" | "submit";
  href?: string;
  margin?: string;
  onClick?: () => void;
  children: ReactNode;
};

export default function Button({
  type = "button",
  href,
  margin,
  onClick,
  children,
}: Props) {
  const style = margin ? { margin } : undefined;

  if (href) {
    return (
      <Link href={href} passHref>
        <a
          className={cx(styles.button, styles.linkButton)}
          style={style}
          href="/"
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      className={styles.button}
      style={style}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
