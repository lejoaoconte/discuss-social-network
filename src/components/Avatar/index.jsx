import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder === true ? styles.avatarBordered : styles.avatar}
      src={src}
    />
  );
}
