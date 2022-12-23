import React, { useState } from "react";
import { Link } from "react-router-dom";
import LivenewsForm from "./LivenewsForm";
const Livenews = ()=>{
    const [open, setOpen] = useState(false);
    const togglepage = ()=>{
        setOpen(true);
    }
    return(<>
    {open ? <LivenewsForm/>:<>
     <div className="addmore">
    <Link onClick={togglepage} ><i class="fa-solid fa-circle-plus"></i></Link>
    </div>
    <ul className="profileSlidebar p-4">
        <li className="tabrowss">
            <h3>News 1</h3>
            <p>This is prescribed to you, not eat junk food. it will affect you....</p>
        </li>
        <li className="tabrowss">
            <h3>News 2</h3>
            <p>This is prescribed to you, not eat junk food. it will affect you....</p>
        </li>
        <li className="tabrowss">
            <h3>News 3</h3>
            <p>This is prescribed to you, not eat junk food. it will affect you....</p>
        </li>
     </ul></>}
    </>)
}
export default Livenews;