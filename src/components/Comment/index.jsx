import styles from "./Comment.module.css";

import { FaTrash, FaHandPeace } from "react-icons/fa";
import { Avatar } from "../Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/lejoaoconte.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>João Conte</strong>
              <time title="06 de Julho às 23:07" dateTime="2022-07-06 23:07:00">
                Publicado há 1h
              </time>
            </div>
            <button title="Deletar comentátio">
              <FaTrash />
            </button>
          </header>
          <p>Landou bem demais mano!!</p>
        </div>
        <footer>
          <button>
            <FaHandPeace /> Brabo! <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
