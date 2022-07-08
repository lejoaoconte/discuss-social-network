import { useState } from "react";

import styles from "./Comment.module.css";

import { Avatar } from "../Avatar";
import { AuthorInterface } from "../Post";

import { FaTrash, FaHandPeace } from "react-icons/fa";

import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export interface CommentInterface {
  id: string;
  author: AuthorInterface;
  text: string;
  time: Date;
}

interface CommentProps {
  content: CommentInterface;
  onDeleteComment: (value: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const { id, time, author, text } = content;
  const [likes, setLikes] = useState<number>(0);

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
      <Avatar hasBorder={false} src={author.avatarUrl} />
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
