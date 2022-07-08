import styles from "./Post.module.css";

import { Comment } from "../Comment";
import { Avatar } from "../Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/rlorenzeto.png" />
          <div className={styles.authorInfo}>
            <strong>João Conte</strong>
            <span>Front-end Developer</span>
          </div>
        </div>

        <time title="06 de Julho às 23:07" dateTime="2022-07-06 23:07:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Voluptas sed quibusdam pariatur corporis molestiae?</p>
        <p>
          Nam voluptas illum totam modi praesentium sed, ab maiores et
          distinctio dolorem repudiandae, laborum iste veniam.
        </p>
        <p>
          <a href="#" target="_balnk">
            #alegria
          </a>
          <a href="#" target="_balnk">
            #diversao
          </a>
          <a href="#" target="_balnk">
            #hahaha
          </a>
        </p>
      </div>

      <form className={styles.comment}>
        <strong>Deixe seu comentário</strong>
        <textarea placeholder="Qual seu feedback sobre isso?" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
