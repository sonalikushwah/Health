import React, { useState } from "react";
import DoctorNav from "./Components/DoctorNav";
import SupportChat from "../../Component/SupportChat";
import "./css/responsive.css";
import "./css/style2.css";
const Contents = [
    {
        id: 1,
        title: "Dr. Lloyd Wilson",
        desc: "hiiii.... , Here is the best doctor, you can connect with me any time",
        className: "approved",
        status: "Done"
    },
    {
        id: 2,
        title: "Tomorrow schedule",
        desc: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
        className: "approved",
        status: "Done"
    },
    {
        id: 3,
        title: "How was this??",
        desc: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
        className: "pending",
        status: "Pending"
    },
    {
        id: 4,
        title: "hello JIMMI",
        desc: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
        className: "cancel",
        status: "Canceled"
    },
    {
        id: 5,
        title: "can i help you?",
        desc: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
        className: "approved",
        status: "Done"
    },
    {
        id: 6,
        title: "Dr. Lloyd Wilson",
        desc: "hiiii.... , Here is the best doctor, you can connect with me any time",
        className: "approved",
        status: "Done"
    }
]

const Supports = ()=>{
    const TableRow = (props) => {
        return (<>
            <tr>
                <td data-title="ID">{props.id}</td>
                <td data-title="Title"><b>{props.title}</b></td>
                <td data-title="Description">{props.desc}</td>
                <td data-title="Status" className={props.className}>{props.status}</td>
                <td data-title="Action" className="place-action">
                <a onClick={()=>togglepage(true)} className="view" title="View"><i class="fas fa-comment-dots"></i></a>
                </td>
            </tr>
        </>)
    }
    const[ open, setOpen] = useState(false);
    const togglepage = (state)=>{
        setOpen(state);
    }
    return(<>
    <DoctorNav/>
    <div className="page" style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px", borderRadius: "10px" }}>
     {open ? <SupportChat togglepage={togglepage}/>:<>
     <main id="main" className="site-main">
                <div className="site-content owner-content">
                    <div>
                        <div className="member-place-wrap">
                            <table className="member-place-list table-responsive">
                                <thead>
                                    <tr>
                                        <th>S.no.</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Contents.map((content) => {
                                        return (<>
                                            <TableRow
                                                id={content.id}
                                                title={content.title}
                                                desc={content.desc}
                                                className={content.className}
                                                status={content.status}
                                             />
                                        </>)
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
            <div className="pagination align-left">
            <div className="pagination__numbers">
            <span>1</span>
            <a title="2" href="#">2</a>
            <a title="3" href="#">3</a>
            <a title="Next" href="#">
            <i className="fa-sharp fa-solid fa-angle-right"></i>
            </a>
          </div>
          </div></>}
            </div>
    </>)
}
export default Supports;