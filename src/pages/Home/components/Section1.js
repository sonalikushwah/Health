import React from "react";
import Image from '../../../Images/bg_3.jpg';
const Section1 = () => {
    return (<>
        <section className="hero-wrap js-fullheight" style={{backgroundImage: `url(${Image})` }} data-section="home" data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true" >
                    <div className="col-md-6 pt-5 fadeInUp ftco-animated">
                        <div className="mt-5">
                            <span className="subheading">Welcome to Mediplus</span>
                            <h1 className="mb-4">We are here <br></br>for your Care</h1>
                            <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                            <p><a href="#" className="btn btn-primary py-3 px-4">Make an appointment</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}
export default Section1;