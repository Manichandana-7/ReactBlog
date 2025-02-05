import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

function UniqBlog({ blog }) {
    const blogKey = `blog_${blog.id}`;

    const [blogData, setBlogData] = useState(() => {
     
        const savedBlog = JSON.parse(localStorage.getItem(blogKey)); 
        return savedBlog || { ...blog, likeCount: 0, isLiked: false, comments: [] };  
    });

    const [popEffect, setPopEffect] = useState(false); 
    const [newComment, setNewComment] = useState(''); 
    const [showComments, setShowComments] = useState(false); 

    function handleLike() {
        const updatedBlog = { ...blogData };

        updatedBlog.likeCount = updatedBlog.isLiked ? updatedBlog.likeCount - 1 : updatedBlog.likeCount + 1;
        updatedBlog.isLiked = !updatedBlog.isLiked;
        if (updatedBlog.isLiked) {
            setPopEffect(true);
            setTimeout(() => setPopEffect(false), 300); 
        }

        localStorage.setItem(blogKey, JSON.stringify(updatedBlog));
        setBlogData(updatedBlog); 
    }

    function handleCommentChange(event) {
        setNewComment(event.target.value);
    }

    function handleAddComment(event) {
        event.preventDefault();
        if (newComment.trim()) {
            const updatedBlog = { ...blogData };
            updatedBlog.comments = [...updatedBlog.comments, newComment.trim()];
        
            localStorage.setItem(blogKey, JSON.stringify(updatedBlog));
            setBlogData(updatedBlog); 

            setNewComment(''); 
        }
    }

    function closeBlog() {
        window.location.href = "/"; 
    }
    function toggleComments() {
        setShowComments(prev => !prev);
    }

    return (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-2/3 h-auto flex gap-3">
                <img 
                    src={blogData.imgurl} 
                    alt="Blog Image" 
                    className="w-1/2 h-auto object-contain rounded-xl" 
                />
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold text-sky-800">{blogData.title}</h1>
                    <p className="text-xl text-gray-800 mt-4">{blogData.desc}</p>
                    <div className="mt-4 flex flex-col items-center">
                        <Heart
                            onClick={handleLike}
                            size={32}
                            color={blogData.isLiked ? (popEffect ? 'red' : 'red') : 'gray'} 
                            className={`cursor-pointer transition-transform duration-150 ease-in-out ${popEffect ? 'scale-125' : ''}`}
                            fill={blogData.isLiked ? 'red' : 'none'} />
                        <p className="mt-2 text-lg text-sky-800">{blogData.likeCount} Likes</p>
                    </div>

                    <div className="mt-6 w-full">

                        <p 
                            onClick={toggleComments} 
                            className="mt-2 text-sky-600 cursor-pointer hover:text-sky-800"
                        >
                            {showComments ? 'Hide Comments' : 'Show & Add Comments'}
                        </p>

                        {showComments && (
                            <div className="mt-4 space-y-3 max-h-64 overflow-y-auto">
     
                                <form onSubmit={handleAddComment} className="mt-4">
                                    <textarea
                                        value={newComment}
                                        onChange={handleCommentChange}
                                        className="w-full p-3 border-2 border-gray-300 text-black rounded-lg border-dashed "
                                        rows="2"
                                        placeholder="Add a comment..."
                                    />
                                    <button
                                        type="submit"
                                        className="mt-2 px-6 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-500"
                                    >
                                        Post Comment
                                    </button>
                                </form>
                                <div className="space-y-3">
                                    
                                    {blogData.comments.length > 0 ? (
                                        blogData.comments.map((comment, index) => (
                                            <div key={index} className="p-4 border-b border-gray-300">
                                                
                                                <p className="text-lg text-gray-800">{comment}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-600">No comments yet.</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    <button 
                        onClick={closeBlog}
                        className="px-5 py-2 mt-5 bg-sky-600 text-white rounded-md hover:bg-sky-500"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UniqBlog;
