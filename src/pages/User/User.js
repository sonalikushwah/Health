import React from "react";
import UserNav from "./components/UserNav";
import "./css/style2.css";
import "./css/responsive.css";
import UserCategories from "./components/UserCategories";
import UserDoctors from "./components/UserDoctors";
import UserBlog from "./components/UserBlog";
import UserHealthTip from "./components/UserHealthTips";
import Image from "../../Images/DoctorSearchbar2.jpg";
const User = () => {
  return (
    <>
      <UserNav />
      {/* <div class="container">
    <div class="member-wrap-top">
    <h2>Welcome back! Rubby</h2>
    </div>
    </div> */}
      <section
        className="hero-wrap js-fullheight"
        style={{
          backgroundImage: `url(${Image})`,
          // backgroundColor: `rgba(0, 0, 0, 0.5)`,
          //   filter: "blur(8px)",
        }}
        data-section="home"
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container" style={{}}>
          <div
            className="row no-gutters slider-text js-fullheight align-items-center justify-content-center"
            data-scrollax-parent="true"
          >
            <div className="col-md-8 pt-5 fadeInUp ftco-animated ">
              <div className="mt-5 overlay-bg" style={{ textAlign: "center" }}>
                <h2 className="mb-4">Search Your favourite Doctor Here</h2>
                <div class="input-group mb-3">
                  <div className="search-option">
                    <form>
                      <input
                        style={{ borderRadius: "30px" }}
                        type="text"
                        class="form-control"
                        placeholder="Search Your favourite Doctor Here"
                        id="searchbar"
                      />

                      <span class="input-group-text input-group-append">
                        <i class="fa fa-search"></i>
                      </span>
                    </form>
                  </div>
                </div>
                <p className="mb-4">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          borderRadius: "10px",
          margin: "80px 80px",
        }}
        className="pages"
      >
        <br></br>
        <UserCategories />
        <UserDoctors />
        <UserBlog />
        <UserHealthTip />
      </div>
    </>
  );
};
export default User;
