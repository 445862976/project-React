import { useEffect, useState } from "react";
import Posts from "./components/Posts";
import { posts } from "./data/data";

export default function App() {
  const [searchVal, setSearchVal] = useState("");
  const [selectedType, setSelectedType] = useState(""); // State to hold the selected type

  // Get unique post types
  const uniquePosts = posts.reduce((acc, curr) => {
    const existing = acc.find((post) => post.type === curr.type);
    console.log(existing);
    return existing ? acc : [...acc, curr];
  }, []);

  const handleTypeClick = (type) => {
    setSelectedType(type); // Set the selected type when clicked
  };

  return (
    <div>
      <input
        type="text"
        className="search"
        placeholder="Search.."
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <div className="tabs">
        {uniquePosts.map((ele) => (
          <span
            key={ele.type}
            onClick={() => handleTypeClick(ele.type)} // Add click handler
            className={selectedType === ele.type ? "active" : ""}
          >
            {ele.type}
          </span>
        ))}
      </div>
      <Posts searchVal={searchVal} selectedType={selectedType} />{" "}
      {/* Pass selectedType */}
    </div>
  );
}
