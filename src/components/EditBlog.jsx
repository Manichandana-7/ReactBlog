import { useEffect ,useState} from "react";

function EditBlog ({bloggy}) {
    const [blogTitle,setblogTitle]=useState(bloggy.title);
    const [blogDesc,setblogDesc]=useState(bloggy.desc);
    const [blogImgurl,setblogImgurl]=useState(bloggy.imgurl);
    useEffect(()=>{
        setblogTitle(bloggy.title);
        setblogDesc(bloggy.desc);
        setblogImgurl(bloggy.imgurl);
    },[bloggy]);

    function handleUpdate(id){
        const existBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
        const currBlog = existBlogs.find(blog => blog.id === id);
        if(currBlog){
            currBlog.title=blogTitle;
            currBlog.desc=blogDesc;
            currBlog.imgurl=blogImgurl;
        }
        localStorage.setItem("blogs",JSON.stringify(existBlogs));
        window.location.href="/";
    }

    function handleClose(){
        window.location.href="/";
    }

  return (
    <>
      <div className="fixed inset-0 bg-gray-100 text-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-14 rounded-lg shadow-lg w-2/4 h-auto flex flex-col">
                <h1 className="font-bold text-2xl text-center text-sky-800 ">EDIT A BLOG</h1>
                <label className="text-xl block font-bold mb-2 self-start text-sky-800" >Title:</label>
                <input type="text" value={blogTitle} onChange={(e) => setblogTitle(e.target.value)} className="border-1 rounded-md w-full p-2 bg-gray-100"/>
                <label className="text-xl block font-bold mb-2 text-sky-800 self-start" >Description:</label>
                <textarea rows="8" value={blogDesc} onChange={(e) => setblogDesc(e.target.value)} className="border-1 rounded-md w-full p-2 mb-5 bg-gray-100" ></textarea>
                <label className="text-xl block font-bold mb-2 text-sky-800 self-start">Image URL:</label>
                <input type="text" value={blogImgurl} onChange={(e) => setblogImgurl(e.target.value)} className="border-1 rounded-md w-full p-2 bg-gray-100" />
                <div className="flex justify-center items-center mt-6 gap-10">
                    <button onClick={handleClose}className="px-5 py-2 bg-sky-700 text-white rounded-md hover:bg-sky-600">Close</button>
                    <button  onClick={()=>handleUpdate(bloggy.id)} className="px-5 py-2 bg-sky-700 text-white rounded-md hover:bg-sky-600" >Update</button>
                </div>
                
            </div>

            </div>
    </>
  )
}

export default EditBlog
