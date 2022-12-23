import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/style2.css";
import "../css/responsive.css";
import Scheduleform from "./Scheduleform";
import ScheduleBlock from "../../../Component/scheduleBlock";
const Schedule = () => {
    const [id, setId] = useState("1");
    const [idt, setIdt] = useState("1");
    const [open, setOpen] = useState(false);
    const togglepage = ()=>{
        setOpen(true);
    }
    const toggle=(n)=>{
     switch(n){
         case 1: setIdt("1");break;
         case 2: setIdt("2");break;
         case 3: setIdt("3");break;
         case 4: setIdt("4");break;
         case 5: setIdt("5");break;
         case 6: setIdt("6");break;
         case 7: setIdt("7");break;
         case 8: setIdt("8");break;
         default: setIdt("1");
        
        }
       }
    const handleChange=(n)=>{
     switch(n){
         case 1: setId("1");break;
         case 2: setId("2");break;
         case 3: setId("3");break;
         case 4: setId("4");break;
         case 5: setId("5");break;
         case 6: setId("6");break;
         case 7: setId("7");break;}}
    return (<>
    {open ? <Scheduleform/>:<>
    <div className="addmore">
    <Link onClick={togglepage} ><i class="fa-solid fa-circle-plus"></i></Link>
    </div>
        <div className="schedule popup-form">
            <ul className="choose-form">
                <li className=""><Link onClick={()=>handleChange(1)}  className={`${(id==1) ?"active":""}`} title="" >Monday</Link></li>
                <li className=""><Link onClick={()=>handleChange(2)}  className={`${(id==2) ?"active":""}`} title="" >Tuesday</Link></li>
                <li className=""><Link onClick={()=>handleChange(3)}  className={`${(id==3) ?"active":""}`} title="" >Wednesday</Link></li>
                <li className=""><Link onClick={()=>handleChange(4)}  className={`${(id==4) ?"active":""}`} title="" >Thursday</Link></li>
                <li className=""><Link onClick={()=>handleChange(5)}  className={`${(id==5) ?"active":""}`}title="" >Friday</Link></li>
                <li className=""><Link onClick={()=>handleChange(6)}  className={`${(id==6) ?"active":""}`}title="" >Saturday</Link></li>
                <li className=""><Link onClick={()=>handleChange(7)}  className={`${(id==7) ?"active":""}`}title="" >Sunday</Link></li>
            </ul>
        </div>
        {id==1?<>
        <div className="timeBlock" style={{ paddingBottom : "15px" }}>
                    <label class="my-1 mr-2">Available Slot</label><br></br>
                      <div className="rows" style={{ margin: "10px 0px" }}>
                        
                      <div className="col-md-4 col-sm-4">
                      <Link  onClick={()=>toggle(1)}  className={`${(idt==1) ?"active":""}`} >
                        <ScheduleBlock time="08:00 p.m.-08:45p.m."/>
                        </Link>
                        </div>
                        <div className="col-md-4 col-sm-4">
                        <Link onClick={()=>toggle(2)}  className={`${(idt==2) ?"active":""}`}>
                        <ScheduleBlock time="08:00 p.m.-08:45p.m."/>
                        </Link>
                        </div>
                        <div className="col-md-4 col-sm-4">
                        <Link onClick={()=>toggle(3)}  className={`${(idt==3) ?"active":""}`}>
                        <ScheduleBlock time="08:00 p.m.-08:45p.m."/>
                       </Link>
                        </div>
                        </div>
                        <div className="rows" style={{ margin : "10px 0px" }}>
                        <div className="col-md-4 col-sm-4">
                        <Link onClick={()=>toggle(4)}  className={`${(idt==4) ?"active":""}`}>
                        <ScheduleBlock time="08:00 p.m.-08:45p.m."/>
                        </Link>
                        </div>
                        
                        <div className="col-md-4 col-sm-4">
                        <Link onClick={()=>toggle(5)}  className={`${(idt==5) ?"active":""}`}>
                        <ScheduleBlock time="08:00 p.m.-08:45p.m."/>
                        </Link>
                        </div>
                        <div className="col-md-4 col-sm-4">
                        <Link onClick={()=>toggle(6)}  className={`${(idt==6) ?"active":""}`}>
                        <ScheduleBlock time="08:00 p.m.-08:45p.m."/>
                        </Link>
                        </div>
                        </div>    
                        
                    </div>
                    </>:null}</>}
    </>)
}
export default Schedule;