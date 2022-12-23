import React from "react";
import Image from "../../../Images/bg_3.jpg";
const Contents = [
    {
        id:1,
        number:"30",
        data:"Years of Experienced",
    },
    {
        id:2,
        number:"4500",
        data:"Happy Patients",
    },
    {
        id:3,
        number:"84",
        data:"Number of Doctors",
    },
    {
        id:4,
        number:"300",
        data:"Number of Staffs",
    }
]
const Card = (props) => {
    return (<>
        <div className="col-md-6 d-flex justify-content-center counter-wrap ftco-animated">
            <div className="block-18">
                <div className="text">
                    <strong className="number" data-number={props.number}>{props.number}</strong>
                    <span>{props.data}</span>
                </div>
            </div>
        </div>
    </>)
}
const Facts = () => {
    return (<>
        <section className="ftco-facts img ftco-counter" style={{ backgroundImage: `url(${Image})` }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-5 heading-section heading-section-white">
                        <span className="subheading">Fun facts</span>
                        <h2 className="mb-4">Over 5,100 patients trust us</h2>
                        <p className="mb-0"><a href="#" className="btn btn-secondary px-4 py-3">Make an appointment</a></p>
                    </div>
                    <div className="col-md-7">
                        <div className="row pt-4">
                            {Contents.map((content,index)=>{
                                return(<>
                                <Card key={index}
                                number={content.number}
                                data={content.data}/>
                                </>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default Facts;