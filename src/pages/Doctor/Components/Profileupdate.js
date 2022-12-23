import React from "react";
import Image1 from "../../../Images/upload.jpg";
import "../css/style2.css";
import "../css/responsive.css";
const ProfileUpdate = ()=>{
    return(<>
    <div className="appointment-wrap bg-white p-4 p-md-5 d-flex align-items-center">
                            <form action="#" className="appointment-form fadeInUp ftco-animated member-profile member-wrap">
                                <h3>Update Profile</h3>
                                <div className="member-avatar">
                <p>Please Upload your profile picture here</p>
                    {/* <img id="member_avatar" style={{width : "100px", height : "100px"}} src={Image1} alt="Member Avatar"/> */}
                        <label for="upload_new">
                        <img id="member_avatar" style={{width : "100px", height : "100px"}} src={Image1} alt="Member Avatar"/>
                            <input id="upload_new" type="file" name="member_avatar" placeholder="Upload new" value=""/>
                                 Upload
                        </label>
                </div>
                                <div className="">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Type Name here"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Hospital/Clinic name" />
                                    </div>
                                </div>
                                <div className="">
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" className="form-control">
                                                <option value="">Select Gender</option>
                                                    <option value="">Male</option>
                                                    <option value="">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" className="form-control">
                                                <option value="">Category Name</option>
                                                    <option value="">Family Physician</option>
                                                    <option value="">Radiologists</option>
                                                    <option value="">Sports Medicine Specialists</option>
                                                    <option value="">Plastic Surgeons</option>
                                                    <option value="">Oncologists</option>
                                                    <option value="">Endocrinologists</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Clinic Fees" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Description" />
                                    </div>
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" className="form-control">
                                                <option value="">Year of Experience</option>
                                                    <option value="">1 year</option>
                                                    <option value="">2 years</option>
                                                    <option value="">3 years</option>
                                                    <option value="">4 years</option>
                                                    <option value="">5 years</option>
                                                    <option value="">5+ years</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Biography" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Education" />
                                    </div>
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" className="form-control">
                                                <option value="">Do you provide services as a General Physician</option>
                                                    <option value="">Yes</option>
                                                    <option value="">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" className="form-control">
                                                <option value="">Do you provide insurance services</option>
                                                    <option value="">Yes</option>
                                                    <option value="">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" className="form-control">
                                                <option value="">Do you provide Home services</option>
                                                    <option value="">Yes</option>
                                                    <option value="">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" className="form-control">
                                                <option value="">Are you available for telemed services</option>
                                                    <option value="">Yes</option>
                                                    <option value="">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                <label for="upload_new">
                                <div className="form-group choose-img">
                                        <div className="input-wrap">
                                        
                                        Upload practice certificate image
                                <input id="upload_new" type="file" className="form-control" placeholder="Upload practice certificate image"/>
                                
                                </div></div></label>
                                    <div className="form-group">
                                        <div className="input-wrap">
                                            <div className="icon"><span className="ion-md-calendar"></span></div>
                                            <input type="text" className="form-control " placeholder="Address"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-wrap">
                                            <div className="icon"><span className="ion-ios-clock"></span></div>
                                            <input type="text" className="form-control " placeholder="LandMark" />
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="form-group">
                                        <input type="submit" value="Submit" className="btn btn-secondary py-3 px-4" />
                                    </div>
                                </div>
                            </form>
                            </div>
        
    </>)
}
export default ProfileUpdate;