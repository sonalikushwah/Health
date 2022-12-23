import React from "react";
const Bookingform = () =>{
    return(<>
    <div className="popup popup-form" style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px", borderRadius: "10px" }}>
                        <a title="Close" href="/user/doctors/detail" className="popup__close">
                        <i class="fa-solid fa-xmark"></i>
                        </a>{/* .popup__close */}
                        <div className="bookinghead">
                        <h3>Doctor Name</h3>
                        <p style={{ marginBottom : "0px" }}>family doctor</p> </div><hr></hr>
                        <div className="popup-content">
                        
                            <form action="#" className="form-sign form-content" id="signup">
                                <div className="field-inline static">
                                    <div className="field-input">
                                        <label>Selected Slot</label>
                                        <p>16 dec 2022 07:00 pm</p>
                                    </div>
                                    <div className="field-input">
                                    <label>Consultation fees</label>
                                    <p>1000 rupees</p>
                                        {/* <input type="text" placeholder="Last Name" name="last_name"/> */}
                                    </div>
                                </div>
                                <div className="field-input">
                                    <input type="text" placeholder="Name" name="name"/>
                                </div>
                                <div className="field-input">
                                    <input type="email" placeholder="Email" name="email"/>
                                </div>
                                <div className="field-input">
                                    <input type="text" placeholder="Number" name="number"/>
                                </div>
                                <div className="field-input">
                                    <input type="text" placeholder="Reason" name="reason"/>
                                </div>
                                <div className="field-check">
                                    <label htmlFor="accept">
                                        <input type="checkbox" id="accept" value="" />
                                        Accept the <a title="Terms" className="alo" href="#">Terms</a> and <a title="Privacy Policy"
                                            href="#">Privacy Policy</a>
                                        <span className="checkmark">
                                        <i class="fa-solid fa-check"></i>
                                        </span>
                                    </label>
                                </div>
                                <input type="submit" name="submit" value="Pay now"/>
                            </form>
                        </div></div>
    </>)
}
export default Bookingform;