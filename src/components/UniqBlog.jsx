import React from 'react'

function UniqBlog({ blog }) {
    function closeBlog() {
        window.location.href = "/";
    }
    
    return (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-2/4 h-auto flex">
                <img 
                    src={blog.imgurl} 
                    alt="Blog Image" 
                    className="w-1/2 h-auto object-contain rounded-full mr-8" 
                />
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold text-sky-800">{blog.title}</h1>
                    <p className="text-xl text-gray-800 mt-4">{blog.desc}</p>
                    <button 
                        onClick={closeBlog}
                        className="px-5 py-2 mt-5 bg-sky-600 text-white rounded-md hover:bg-sky-500"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UniqBlog;
