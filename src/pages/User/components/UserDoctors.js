import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image1 from "../../../Images/doc-1.jpg";
import Image2 from "../../../Images/doc-2.jpg";
import Image3 from "../../../Images/doc-3.jpg";
import Image4 from "../../../Images/doc-4.jpg";
const Contents = [
    {
        id:1,
        image:Image1,
        name:"Dr. Lloyd Wilson",
        specialization:"Neurologist",
        desc:"I am an ambitious workaholic, but apart from that, pretty simple person."
    },
    {
        id:2,
        image:Image2,
        name:"Dr. Rachel Parker",
        specialization:"Ophthalmologist",
        desc:"I am an ambitious workaholic, but apart from that, pretty simple person."
    },
    {
        id:3,
        image:Image3,
        name:"Dr. Ian Smith",
        specialization:"Dentist",
        desc:"I am an ambitious workaholic, but apart from that, pretty simple person."
    },
    {
        id:4,
        image:Image4,
        name:"Dr. Alicia Henderson",
        specialization:"Pediatrician",
        desc:"I am an ambitious workaholic, but apart from that, pretty simple person."
    },
    {
        id:5,
        image:Image1,
        name:"Dr. Lloyd Wilson",
        specialization:"Neurologist",
        desc:"I am an ambitious workaholic, but apart from that, pretty simple person."
    },
    {
        id:6,
        image:Image2,
        name:"Dr. Rachel Parker",
        specialization:"Ophthalmologist",
        desc:"I am an ambitious workaholic, but apart from that, pretty simple person."
    },
    {
        id:7,
        image:Image3,
        name:"Dr. Ian Smith",
        specialization:"Dentist",
        desc:"I am an ambitious workaholic, but apart from that, pretty simple person."
    },
    {
        id:8,
        image:Image4,
        name:"Dr. Alicia Henderson",
        specialization:"Pediatrician",
        desc:"I am an ambitious workaholic, but apart from that, pretty simple person."
    }
]
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

const Card = (props) => {
    return (<>
    <div className="item">
        <div className="ftco-animated fadeInUp">
            <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                    <div className="img align-self-stretch" style={{backgroundImage: `url(${props.image})`}}></div>
                </div>
                <div className="text pt-3 text-center">
                    <h3 className="mb-2">{props.name}</h3>
                    <span className="position mb-2">{props.specialization}</span>
                    <div className="faded">
                        <p>{props.desc}</p>
                        <ul className="ftco-social text-center">
                            <li className="ftco-animated"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                            <li className="ftco-animated"><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li className="ftco-animated"><a href="#"><i class="fa-brands fa-google-plus-g"></i></a></li>
                            <li className="ftco-animated"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                        <p><a href="#" className="btn btn-primary">Book now</a></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>)
}
const UserDoctors = () => {
    return (<>
        <section className="ftco-sections" id="doctor-section">
            <div className="container-fluid px-5">
                <div className="row justify-content-center mb-5 pb-2">
                    <div className="col-md-8 text-center heading-section ftco-animated fadeInUp">
                        <h2 className="mb-4">Doctors near you</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="dbutton" style={{ float:"right" }}>
                    <a href="#" className="btn btn-primary">See All <i className="fa-solid fa-arrow-right"></i></a></div>
                <div className="row">
                </div>
                
                <OwlCarousel className='ftco-owl' loop margin={10} items={4} {...Option}  >
                    {Contents.map((content,index)=>{
                        return(<>
                        <Card key={index}
                        image={content.image}
                        name={content.name}
                        specialization={content.specialization}
                        desc={content.desc}/>
                        </>)
                    })}
                    </OwlCarousel>
                </div>
            </div>
        </section>
    </>)
}
export default UserDoctors;