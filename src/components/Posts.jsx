import React, { useState } from "react";
import cloudy from "../images/cloudy.jpg";
import PostItem from "./PostItem";

const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: cloudy,
    category: "education",
    title: "Title of the post",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo magnam modi fuga natus voluptate rem saepe, provident cupiditate obcaecati sint sunt nostrum eum reprehenderit necessitatibus quae quod.",
    authorID: 3,
  },
  {
    id: "2",
    thumbnail: cloudy,
    category: "Agriculure",
    title: "Title of the post",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo magnam modi fuga natus voluptate rem saepe, provident cupiditate obcaecati sint sunt nostrum eum reprehenderit necessitatibus quae quod.",
    authorID: 2,
  },
  {
    id: "3",
    thumbnail: cloudy,
    category: "science",
    title: "Title of the post",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo magnam modi fuga natus voluptate rem saepe, provident cupiditate obcaecati sint sunt nostrum eum reprehenderit necessitatibus quae quod.",
    authorID: 1,
  },
  {
    id: "4",
    thumbnail: cloudy,
    category: "weather",
    title: "Title of the post",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo magnam modi fuga natus voluptate rem saepe, provident cupiditate obcaecati sint sunt nostrum eum reprehenderit necessitatibus quae quod.",
    authorID: 4,
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="posts">
      <div className="container posts__container">
        {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
          <PostItem
            key={id}
            PostID={id}
            thumbnail={thumbnail}
            category={category}
            title={title}
            description={desc}
            authorID={authorID}
          />
        ))}
      </div>
    </section>
  );
};

export default Posts;
