import styles from "./Sidebar.module.css";

import { FaPencilAlt } from "react-icons/fa";
import { Avatar } from "../Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=100"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/lejoaoconte.png" />
        <strong>João Conte</strong>
        <span>Front-end Developer</span>
      </div>

      <footer>
        <a href="#">
          <FaPencilAlt />
          Editar Perfil
        </a>
      </footer>
    </aside>
  );
}
