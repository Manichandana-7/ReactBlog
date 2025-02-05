import Footer from "./Footer";
import NavBar from "./NavBar"
import { useState } from "react";
const Addblog = () => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const [imgurl,setImgurl]=useState("");
    const [count,setCount] =useState(0);
    const [likeCount,setlikeCount] =useState(0);
    const [comments,setComments] =useState([]);
    function handleAddBlog() {
        if (title && desc && imgurl) {
            const newBlog = { id: Date.now(), title, desc, imgurl, count, likeCount, comments };
            let existingBlogs = localStorage.getItem("blogs");
            try {
                existingBlogs = JSON.parse(existingBlogs);
                if (!Array.isArray(existingBlogs)) {
                    existingBlogs = [];  
                }
            } catch (error) {
                console.error("Error parsing blogs from localStorage", error);
                existingBlogs = []; 
            }
 
            existingBlogs.push(newBlog);

            localStorage.setItem("blogs", JSON.stringify(existingBlogs));
            setTitle("");
            setDesc("");
            setImgurl("");
            setCount(0);
            setComments([]);
            setlikeCount(0);
    
            alert("Blog added successfully!");
        } else {
            alert("Please fill all fields.");
        }
    
        window.location.href = '/';
    }
    return (
        <>
            <NavBar/>
            <div className="flex justify-center items-center m-10">
            <div className="flex flex-col justify-center items-center p-10 border border-gray-300 rounded-lg shadow-xl space-y-5 w-1/2 h-1/2">
                <h1 className="font-bold text-2xl text-center text-sky-800 ">ADD A BLOG</h1>
                <label className="text-xl block font-bold mb-2 self-start text-sky-800" >Title:</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Enter the title" className="border-1 rounded-md w-full p-2 bg-gray-50"/>
                <label className="text-xl block font-bold mb-2 text-sky-800 self-start" >Description:</label>
                <textarea rows="8" onChange={(e) => setDesc(e.target.value)} className="border-1 rounded-md w-full p-2 mb-5 bg-gray-50" placeholder="Enter the description of blog"></textarea>
                <label className="text-xl block font-bold mb-2 text-sky-800 self-start">Image URL:</label>
                <input type="text" onChange={(e) => setImgurl(e.target.value)} className="border-1 rounded-md w-full p-2 bg-gray-50" placeholder="Enter url for image"/>
                <button onClick={handleAddBlog} className="px-5 py-2 bg-sky-700 text-white rounded-md hover:bg-sky-600" >Add</button>
            </div>

            </div>
            
        </>
        

    );
}

export default Addblog
