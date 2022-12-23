import React, { useState } from "react";
import Image1 from "../../Images/doc-1.jpg";
import Image2 from "../../Images/certificate.jpg";
import UserNav from "./components/UserNav";
import TimeSlot from "./TimeSlot";
const UserDoctorDetails = () => {
    const [isopen, setIsopen] = useState(false);
    const togglePopup = ()=>{
        setIsopen(true);
        

    }
    return (<>
        {isopen ? <TimeSlot/> : ""}
        <UserNav />
        <div className="page" style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px", borderRadius: "10px" }}>
            <section className="ftco-sections doctordetails" id="doctor-section">
                <div className="container-fluid px-5">
                    <div className="row">
                        <div className="col-md-4 col-sm-4" style={{ textAlign: "center" }}>
                            <img src={Image1} alt="image1" style={{ width: "60%" }}></img>
                            {/* <div class="d-flex flex-row mt-1"><i class="fa fa-star u-color"></i> <i class="fa fa-star u-color"></i> <i class="fa fa-star u-color"></i> <i class="fa fa-star u-color"></i> <i class="fa fa-star-o u-color"></i> </div> */}
                            <div><h5 style={{ margin : "0px 1px" }}>Reviews</h5></div>
                            <div class="rating">
                                <input type="radio" name="rating" value="5" id="5" /><label for="5">☆</label>
                                <input type="radio" name="rating" value="4" id="4" /><label for="4">☆</label>
                                <input type="radio" name="rating" value="3" id="3" /><label for="3">☆</label>
                                <input type="radio" name="rating" value="2" id="2" /><label for="2">☆</label>
                                <input type="radio" name="rating" value="1" id="1" /><label for="1">☆</label>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-8">
                            <h3>Doctors Name</h3>
                            Family Doctor<br></br>
                            Male<br></br>
                            Experience : 3 Years
                            <br></br>
                            Fees : 1000 <br></br>
                            2 patient Connected<br></br>
                            <div className="tabcols" style={{ padding: "13px 0px" }}>
                            <a class="btn btn-secondary" style={{ fontSize : "13px" }} onClick={togglePopup} >Book Now</a>
                            </div>
                        </div></div>
                    <br></br>
                    <div className="row">
                        <div className="col-md-6 col-sm-6" >
                            <h3>Details</h3>
                            <hr></hr>
                            <div className="py-1">
                            <b>Hospital</b>  : abc hospital<br></br>
                            <b>Education</b> : Lorem Ipsum is simply dummy text<br></br>
                            <b>Biography</b>: Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
                            <b>description</b> : Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6" >
                            <h3>Certifications</h3>
                            <hr></hr>
                            <div style={{ paddingTop : "8px" }}>
                            <img src={Image2} alt="image1" style={{ width: "50%" }}></img>  
                            </div>
                        </div>
                        </div>
                </div></section>
        </div>
    </>)
}
export default UserDoctorDetails;