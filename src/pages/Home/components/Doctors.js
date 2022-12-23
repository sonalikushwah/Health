import React from "react";
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
    }
]
const Card = (props) => {
    return (<>
        <div className="col-md-6 col-lg-3 ftco-animated fadeInUp">
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
    </>)
}
const Doctors = () => {
    return (<>
        <section className="ftco-section" id="doctor-section">
            <div className="container-fluid px-5">
                <div className="row justify-content-center mb-5 pb-2">
                    <div className="col-md-8 text-center heading-section ftco-animated fadeInUp">
                        <h2 className="mb-4">Our Qualified Doctors</h2>
                        <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                    </div>
                </div>
                <div className="row">
                    {Contents.map((content,index)=>{
                        return(<>
                        <Card key={index}
                        image={content.image}
                        name={content.name}
                        specialization={content.specialization}
                        desc={content.desc}/>
                        </>)
                    })}
                </div>
            </div>
        </section>
    </>)
}
export default Doctors;