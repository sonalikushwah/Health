import React from "react";
import "../../css/style2.css";
import "../../css/responsive.css";
import Image1 from "../../../../Images/upload.jpg";
const AddMedicalRecords = () => {
    return (<>
        <div className="appointment-wrap bg-white p-4 p-md-5 d-flex align-items-center">
            <form action="" className="appointment-form fadeInUp ftco-animated member-profile member-wrap">
                <h3>Medical Records</h3>
                <div className="member-avatar">
                <p>Please Upload your medical record image here</p>
                    {/* <img id="member_avatar" style={{width : "100px", height : "100px"}} src={Image1} alt="Member Avatar"/> */}
                        <label for="upload_new">
                        <img id="member_avatar" style={{width : "100px", height : "100px"}} src={Image1} alt="Member Avatar"/>
                            <input id="upload_new" type="file" name="member_avatar" placeholder="Upload new" value=""/>
                                 Upload
                        </label>
                </div>
                <div className="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <div className="icon"><span className="ion-md-calendar"></span></div>
                        <input type="text" className="form-control appointment_date" placeholder="Date" />
                    </div>
                    <div className="form-group">
                        <div className="icon"><span className="ion-md-calendar"></span></div>
                        <input type="text" className="form-control appointment_date" placeholder="Time" />
                    </div>
                    <div className="form-group">
                        <textarea name="" id="" cols="30" rows="2" className="form-control" placeholder="Reffered by"></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Records" className="btn btn-secondary py-3 px-4" />
                    </div>
                </div>
            </form>
        </div>
    </>)
}
export default AddMedicalRecords;