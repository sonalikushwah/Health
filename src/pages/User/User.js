import React from "react";
import UserNav from "./components/UserNav";
import "./css/style2.css";
import "./css/responsive.css";
import UserCategories from "./components/UserCategories";
import UserDoctors from "./components/UserDoctors";
import UserBlog from "./components/UserBlog";
import UserHealthTip from "./components/UserHealthTips";
const User = ()=>{
    return(<>
    <UserNav/>
    {/* <div class="container">
    <div class="member-wrap-top">
    <h2>Welcome back! Rubby</h2>
    </div>
    </div> */}
    {/* <br></br> */}
    {/* <br></br> */}
    <div className="page" style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px", borderRadius: "10px" }}>
    <br></br>
    <UserCategories/>
    <UserDoctors/>
    <UserBlog/>
    <UserHealthTip/>
    </div>
    </>)
}
export default User;
