import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Img from "../../../Images/bg_3.jpg";
import Image1 from "../../../Images/HealthTip1.jpg";
import Image2 from "../../../Images/HealthTip2.jpg";
import Image3 from "../../../Images/HealthTip3.jpg";
// import { useState, useEffect } from "react";
const UserHealthTip = () => {
    const Option = {
        autoplay: true,
        responsiveClass: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1024: {
                items: 3,
            }
        },
    };
    const Contents = [
        {
            id:1,
            img:Image1,
            para:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            name:"Jeff Freshman"
        },
        {
            id:1,
            img:Image2,
            para:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            name:"Jeff Freshman"
        },
        {
            id:1,
            img:Image3,
            para:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            name:"Jeff Freshman"
        },
        {
            id:1,
            img:Image1,
            para:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            name:"Jeff Freshman"
        },
        {
            id:1,
            img:Image3,
            para:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            name:"Jeff Freshman"
        }
    ]
    const Card = (props) => {
        return (<>
            <div className="item">
                <div className="testimony-wrap text-center py-4 pb-5">
                    <div className="user-img" style={{ backgroundImage: `url(${props.img})` }}>
                        {/* <span className="quote d-flex align-items-center justify-content-center">
                            <i className="fa-solid fa-quote-left"></i>
                        </span> */}
                    </div>
                    <div className="text px-4">
                        <p className="mb-4">{props.para}</p>
                        {/* <p className="name">{props.name}</p>
                        <span className="position">Patients</span> */}
                    </div>
                </div>
            </div>
        </>)
    }
    return (<>
        <section className="ftco-section testimony-section img" style={{ backgroundImage: `url(${Img})` }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row justify-content-center pb-3">
                    <div className="col-md-7 text-center heading-section heading-section-white ftco-animated">
                        {/* <span className="subheading">Read testimonials</span> */}
                        <h2 className="mb-4">Health Tips</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="hbutton" style={{ float:"right" }}>
                    <a href="#" className="btn btn-secondary">See All <i className="fa-solid fa-arrow-right"></i></a></div>
                </div>
                <div className="row ftco-animated justify-content-center">
                    <div className="col-md-12">
                        <OwlCarousel className='ftco-owl' loop margin={10} items={3} {...Option}  >
                            {Contents.map((content)=>{
                                return(<>
                                <Card img={content.img}
                                 name= {content.name}
                                 para= {content.para}/>
                                </>)
                            })}
                           </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default UserHealthTip;