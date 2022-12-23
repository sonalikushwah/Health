import React from "react";
import Footerimg from "../Images/footer-bg.jpg";
const Arrow=()=>{
    return(<>
        <i className="fa-solid fa-arrow-right-long mr-2"></i>
    </>)
}
const Footer = () => {
    return (<>
        <footer className="ftco-footer ftco-section img" style={{backgroundImage: `url(${Footerimg})`}}>
            <div className="overlay"></div>
            <div className="container-fluid px-md-5">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Mediplus</h2>
                            <p>Far far away, behind the word mountains, far from the countries.</p>
                            <ul className="ftco-footer-social list-unstyled mt-5">
                                <li className="ftco-animated"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li className="ftco-animated"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li className="ftco-animated"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4 ml-md-4">
                            <h2 className="ftco-heading-2">Departments</h2>
                            <ul className="list-unstyled">
                                <li><a href="#"><Arrow/>Neurology</a></li>
                                <li><a href="#"><Arrow/>Opthalmology</a></li>
                                <li><a href="#"><Arrow/> Magnetic</a></li>
                                <li><a href="#"><Arrow/>Surgical</a></li>
                                <li><a href="#"><Arrow/>Cardiology</a></li>
                                <li><a href="#"><Arrow/>Dental</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4 ml-md-4">
                            <h2 className="ftco-heading-2">Links</h2>
                            <ul className="list-unstyled">
                                <li><a href="#"><Arrow/>Home</a></li>
                                <li><a href="#"><Arrow/>About</a></li>
                                <li><a href="#"><Arrow/>Departments</a></li>
                                <li><a href="#"><Arrow/>Doctors</a></li>
                                <li><a href="#"><Arrow/>Blog</a></li>
                                <li><a href="#"><Arrow/>Pricing</a></li>
                                <li><a href="#"><Arrow/>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Services</h2>
                            <ul className="list-unstyled">
                                <li><a href="#"><Arrow/>Emergency Services</a></li>
                                <li><a href="#"><Arrow/>Qualified Doctors</a></li>
                                <li><a href="#"><Arrow/>Outdoors Checkup</a></li>
                                <li><a href="#"><Arrow/>24 Hours Services</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Have a Questions?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><i className="fa-solid fa-location-dot"></i><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                                    <li><a href="#"><i className="fa-sharp fa-solid fa-phone"></i><span className="text">+2 392 3929 210</span></a></li>
                                    <li><a href="#"><i className="fa-solid fa-envelope pr-4"></i><span className="text">info@yourdomain.com</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>
                            Copyright &copy;<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa-sharp fa-solid fa-heart"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </>)
}
export default Footer;