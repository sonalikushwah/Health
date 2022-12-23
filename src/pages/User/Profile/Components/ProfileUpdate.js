import React from "react";
const ProfileUpdate = ()=>{
    return(<>
    <div className="appointment-wrap bg-white p-4 p-md-5 d-flex align-items-center">
                            <form action="#" className="appointment-form fadeInUp ftco-animated">
                                <h3>Update Profile</h3>
                                <div className="">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Type Name here"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="DOB" />
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
                                        <input type="text" className="form-control" placeholder="Height in feet" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Weight in Kg." />
                                    </div>
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" className="form-control">
                                                <option value="">Blood Group</option>
                                                    <option value="">Don't Know</option>
                                                    <option value="">A+</option>
                                                    <option value="">A-</option>
                                                    <option value="">B+</option>
                                                    <option value="">B-</option>
                                                    <option value="">AB+</option>
                                                    <option value="">AB-</option>
                                                    <option value="">O+</option>
                                                    <option value="">O-</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Mobile Number" />
                                    </div>
                                </div>
                                <div className="">
                                    <div className="form-group">
                                        <div className="input-wrap">
                                            <div className="icon"><span className="ion-md-calendar"></span></div>
                                            <input type="text" className="form-control appointment_date" placeholder="Address"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-wrap">
                                            <div className="icon"><span className="ion-ios-clock"></span></div>
                                            <input type="text" className="form-control appointment_time" placeholder="LandMark" />
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