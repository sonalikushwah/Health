import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const UserNav = () => {
    
	
    const [navClass, setNavClass] = useState();
    
    function stickNavbar() {
        let windowHeight = window.scrollY;
        windowHeight > 500 ? setNavClass("scrolled awake") : setNavClass("");
    }
    
    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
    }, []);
    return (<>
        <div className="py-1 bg-black top">
            <div className="container">
                <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                    <div className="col-lg-12 d-block">
                        <div className="row d-flex">
                            <div className="col-md pr-4 d-flex topper align-items-center">
                                <div className="icon mr-2 d-flex justify-content-center align-items-center"><i className="fa-solid fa-phone"></i></div>
                                <span className="text">+ 1235 2355 98</span>
                            </div>
                            <div className="col-md pr-4 d-flex topper align-items-center">
                                <div className="icon mr-2 d-flex justify-content-center align-items-center"><i className="fa-solid fa-paper-plane"></i></div>
                                <span className="text">youremail@email.com</span>
                            </div>
                            <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right justify-content-end">
                                <p className="mb-0 register-link"><Link title="Logout" to="/" className="mr-3 open-login " >Logout</Link>
                                {/* {isopen ? <Login/> : ""} */}
                                {/* <a href="#" >Sign In</a> */}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target ${navClass}`} id="ftco-navbar">
            <div className="container">
                <a className="navbar-brand" href="index.html">Health+</a>
                <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav nav ml-auto">
                        <li className="nav-item">
                            <Link to="/user/dashboard" class="nav-link"><span>Dashboard</span></Link>
                        </li>
                        <li className="nav-item"><Link to="/user/healthtips" class="nav-link"><span>Health Tips</span></Link></li>
                        <li className="nav-item"><Link to="/user/hospitals" class="nav-link"><span>Hospitals</span></Link></li>
                        <li className="nav-item"><Link to="/user/doctors" class="nav-link"><span>Doctors</span></Link></li>
                        <li className="nav-item"><Link to="/user/myappointment" class="nav-link"><span>My Appointments</span></Link></li>
                        <li className="nav-item"><Link to="/user/notifications" class="nav-link"><span>Notification</span></Link></li>
                        <li className="nav-item"><Link to="/user/support" class="nav-link" ><span>Support</span></Link></li>
                        {/* <li className="nav-item"><a href="#" class="nav-link" ><span></span></Link></li> */}
                        <li className="nav-item cta mr-md-2"><Link to="/user/profile" class="nav-link"> Profile</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

        {/* <div class="member-menu">
					<div class="container">
						<ul>
							<li class="active"><a href="owner-dashboard.html">Dashboard</a></li>
							<li><a href="owner-bookings.html">Health Tips</a></li>
							<li><a href="owner-listings.html">Doctors</a></li>
							<li><a href="owner-wishlist.html">My Appointments</a></li>
							<li><a href="owner-profile.html">Hospitals</a></li>
							<li><a href="owner-profile.html">Notifications</a></li>
							<li><a href="">Support</a></li>
							<li><a href="">Profile</a></li>
						</ul>
					</div>
				</div> */}
         </>)
}
export default UserNav;