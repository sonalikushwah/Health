import React from "react";
const Scheduleform = ()=>{
    return(<>
    <div className="appointment-wrap bg-white p-4 p-md-5 d-flex align-items-center">
                            <form action="#" className="appointment-form fadeInUp ftco-animated">
                                <h3>Add Schedule</h3>
                                <div className="">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Title"/>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" className="form-control">
                                                <option value="">Monday</option>
                                                    <option value="">Tuesday</option>
                                                    <option value="">Wednesday</option>
                                                    <option value="">Thursday</option>
                                                    <option value="">Friday</option>
                                                    <option value="">Saturday</option>
                                                    <option value="">Sunday</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" className="form-control">
                                                <option value="">Time Interval</option>
                                                    <option value="">15 min</option>
                                                    <option value="">30 min</option>
                                                    <option value="">45 min</option>
                                                    <option value="">1 hour</option>
                                                    <option value="">2 hours</option>
                                                    <option value="">More than 2 hours</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    Start Time
                                    <div className="form-group">
                                            <div className="icon"><span className="ion-md-calendar"></span></div>
                                            <input type="time" className="form-control appointment_date" placeholder="Start Time" />
                                        </div>
                                        End Time
                                        <div className="form-group">
                                            <div className="icon"><span className="ion-md-calendar"></span></div>
                                            <input type="time" className="form-control appointment_date" placeholder="End Time" />
                                        </div>
                                        <div className="form-group">
                                        <input type="submit" value="Submit " className="btn btn-secondary py-3 px-4" />
                                    </div>
                                </div>
                            </form>
                            </div>
    </>)
}
export default Scheduleform;