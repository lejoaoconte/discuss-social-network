import styles from "./Post.module.css";

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { formatDistanceToNow } from "date-fns/esm";

import { Comment, CommentInterface } from "../Comment";
import { Avatar } from "../Avatar";
import { ChangeEvent, FormEvent, useState } from "react";

interface ContentPost {
  type: string;
  text: string;
  link?: string;
}

export interface AuthorInterface {
  avatarUrl: string;
  name: string;
  role?: string;
}

interface PostProps {
  id?: string;
  author: AuthorInterface;
  content: ContentPost[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState<CommentInterface[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const publishedDateTitle = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });
  const publishedDate = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function renderContent(line: ContentPost, index: number) {
    if (line.type === "p") return <p key={index}>{line.text}</p>;
    if (line.type === "a")
      return (
        <div key={index}>
          <br />
          <a href={line.link} target="_balnk">
            {line.text}
          </a>
        </div>
      );
  }

  function handleSendComment(e: FormEvent<EventTarget>) {
    e.preventDefault();
    const contentNewCommentary = {
      id: String(Math.random() * Math.random() * 10000 * 999584808),
      author: {
        name: "João Conte",
        avatarUrl: "https://github.com/lejoaoconte.png",
      },
      text: newComment,
      time: new Date("2022-07-08 15:03:00"),
    };
    setComments([...comments, contentNewCommentary]);
    setNewComment("");
  }

  function handleNewComment(e: ChangeEvent<HTMLTextAreaElement>) {
    setNewComment(e.target.value);
    e.target.setCustomValidity("");
  }

  function deleteComment(commentId: string) {
    const commentListWithoutOne = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(commentListWithoutOne);
  }

  function handleNewCommentInvalid(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("Digite algum comentário");
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateTitle} dateTime={publishedAt.toISOString()}>
          {publishedDate}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => renderContent(line, index))}
      </div>

      <form onSubmit={handleSendComment} className={styles.comment}>
        <strong>Deixe seu comentário</strong>
        <textarea
          value={newComment}
          onChange={handleNewComment}
          placeholder="Qual seu feedback sobre isso?"
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={newComment === ""}>
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            content={comment}
            onDeleteComment={deleteComment}
            key={comment.id}
          />
        ))}
      </div>
    </article>
  );
}
