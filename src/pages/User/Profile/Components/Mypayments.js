import React from "react";
const Mypayments = ()=>{
    return(<>
    <ul className="profileSlidebar p-4">
        <li className="tabrowss">
        <div style={{ display: "inline" }}>
                <div className="tabcols">
                    <h4>Payment id #1234</h4></div>
                <div className="tabcols" style={{ float: "right" }} >
                    <h4><i className="fa fa-inr"></i>1000</h4></div></div>
            <hr></hr>
            <div style={{ display: "inline" }}>
                <div className="tabcols">
            <p className="fntcolor">Dr. Rachel Parker</p>
            </div>
            <div className="tabcols" style={{ float: "right" }} >
            <a href="#" class="btn btn-secondary">Unpaid</a>
            </div>
            </div>
        </li>
        <li className="tabrowss">
        <div style={{ display: "inline" }}>
                <div className="tabcols">
                    <h4>Payment id #1234</h4></div>
                <div className="tabcols" style={{ float: "right" }} >
                    <h4><i className="fa fa-inr"></i>500</h4></div></div>
            <hr></hr>
            <div style={{ display: "inline" }}>
                <div className="tabcols">
            <p className="fntcolor">Dr. Alias</p>
            </div>
            <div className="tabcols" style={{ float: "right" }} >
            <a href="#" class="btn btn-secondary">Unpaid</a>
            </div>
            </div>
        </li>
        <li className="tabrowss">
        <div style={{ display: "inline" }}>
                <div className="tabcols">
                    <h4>Payment id #1234</h4></div>
                <div className="tabcols" style={{ float: "right" }} >
                    <h4><i className="fa fa-inr"></i>2000</h4></div></div>
            <hr></hr>
            <div style={{ display: "inline" }}>
                <div className="tabcols">
            <p className="fntcolor">Dr. Enna</p>
            </div>
            <div className="tabcols" style={{ float: "right" }} >
            <a href="#" class="btn btn-secondary">Unpaid</a>
            </div>
            </div>
        </li>
     </ul>
    </>)
}
export default Mypayments;