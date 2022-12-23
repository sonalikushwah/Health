import React from "react";
const InsuranceDetails = ()=>{
    return(<>
    <div className="appointment-wrap bg-white p-4 p-md-5 d-flex align-items-center">
                            <form action="#" className="appointment-form fadeInUp ftco-animated">
                                <h3>Insurance Details</h3>
                                <div className="">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Company Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Policy Number" />
                                    </div>
                                    <div className="form-group">
                                            <div className="icon"><span className="ion-md-calendar"></span></div>
                                            <input type="text" className="form-control appointment_date" placeholder="Start Date" />
                                        </div>
                                        <div className="form-group">
                                            <div className="icon"><span className="ion-md-calendar"></span></div>
                                            <input type="text" className="form-control appointment_date" placeholder="End Date" />
                                        </div>
                                        <div className="form-group">
                                        <textarea name="" id="" cols="30" rows="2" className="form-control" placeholder="Message"></textarea>
                                    </div>
                                        <div className="form-group">
                                        <input type="submit" value="Submit & Save Details" className="btn btn-secondary py-3 px-4" />
                                    </div>
                                </div>
                            </form>
                            </div>
                            <p>Our team will save this details only for information, we will not share this information on other portal.</p>
                            

    </>)
}
export default InsuranceDetails;