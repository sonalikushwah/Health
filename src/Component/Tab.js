import React from "react";
const Tab = (props)=>{
    return(<>
    <div className="tabrows">
                <div className="tabcols">
                    <p>{props.name}</p></div>
                <div className="tabcols arrow">
                <i class="fa-solid fa-arrow-right"></i></div>
            </div>
    </>)
}
export default Tab;