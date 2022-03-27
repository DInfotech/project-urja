import React, { useState } from "react";
import { BlogData } from "./BlogData";
import BlogCard from "./BlogCard";
import "./Blog.css";
const Blog = () => {
  const [data] = useState(BlogData);
  return (
    <>
      <div
        className="common-heading hero-image"
        style={{
          fontWeight: "900",
          marginTop: "3rem",
          fontSize: "4rem",
          color: "var(--primarygreen)",
        }}
      >
        Blog{" "}
      </div>
      <div className="max-width">
        <div className="band">
          {data.map((curElem) => {
            return <BlogCard key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
