import React from "react";
import UserNav from "../components/UserNav";
import Image1 from "../../../Images/profile.png";
import Image2 from "../../../Images/profilebacks2.jpg";
import { useState } from "react";
import { Link, Route } from "react-router-dom";
import Tab from "../../../Component/Tab";
import ProfileUpdate from "./Components/ProfileUpdate";
import ChangePassword from "./Components/ChangePassword";
import Prescription from "./Components/Prescription";
import Howtobook from "./Components/Howtobook";
import MedicalRecords from "./Components/MedicalRecords";
import Reminders from "./Components/Reminders";
import InsuranceDetails from "./Components/InsuranceDetails";
import Mypayments from "./Components/Mypayments";
import Offers from "./Components/Offers";
import Home from "../../Home/Home";
import Deleteaccount from "./Components/Deleteaccount";
import MediaQuery from "react-responsive";
import ResponsiveUserprofile from "./Components/ResponsiveUserprofile";
const Profile = () => {
  const [id, setId] = useState("1");
  const handleChange = (n) => {
    switch (n) {
      case 1:
        setId("1");
        break;
      case 2:
        setId("2");
        break;
      case 3:
        setId("3");
        break;
      case 4:
        setId("4");
        break;
      case 5:
        setId("5");
        break;
      case 6:
        setId("6");
        break;
      case 7:
        setId("7");
        break;
      case 8:
        setId("8");
        break;
      case 9:
        setId("9");
        break;
      case 10:
        setId("10");
        break;
      case 11:
        setId("11");
        break;
      case 12:
        setId("12");
        break;
      case 13:
        setId("13");
        break;
      case 14:
        setId("14");
        break;
      case 15:
        setId("15");
        break;
      default:
        setId("1");
    }
  };
  return (
    <>
      <UserNav />
      <div className="member-wrap profileback">
        <div className="container member-avatar">
          <img
            _ngcontent-nuh-c28=""
            id="member_avatar"
            src={Image1}
            alt="Member Avatar"
          />
          <p style={{ color: "black" }}>User_Name</p>
          {/* <p>.</p> */}
        </div>
      </div>
      <div
        className="pages"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          borderRadius: "10px",
        }}
      >
        <div className="container">
          <div className="rows" style={{ padding: "10px", paddingTop: "25px" }}>
            <div className="listBlock">
              <MediaQuery query="(max-device-width: 768px)">
                <ResponsiveUserprofile />
              </MediaQuery>
              <div className="shows">
                <div
                  className="col-md-4 col-sm-4"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    marginRight: "4%",
                    borderRadius: "10px",
                  }}
                >
                  <ul
                    className="profileSlidebar"
                    style={{ padding: "26px 0px 10px" }}
                  >
                    <li>
                      <Link
                        onClick={() => handleChange(1)}
                        className={`${id == 1 ? "active" : ""}`}
                      >
                        <Tab name="Profile" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => handleChange(2)}
                        className={`${id == 2 ? "active" : ""}`}
                      >
                        <Tab name="Prescription Details" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => handleChange(3)}
                        className={`${id == 3 ? "active" : ""}`}
                      >
                        <Tab name="How to book Appointment" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => handleChange(4)}
                        className={`${id == 4 ? "active" : ""}`}
                      >
                        <Tab name="Medical Records" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => handleChange(5)}
                        className={`${id == 5 ? "active" : ""}`}
                      >
                        <Tab name="Reminders" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => handleChange(6)}
                        className={`${id == 6 ? "active" : ""}`}
                      >
                        <Tab name="Insurance Details" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => handleChange(7)}
                        className={`${id == 7 ? "active" : ""}`}
                      >
                        <Tab name="My Payments" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => handleChange(8)}
                        className={`${id == 8 ? "active" : ""}`}
                      >
                        <Tab name="Change Password" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => handleChange(9)}
                        className={`${id == 9 ? "active" : ""}`}
                      >
                        <Tab name="Offers" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        onClick={() => handleChange(10)}
                        className={`${id == 10 ? "active" : ""}`}
                      >
                        <Tab name="Logout" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => handleChange(11)}
                        className={`${id == 11 ? "active" : ""}`}
                      >
                        <Tab name="Delete Account" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="shows">
                <div
                  className="col-md-7 col-sm-8"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    borderRadius: "10px",
                  }}
                >
                  {id == 1 ? <ProfileUpdate /> : null}
                  {id == 2 ? <Prescription /> : null}
                  {id == 3 ? <Howtobook /> : null}
                  {id == 4 ? <MedicalRecords /> : null}
                  {id == 5 ? <Reminders /> : null}
                  {id == 6 ? <InsuranceDetails /> : null}
                  {id == 7 ? <Mypayments /> : null}
                  {id == 8 ? <ChangePassword /> : null}
                  {id == 9 ? <Offers /> : null}
                  {id == 11 ? <Deleteaccount /> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
