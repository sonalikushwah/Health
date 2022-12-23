import React from "react";
import Image1 from "../../../../Images/offer1.jpg";
const Card = ()=>{
    return(<>
    <div style={{ padding: "10px" }}>
                <div>
                    <img src={Image1} alt="Offer" style={{ borderRadius : "5px" }}></img></div>
                    </div>
            {/* <hr></hr> */}
            <div>
                <div style={{ padding: "12px" }}>
            <p className="fntcolor">Get 10% off on your first appointment. Press Redeem now to get the offer.</p>
            </div>
            <div className="tabcols" style={{ textAlign : "center", display: "block" }}>
            <a href="#" class="btn btn-secondary">Redeem now</a>
            </div>
            </div>
    </>)
}
const Offers = ()=>{
    return(<>
    <div className="container">
        <ul className="profileSlidebar p-4">
        <li className="tabrowss" style={{ width: "45%" }}>
        <Card/>
        </li>
        <li className="tabrowss" style={{ width: "45%", float : "right"}}>
        <Card/>
        </li>
        <li className="tabrowss" style={{ width: "45%" }}>
            <Card/>
        </li>
        <li className="tabrowss" style={{ width: "45%", float : "right"}}>
        <Card/>
        </li>
        </ul>
    </div>
    </>)
}
export default Offers;