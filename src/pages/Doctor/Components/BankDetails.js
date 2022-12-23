import React from "react";

const BankDetails = ()=>{
    return(<>
    <div className="appointment-wrap bg-white p-4 p-md-5 d-flex align-items-center">
                            <form action="#" className="appointment-form fadeInUp ftco-animated">
                                <h3>Bank Details</h3>
                                <div className="">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Busniess Name"/>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" className="form-control">
                                                <option value="">Busniess Type</option>
                                                    <option value="">Private Limited</option>
                                                    <option value="">Proprietorship</option>
                                                    <option value="">Partnership</option>
                                                    <option value="">Individual</option>
                                                    <option value="">Public Limited</option>
                                                    <option value="">Trust</option>
                                                    <option value="">LLP</option>
                                                    <option value="">Society</option>
                                                    <option value="">NGO</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Bank Account Details */}
                                    <div className="form-group">
                                            <div className="icon"><span className="ion-md-calendar"></span></div>
                                            <input type="text" className="form-control appointment_date" placeholder="Confirm Account Number" />
                                        </div>
                                        <div className="form-group">
                                            <div className="icon"><span className="ion-md-calendar"></span></div>
                                            <input type="text" className="form-control appointment_date" placeholder="Account Id" />
                                        </div>
                                        <div className="form-group">
                                            <div className="icon"><span className="ion-md-calendar"></span></div>
                                            <input type="text" className="form-control appointment_date" placeholder="Beneficiary Name" />
                                        </div>
                                        <div className="form-group">
                                            <div className="icon"><span className="ion-md-calendar"></span></div>
                                            <input type="text" className="form-control appointment_date" placeholder="Account Details" />
                                        </div>
                                        <div className="form-group">
                                        <input type="submit" value="Submit " className="btn btn-secondary py-3 px-4" />
                                    </div>
                                </div>
                            </form>
                            </div>
    </>)
}
export default BankDetails;