import React, { useState } from "react";
import Image from "../../../Images/pharmacy.png";
import Image2 from "../../../Images/microscope.png";
import Image1 from "../../../Images/hospital.png";
import Image3 from "../../../Images/telemed.png";
import Image4 from "../../../Images/doctor.jpg";
import Image5 from "../../../Images/doctoronduty.png";

const Card = (props) => {
    return (<>
        <div className="items" >
            <div className="testimony-wrap text-center">
                <div className="user-image" style={{  backgroundImage: `url(${props.img})`  }}>
                {/* <i class="fa-duotone fa-hospital"></i> */}
                </div>
                <div className="text px-4">
                    <p className="name_c">{props.name}</p>
                </div>
            </div>
        </div>
    </>)
}
const UserCategories = () => {
    return (<>
        <div className="container">
            <div className="row ftco-animated justify-content-center">
                <div className="col-md-12 divide" >
                <Card name="Pharmacy" img={Image}  />
                <Card name = "Lab and Diagnostic" img={Image2}/>
                <Card name = "Hospitals" img={Image1}/>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <div className="container">
            <div className="row ftco-animated justify-content-center">
                <div className="col-md-12 divide">
                <Card name="Telemed    " img={Image3}  />
                <Card name = "Doctor at Home" img={Image4}/>
                <Card name = "Doctor on Duty" img={Image5}/>
                </div>
            </div>
        </div>
    </>)
}
export default UserCategories;