import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddMedicalRecords from "./AddMedicalRecords";
const MedicalRecords = ()=>{
    const [id, setId] = useState(false);
    const togglepage = ()=>{
        setId(true);
    }
    return(<>
    {id ? <AddMedicalRecords/>:<>
    <div className="addmore">
    <Link onClick={togglepage}><i class="fa-solid fa-circle-plus"></i></Link>
    </div>
     <ul className="profileSlidebar p-4">
        <li className="tabrowss">
            <div style={{ display : "inline" }}>
            <div className="tabcols">
            <h3>Record 1</h3></div>
            <div className="tabcols" style={{ float: "right" }}>
            <i class="fa-solid fa-pen-to-square" style={{ float: "right" }}></i></div></div>
            <p>This is prescribed to you, not eat junk food. it will affect you....</p>
        </li>
        <li className="tabrowss">
        <div style={{ display : "inline" }}>
            <div className="tabcols">
            <h3>Record 1</h3></div>
            <div className="tabcols" style={{ float: "right" }}>
            <i class="fa-solid fa-pen-to-square" style={{ float: "right" }}></i></div></div>
            <p>This is prescribed to you, not eat junk food. it will affect you....</p>
        </li>
        <li className="tabrowss">
        <div style={{ display : "inline" }}>
            <div className="tabcols">
            <h3>Record 1</h3></div>
            <div className="tabcols" style={{ float: "right" }}>
            <i class="fa-solid fa-pen-to-square" style={{ float: "right" }}></i></div></div>
            <p>This is prescribed to you, not eat junk food. it will affect you....</p>
        </li>
     </ul></>}
    </>)
}
export default MedicalRecords;