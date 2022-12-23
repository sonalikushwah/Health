import React from "react";
const ChangePassword = ()=>{
    return(<>
    <div className="appointment-wrap bg-white p-4 p-md-5 d-flex align-items-center">
                            <form action="#" className="appointment-form fadeInUp ftco-animated">
                                <h3>Change Password</h3>
                                <div className="">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Old Password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="New Password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Confirm Password" />
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
export default ChangePassword;