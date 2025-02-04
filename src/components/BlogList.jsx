import { useState, useEffect } from "react";
import Blogcard from "./Blogcard";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  return (
    <div className="p-10 flex flex-wrap gap-5 justify-center">
    
      {blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <Blogcard key={index} blogs={blogs} setBlogs={setBlogs} id={blog.id} title={blog.title} desc={blog.desc} imgurl={blog.imgurl} count={blog.count} />
        ))
      ) : (
        <p>No blogs available. Add some blogs!</p>
      )}
    </div>
  );
};

export default BlogList;
