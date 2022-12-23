import React, { useState } from "react";
import { Link } from "react-router-dom";
import BankDetails from "./BankDetails";
import ChangePassword from "./ChangePassword";
import Deleteaccount from "./DeleteAccount";
import Doctorprofile from "./Doctorprofile";
import Livenews from "./Livenews";
import Mypayments from "./Mypayments";
import Prescription from "./Prescription";
import Reminders from "./Reminders";
import Schedule from "./Schedule";
const ResponsiveDoctorprofile = ()=>{
//   const [show, setShow ] = useState(false);
//     const togglepage = ()=>{
//         setShow(true);
//     }
//     return(<>
//      <a onClick={togglepage} ><i class="fa-solid fa-arrow-right"></i></a>
// {show ? <>
//     <div class="sidebar">
//   <a>Home</a>
//   <a href="#services">Services</a>
//   <a href="#clients">Clients</a>
//   <a href="#contact">Contact</a>
// </div>
// </> : null}
    // </>)
    const [id, setId] = useState("1");
    const handleChange=(n)=>{
     switch(n){
         case 1: setId("1");break;
         case 2: setId("2");break;
         case 3: setId("3");break;
         case 4: setId("4");break;
         case 5: setId("5");break;
         case 6: setId("6");break;
         case 7: setId("7");break;
         case 8: setId("8");break;
         case 9: setId("9");break;
         default: setId("1");
         
     }
    }
    return(<>
    <div className="schedule popup-form">
            <ul className="choose-form selector" style={{ textAlign : "center" }}>
                <li className=""><Link onClick={()=>handleChange(1)}  className={`${(id==1) ?"active":""}`} title="" >Profile</Link></li>
                <li className=""><Link onClick={()=>handleChange(2)}  className={`${(id==2) ?"active":""}`} title="" >Schedule</Link></li>
                <li className=""><Link onClick={()=>handleChange(3)}  className={`${(id==3) ?"active":""}`} title="" >Bank Details</Link></li>
                <li className=""><Link onClick={()=>handleChange(4)}  className={`${(id==4) ?"active":""}`} title="" >Prescription</Link></li>
                <li className=""><Link onClick={()=>handleChange(5)}  className={`${(id==5) ?"active":""}`}title="" >My payments</Link></li>
                <li className=""><Link onClick={()=>handleChange(6)}  className={`${(id==6) ?"active":""}`}title="" >LiveNews</Link></li>
                <li className=""><Link onClick={()=>handleChange(7)}  className={`${(id==7) ?"active":""}`}title="" >Reminders</Link></li>
                <li className=""><Link onClick={()=>handleChange(8)}  className={`${(id==8) ?"active":""}`}title="" >Change Password</Link></li>
                <li className=""><Link to="/" onClick={()=>handleChange(9)}  className={`${(id==9) ?"active":""}`}title="" >Logout</Link></li>
            </ul>
        </div>
        {id==1 ? <Doctorprofile/> :null}
        {id==2 ? <Schedule/>: null}
        {id==3 ? <BankDetails/>: null}
        {id==4 ? <Prescription/>: null}
        {id==5 ? <Mypayments/>: null}
        {id==6 ? <Livenews/>:null}
        {id==7 ? <Reminders/>:null}
        {id==8 ? <ChangePassword/>: null}
    </>)
}
export default ResponsiveDoctorprofile;