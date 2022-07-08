import { useState } from "react";

import styles from "./Comment.module.css";

import { Avatar } from "../Avatar";

import { FaTrash, FaHandPeace } from "react-icons/fa";

import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Comment({ content, onDeleteComment }) {
  const { id, time, author, text } = content;
  const [likes, setLikes] = useState(0);

  const publishedDateTitle = format(time, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });
  const publishedDate = formatDistanceToNow(time, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleDeleteCommentary() {
    onDeleteComment(id);
  }

  function handleLikeComment() {
    setLikes((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={author.image} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>{author.name}</strong>
              <time title={publishedDateTitle} dateTime={time.toISOString()}>
                {publishedDate}
              </time>
            </div>
            <button onClick={handleDeleteCommentary} title="Deletar comentátio">
              <FaTrash />
            </button>
          </header>
          <p>{text}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <FaHandPeace /> Brabo! <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
