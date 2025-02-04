import { useState } from "react";
import UniqBlog from "./uniqBlog";

const Blogcard = (props) => {
  const [selectBlog, setSelectBlog] = useState(null);
  const [count,setCount]=useState(0);
 function increment (){
  setCount(count + 1);
}

    

    function deleteBlog(id){
      console.log(id);
      const updatedBlogs = props.blogs.filter(blog => blog.id !== id);
      props.setBlogs(updatedBlogs);
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    };

    function viewBlog(id) {
      const uniqueBlog = props.blogs.find(blog => blog.id === id);
      setSelectBlog(uniqueBlog); 
      console.log(uniqueBlog);
      increment();
      localStorage.setItem(uniqueBlog.count,count);
      
     
  }


    return (
      <div className="p-4 border border-gray-300 rounded-lg shadow-xl text-center">
        <h1 className="text-3xl font-bold text-sky-800 m-3">{props.title}</h1>
        <img src={props.imgurl} alt="Blog Image" className="w-full h-70 object-cover rounded-full mx-auto" />
        <div className="mt-3 flex justify-between gap-4">
          <button  className="px-5 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-500">Edit</button>
          <button onClick={()=>{viewBlog(props.id)}} className="px-5 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-500">
          {selectBlog && selectBlog.id === props.id && (
                <UniqBlog blog={selectBlog} />
            )}View</button>
          <button onClick={()=>{deleteBlog(props.id)}} className="px-5 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-500">Delete</button>
        </div>
      </div>
    );
  };
  
  export default Blogcard;
  