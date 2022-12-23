import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReminderForm from "./ReminderForm";
const Reminders = ()=>{
    const [open, setOpen] = useState(false);
    const togglepage = ()=>{
        setOpen(true);
    }
    return(<>
    {open ? <ReminderForm/>:<>
     <div className="addmore">
    <Link onClick={togglepage} ><i class="fa-solid fa-circle-plus"></i></Link>
    </div>
    <ul className="profileSlidebar p-4">
        <li className="tabrowss">
            <h3>Reminder 1</h3>
            <p>This is prescribed to you, not eat junk food. it will affect you....</p>
        </li>
        <li className="tabrowss">
            <h3>Reminder 2</h3>
            <p>This is prescribed to you, not eat junk food. it will affect you....</p>
        </li>
        <li className="tabrowss">
            <h3>Reminder 3</h3>
            <p>This is prescribed to you, not eat junk food. it will affect you....</p>
        </li>
     </ul></>}
    </>)
}
export default Reminders;