import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bookingform from "./Bookingform";
const TimeSlot = () => {
    const [isopen, setIsopen ]= useState(false);
    const [id, setId] = useState("1");
    const handleChange=(n)=>{
     switch(n){
         case 1: setId("1");break;
         case 2: setId("2");break;
         case 3: setId("3");break;
         case 4: setId("4");break;
         default: setId("1");
        
        }
       }
       const popupChanged = ()=>{
        setIsopen(true);
       }
    const handleSubmit = () => {
        
    }
    return (<>
    {isopen ? <Bookingform/>:
        <div className="popup popup-form" style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px", borderRadius: "10px" }}>
            <a title="Close" href="/user/doctors/detail" className="popup__close">
                <i class="fa-solid fa-xmark"></i>
            </a>{/* .popup__close */}
            <p>Select a Time Slot</p>
         <div className="popup-content">
                <form action="" onSubmit={handleSubmit} className="form-sign form-content" id="signup">
                    <div className="field-input">
                        
                            <label class="my-1 mr-2">Select Date</label><br></br>
                        <input type="date"  name="date" />
                    </div>
                    <div className="field-input">
                    <label class="my-1 mr-2">Available Slot</label><br></br>
                      <div className="rows p-t" style={{ margin: "10px 0px" }}>
                        
                      <div className="col-md-6 col-sm-6">
                      <Link  onClick={()=>handleChange(1)}  className={`${(id==1) ?"active":""}`} >
                        <div className="slottime">
                            <p>08:00 p.m.-08:45p.m.</p>
                        </div></Link>
                        </div>
                        <div className="col-md-6 col-sm-6">
                        <Link onClick={()=>handleChange(2)}  className={`${(id==2) ?"active":""}`}>
                        <div className="slottime">
                            <p>08:00 p.m.-08:45p.m.</p>
                        </div></Link>
                        </div></div>
                        <div className="rows" style={{ margin : "10px 0px" }}>
                        <div className="col-md-6 col-sm-6">
                        <Link onClick={()=>handleChange(3)}  className={`${(id==3) ?"active":""}`}>
                        <div className="slottime">
                            <p>08:00 p.m.-08:45p.m.</p>
                        </div></Link>
                        </div>
                        
                        <div className="col-md-6 col-sm-6">
                        <Link onClick={()=>handleChange(4)}  className={`${(id==4) ?"active":""}`}>
                        <div className="slottime">
                            <p>08:00 p.m.-08:45p.m.</p>
                        </div></Link>
                        </div>
                        
                        </div>    
                        
                    </div>
                    
                    <div className="field-input">
                        <Link onClick={popupChanged}>
                    <input type="submit" name="submit" value="Book Now" /></Link>
                    </div>
                    
                    
                </form>

            </div>
        </div>}
    </>)
}
export default TimeSlot;