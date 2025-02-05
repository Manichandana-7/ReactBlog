import { useEffect, useState } from "react";
import UniqBlog from "./uniqBlog";
import EditBlog from "./EditBlog";
import { Eye } from 'lucide-react';
const Blogcard = (props) => {
  const [selectBlog, setSelectBlog] = useState(null);
  const [editselectBlog,setEditselectBlog] = useState(null);
  const [viewedBlogs, setViewedBlogs] = useState(new Set());

  useEffect(() => {
    localStorage.setItem("blogs",JSON.stringify(props.blogs));
  }, [props.blogs]);
    function deleteBlog(id){
      console.log(id);
      const updatedBlogs = props.blogs.filter(blog => blog.id !== id);
      props.setBlogs(updatedBlogs);
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    };

    function viewBlog(id) {
      if (viewedBlogs.has(id)) return; 
    setViewedBlogs(prev => new Set(prev).add(id));
      let storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
      let updatedBlogs = storedBlogs.map(blog => {
          if (blog.id === id) {
            
              return { ...blog, count: (blog.count || 0) + 1 }; 
          }
          return blog;
      });
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
      const uniqueBlog = updatedBlogs.find(blog => blog.id === id);
      console.log(uniqueBlog.count);
      setSelectBlog(uniqueBlog);
  }
  

  function editBlog(id){
      const editingBlog = props.blogs.find(blog => blog.id === id);
      setEditselectBlog(editingBlog); 
      console.log(editingBlog);
  }
    return (
      <div className="grid lg:grid-col-3 gap-6 p-6 w-1/3 ">
  <div className="flex flex-col md:flex-row items-center p-4 border border-gray-300 rounded-lg shadow-xl bg-sky-50 ">
    <img src={props.imgurl} 
         alt="Blog Image" 
         className="w-36 h-36 object-cover rounded-full md:mr-6"/>
    <div className="flex flex-col justify-between w-full">
      <h1 className="text-2xl font-bold text-sky-800 mb-2">{props.title}</h1>
      <div className="flex items-center text-sky-900 gap-2">
        <Eye />
        <p className="text-lg border border-dashed rounded-full shadow-lg px-2 bg-gray-100">
          {props.count}
        </p>
      </div>
      <div className="mt-3 flex  gap-6">
        

        <button onClick={() => viewBlog(props.id)} 
                className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-500">
          {selectBlog && selectBlog.id === props.id && (
            <UniqBlog blog={selectBlog} />
          )}View
        </button>
        <button onClick={() => editBlog(props.id)} 
                className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-500">
          {editselectBlog && editselectBlog.id === props.id && (
            <EditBlog bloggy={editselectBlog} />
          )}Edit
        </button>

        <button onClick={() => deleteBlog(props.id)} 
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400">
          Delete
        </button>
      </div>
    </div>

  </div>
</div>


    );
  };
  
  export default Blogcard;
  