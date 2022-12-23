import React from "react";
const LivenewsForm = () =>{
    return(<>
    <div className="appointment-wrap bg-white p-4 p-md-5 d-flex align-items-center">
                            <form action="#" className="appointment-form fadeInUp ftco-animated">
                                <h3>Add Live News</h3>
                                <div className="">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Title"/>
                                    </div>
                                    
                                    {/* Bank Account Details */}
                                    <div className="form-group">
                                            <div className="icon"><span className="ion-md-calendar"></span></div>
                                            <input type="text" className="form-control " placeholder="URL" />
                                        </div>
                                        <div className="form-group">
                                            <div className="icon"><span className="ion-md-calendar"></span></div>
                                            <input type="text" className="form-control" placeholder="Description" />
                                        </div>
                                        <div className="form-group">
                                        <input type="submit" value="Submit " className="btn btn-secondary py-3 px-4" />
                                    </div>
                                </div>
                            </form>
                            </div>
    </>)
}
export default LivenewsForm;