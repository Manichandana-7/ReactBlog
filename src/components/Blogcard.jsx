const Blogcard = (props) => {
    function deleteBlog(){

    }
    return (
      <div className="p-4 border border-gray-300 rounded-lg shadow-xl text-center">
        <h1 className="text-3xl font-bold text-sky-800">{props.title}</h1>
        <img src={props.imgurl} alt="Blog Image" className="w-full h-50 object-cover mx-auto" />
        <div className="mt-3 flex justify-between">
          <button className="px-5 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-500">Edit</button>
          <button className="px-5 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-500">View</button>
          <button onClick="deleteBlog" className="px-5 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-500">Delete</button>
        </div>
      </div>
    );
  };
  
  export default Blogcard;
  