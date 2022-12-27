import React from "react";
import UserNav from "./components/UserNav";
import Image1 from "../../Images/HealthTip1.jpg";
import Image2 from "../../Images/HealthTip2.jpg";
import Image3 from "../../Images/HealthTip3.jpg";
import Image4 from "../../Images/HealthTip4.jpg";
import "./css/style2.css";
import "./css/responsive.css";
const HealthTips = () => {
  const Card = (props) => {
    return (
      <>
        <div
          className="slick-slide"
          style={{ margin: "10px" }}
          class="testimonial-slider layout-02  slick-initialized slick-slider slick-dotted"
        >
          <div>
            <div
              _ngcontent-kvm-c19=""
              className="testimonial-item"
              style={{ display: "inline-block" }}
            >
              <div _ngcontent-kvm-c19="" className="avatar">
                <img _ngcontent-kvm-c19="" src={props.img} alt="Avatar" />
                {/* <img _ngcontent-kvm-c19="" src="../../assets/images/assets/quote-active.png" alt="Quote" className="quote" /> */}
              </div>
              <div _ngcontent-kvm-c19="" className="testimonial-info">
                <div _ngcontent-kvm-c19="" className="testimonial-meta">
                  <b _ngcontent-kvm-c19="">{props.title}</b>
                  {/* <span _ngcontent-kvm-c19="">CEO Alididi</span> */}
                </div>
                <p _ngcontent-kvm-c19="">{props.content}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <UserNav />
      <div
        className="page"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          borderRadius: "10px",
        }}
      >
        <br></br>
        <div className="health_block">
          <Card
            img={Image1}
            title="Heart Care"
            content="Really useful app to find interesting things to see do, drink and eat in new places. I’ve been using it regularly in my travels over the past few months."
          />
          <Card
            img={Image2}
            title="Eat Healthy"
            content="Really useful app to find interesting things to see do, drink and eat in new places. I’ve been using it regularly in my travels over the past few months."
          />
        </div>
        <br></br>

        <div className="health_block">
          <Card
            img={Image3}
            title="Need This"
            content="Really useful app to find interesting things to see do, drink and eat in new places. I’ve been using it regularly in my travels over the past few months."
          />
          <Card
            img={Image4}
            title="A Apple Daily"
            content="Really useful app to find interesting things to see do, drink and eat in new places. I’ve been using it regularly in my travels over the past few months."
          />
        </div>
        <div className="pagination align-center">
          <div className="pagination__numbers">
            <span>1</span>
            <a title="2" href="#">
              2
            </a>
            <a title="3" href="#">
              3
            </a>
            <a title="Next" href="#">
              <i className="fa-sharp fa-solid fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default HealthTips;
