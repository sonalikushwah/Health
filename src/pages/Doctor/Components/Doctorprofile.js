import React, { useState } from "react";
import Image1 from "../../../Images/doc-1.jpg";
import Image2 from "../../../Images/certificate.jpg";
import "../css/style2.css";
import "../css/responsive.css";
import ProfileUpdate from "./Profileupdate";
const Doctorprofile = ()=>{
    const [id, setId] = useState(false);
    const togglepage = ()=>{
        setId(true);
    }
    return(<>
    {id ? <ProfileUpdate/>:<>
    <section className="ftco-sections" id="doctor-section">
                <div className="container-fluid px-5">
                    <div className="row profile">
                        <div className="col-md-4 col-sm-4" style={{ textAlign: "center",paddingTop : "22px" }}>
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
                        <div className="col-md-8 col-sm-8 doc-p">
                            <h3>Doctors Name</h3>
                            Family Doctor<br></br>
                            Male<br></br>
                            Experience : 3 Years
                            <br></br>
                            Fees : 1000 <br></br>
                            2 patient Connected<br></br>
                            <div className="tabcols" style={{ padding: "13px 0px" }}>
                            <a class="btn btn-secondary" onClick={togglepage}>Edit Profile</a>
                            </div>
                        </div></div>
                        <div className="row doc-p">
                        
                            <h3>Details</h3>
                            <hr></hr>
                            <div className="py-1">
                            <b>Hospital</b>  : abc hospital<br></br>
                            <b>Education</b> : Lorem Ipsum is simply dummy text<br></br>
                            <b>Biography</b>: Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
                            <b>description</b> : Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
                            </div>
                        </div>
                        <div className="row doc-p">
                        
                            <h3>Certifications</h3>
                            <hr></hr>
                            <div style={{ paddingTop : "8px" }}>
                            <img src={Image2} alt="image1" style={{ width: "50%" }}></img>  
                            </div>
                            <br></br>
                        </div>
                        {/* <div style={{ textAlign : "center",     paddingTop: "18px" }}>
                        <a href="#" class="btn btn-secondary py-3 px-4">Schedule Now</a></div> */}
                        </div></section></>}
    </>)
}
export default Doctorprofile;