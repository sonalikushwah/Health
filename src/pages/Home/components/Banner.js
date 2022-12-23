import React from "react";
import Image from '../../../Images/bg_2.jpg';
const Banner = () => {
    return (<>
        <section className="ftco-intro img" style={{backgroundImage: `url(${Image})`}}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 text-center">
                        <h2>Your Health is Our Priority</h2>
                        <p>We can manage your dream building A small river named Duden flows by their place</p>
                        <p className="mb-0"><a href="#" className="btn btn-white px-4 py-3">Search Places</a></p>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default Banner;