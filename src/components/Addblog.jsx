import NavBar from "./NavBar"
import { useState } from "react";
const Addblog = () => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const [imgurl,setImgurl]=useState("");
    
    return (
        <>
            <NavBar/>
            <div>
                <label htmlFor=""></label>
            </div>
        </>
        

    );
}

export default Addblog
