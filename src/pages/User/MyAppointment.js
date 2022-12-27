import React, { useState } from "react";
import UserNav from "./components/UserNav";
const Contents = [
  {
    id: 1,
    name: "Dr. Lloyd Wilson",
    address:
      "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
    time: "12:00 a.m.",
    className: "approved",
    status: "Done",
  },
  {
    id: 2,
    name: "Dr. Alicia",
    address:
      "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
    time: "12:00 a.m.",
    className: "approved",
    status: "Done",
  },
  {
    id: 3,
    name: "Dr. Rachel Parker",
    address:
      "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
    time: "12:00 a.m.",
    className: "cancel",
    status: "Canceled",
  },
  {
    id: 4,
    name: "Dr. Lloyd Wilson",
    address:
      "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
    time: "12:00 a.m.",
    className: "approved",
    status: "Done",
  },
  {
    id: 5,
    name: "Dr. Ian Smith",
    address:
      "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
    time: "12:00 a.m.",
    className: "pending",
    status: "Upcoming",
  },
];
const TableRow = (props) => {
  return (
    <>
      <tr>
        <td data-title="ID">{props.id}</td>
        {/* <td data-title="Thumb"><img src="" alt="Place Thumb"/></td> */}
        <td data-title="Name">
          <b>{props.name}</b>
        </td>
        <td data-title="Address">{props.address}</td>
        <td data-title="Time">{props.time}</td>
        <td data-title="Status" className={props.className}>
          {props.status}
        </td>
        <td data-title="Action  " className="place-action">
          {/* <a href="#" className="edit" title="Edit"><i className="las la-edit"></i></a> */}
          <a href="#" className="view" title="View">
            <i className="fa-solid fa-eye"></i>
          </a>
          <a href="#" className="delete" title="Delete">
            <i className="fa-solid fa-trash"></i>
          </a>
        </td>
      </tr>
    </>
  );
};
const MyAppintment = () => {
  const [id, setId] = useState(true);
  const toggleContent = () => {
    setId(false);
  };
  const toggleContentagain = () => {
    setId(true);
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
        <div>
          <nav>
            <div
              className="nav nav-tabs nav-fill"
              id="nav-tab"
              role="tablist"
              style={{ justifyContent: "center" }}
            >
              <a
                class="nav-item nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="nav-home"
                onClick={toggleContentagain}
              >
                Upcoming
              </a>
              <a
                class="nav-item nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="nav-profile"
                onClick={toggleContent}
              >
                Previous
              </a>
              {/* <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Project Tab 3</a> */}
            </div>
          </nav>
        </div>
        {id ? (
          <main id="main" className="site-main">
            <div className="site-content owner-content">
              <div className="container">
                <div className="member-place-wrap">
                  <table className="member-place-list table-responsive">
                    <thead>
                      <tr>
                        <th>S.no.</th>
                        <th>Doctor Name</th>
                        <th>Address</th>
                        <th>Time Schedule</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Contents.map((content) => {
                        return (
                          <>
                            <TableRow
                              id={content.id}
                              name={content.name}
                              address={content.address}
                              time={content.time}
                              className={content.className}
                              status={content.status}
                            />
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        ) : (
          <main id="main" className="site-main">
            <div className="site-content owner-content">
              <div className="container">
                <div className="member-place-wrap">
                  <table className="member-place-list table-responsive">
                    <thead>
                      <tr>
                        <th>S.no.</th>
                        <th>Doctors Name</th>
                        <th>Address</th>
                        <th>Time Schedule</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Contents.map((content) => {
                        return (
                          <>
                            <TableRow
                              id={content.id}
                              name={content.name}
                              address={content.address}
                              time={content.time}
                              className={content.className}
                              status={content.status}
                            />
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        )}
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
export default MyAppintment;
