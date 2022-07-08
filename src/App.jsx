import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/lejoaoconte.png",
      name: "João Conte",
      role: "Front-end Developer",
    },
    content: [
      {
        type: "p",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu dui, molestie in ultricies ac, varius ac velit. Phasellus ut dignissim felis. Aenean rutrum, ligula facilisis mollis venenatis, nibh ex semper eros, et viverra elit nibh at velit. Maecenas lobortis urna sed dapibus sodales. Nullam sit amet consequat eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin vel ornare metus. Morbi vitae libero vestibulum, porta urna eu, dignissim arcu. Donec vel velit mattis, commodo nunc in, vulputate leo.",
      },
      {
        type: "p",
        text: "Aliquam vitae volutpat velit. Proin sodales neque non odio faucibus aliquam. Integer a auctor leo, vel mollis ligula. Curabitur eu auctor sem. Nulla ante quam, tincidunt et mollis ac, accumsan et metus. Morbi sed arcu in nisi laoreet lacinia ut at sapien. Donec euismod luctus semper. Mauris vel lobortis justo, at facilisis massa. Duis nunc enim, molestie eget porta vitae, varius in odio.",
      },
      {
        type: "a",
        link: "https://github.com/lejoaoconte",
        text: "github.com/lejoaoconte",
      },
    ],
    publishedAt: new Date("2022-07-08 00:03:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/rlorenzeto.png",
      name: "Rafaela Lorenzeto",
      role: "Fullstack Developer",
    },
    content: [
      {
        type: "p",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu dui, molestie in ultricies ac, varius ac velit. Phasellus ut dignissim felis. Aenean rutrum, ligula facilisis mollis venenatis, nibh ex semper eros, et viverra elit nibh at velit. Maecenas lobortis urna sed dapibus sodales. Nullam sit amet consequat eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin vel ornare metus. Morbi vitae libero vestibulum, porta urna eu, dignissim arcu. Donec vel velit mattis, commodo nunc in, vulputate leo.",
      },
      {
        type: "p",
        text: "Aliquam vitae volutpat velit. Proin sodales neque non odio faucibus aliquam. Integer a auctor leo, vel mollis ligula. Curabitur eu auctor sem. Nulla ante quam, tincidunt et mollis ac, accumsan et metus. Morbi sed arcu in nisi laoreet lacinia ut at sapien. Donec euismod luctus semper. Mauris vel lobortis justo, at facilisis massa. Duis nunc enim, molestie eget porta vitae, varius in odio.",
      },
      { type: "a", text: "github.com/rlorenzeto" },
    ],
    publishedAt: new Date("2022-07-07 23:03:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <main>
          {posts.map((post, index) => (
            <Post
              key={index}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
        <Sidebar />
      </div>
    </>
  );
}
