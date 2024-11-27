import React, { useEffect, useState } from "react";
import { posts } from "../data/data";

export default function Posts({ searchVal, selectedType }) {
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // Filter posts based on search and type
    let filtered = posts;

    if (searchVal) {
      filtered = filtered.filter((ele) =>
        ele.title.toLowerCase().includes(searchVal.toLowerCase())
      );
    }

    if (selectedType) {
      filtered = filtered.filter((ele) => ele.type === selectedType);
    }

    setFilteredPosts(filtered);
  }, [searchVal, selectedType]); // Run the effect when either searchVal or selectedType changes

  return (
    <div className="posts_container">
      {filteredPosts.map((ele) => (
        <div className="post" key={ele.id}>
          <h2>{ele.title}</h2>
          <span
            className={`type ${
              ele.type === "Blog"
                ? "blogBadge"
                : ele.type === "Article"
                ? "articleBadge"
                : "postBadge"
            }`}
          >
            {ele.type}
          </span>
        </div>
      ))}
    </div>
  );
}
