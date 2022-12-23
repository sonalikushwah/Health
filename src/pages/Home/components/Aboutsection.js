import React from "react";
import Image from "../../../Images/about.jpg";
const Aboutsection = () => {
    return (<>
        <section className="ftco-counter img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-6 col-lg-5 d-flex">
                        <div className="img d-flex align-self-stretch align-items-center" style={{ backgroundImage: `url(${Image})` }}>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-7 pl-lg-5 py-md-5">
                        <div className="py-md-5">
                            <div className="row justify-content-start pb-3">
                                <div className="col-md-12 heading-section fadeInUp ftco-animated p-4 p-lg-5">
                                    <h2 className="mb-4">We Are <span>Mediplus</span> A Medical Clinic</h2>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    <p><a href="#" className="btn btn-primary py-3 px-4">Make an appointment</a> <a href="#" className="btn btn-secondary py-3 px-4">Contact us</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default Aboutsection;    