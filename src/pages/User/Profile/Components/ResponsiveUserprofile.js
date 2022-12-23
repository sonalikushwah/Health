import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChangePassword from "./ChangePassword";
import Deleteaccount from "./Deleteaccount";
import Howtobook from "./Howtobook";
import InsuranceDetails from "./InsuranceDetails";
import MedicalRecords from "./MedicalRecords";
import Mypayments from "./Mypayments";
import Offers from "./Offers";
import Prescription from "./Prescription";
import ProfileUpdate from "./ProfileUpdate";
import Reminders from "./Reminders";
const ResponsiveUserprofile = ()=>{
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
         case 10: setId("10");break;
         default: setId("1");
         
     }
    }
    return(<>
    <div className="schedule popup-form">
            <ul className="choose-form selector" style={{ textAlign : "center" }}>
                <li className=""><Link onClick={()=>handleChange(1)}  className={`${(id==1) ?"active":""}`} title="" >Profile</Link></li>
                <li className=""><Link onClick={()=>handleChange(2)}  className={`${(id==2) ?"active":""}`} title="" >Prescription</Link></li>
                <li className=""><Link onClick={()=>handleChange(3)}  className={`${(id==3) ?"active":""}`} title="" >How to book</Link></li>
                <li className=""><Link onClick={()=>handleChange(4)}  className={`${(id==4) ?"active":""}`} title="" >Medical Records</Link></li>
                <li className=""><Link onClick={()=>handleChange(5)}  className={`${(id==5) ?"active":""}`}title="" >Reminders</Link></li>
                <li className=""><Link onClick={()=>handleChange(6)}  className={`${(id==6) ?"active":""}`}title="" >Insurance Details</Link></li>
                <li className=""><Link onClick={()=>handleChange(7)}  className={`${(id==7) ?"active":""}`}title="" >My payments</Link></li>
                <li className=""><Link onClick={()=>handleChange(8)}  className={`${(id==8) ?"active":""}`}title="" >Change Password</Link></li>
                <li className=""><Link onClick={()=>handleChange(9)}  className={`${(id==9) ?"active":""}`}title="" >Offers</Link></li>
                <li className=""><Link to="/" onClick={()=>handleChange(10)}  className={`${(id==10) ?"active":""}`}title="" >Logout</Link></li>
            </ul>
        </div>
        {(id==1) ? <ProfileUpdate/>:null}
        {(id==2)?<Prescription/>:null}
        {(id==3)?<Howtobook/>:null}
        {(id==4)?<MedicalRecords/>:null}
        {(id==5)?<Reminders/>:null}
        {(id==6)?<InsuranceDetails/>:null}
        {(id==7)?<Mypayments/>:null}
        {(id==8)?<ChangePassword/>:null}
        {(id==9)?<Offers/>:null}
    </>)
}
export default ResponsiveUserprofile;