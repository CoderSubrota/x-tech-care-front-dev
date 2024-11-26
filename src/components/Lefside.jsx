import React from "react";
import data from "../data";
import { IoMdSearch } from "react-icons/io";

const Leftside = () => {
  return (
    <div className="Leftside  d-md-w-full">
      <div className="d-flex  justify-content-between p-3">
        <h3>Patients</h3>
        <h3>
          <IoMdSearch />{" "}
        </h3>
      </div>
      <div className="container">
        {data.map((item, index) => {
          return (
            <div
              key={item.id || index} // Use a unique identifier if available
              className="row border rounded shadow-sm position-relative my-2 pb-2 leftSideCard"
              style={{ height: "100px" }}
            >
              {/* Profile Section */}
              <div className="col-10">
                <div className="d-flex align-items-center p-3">
                  <img
                    src={
                      item.profile_picture ||
                      "https://i.ibb.co/9GZ5sPX/cute-dog-does-zen-poses-yoga-in-forest-by-fatalbunnie-dikak7n-350t.jpg"
                    } // Use dynamic image if available
                    alt="profile"
                    className="leftProfilePic rounded-circle"
                    style={{ width: "80px", height: "80px" }} // Set a fixed size for the profile picture
                  />
                  <div className="ms-3">
                    <h5 className="mb-0">{item.name || "David"}</h5>
                    <p className="mb-0 text-muted d-flex">
                      {item.gender || "Female"}, {item.age || 25}
                    </p>
                  </div>
                </div>
              </div>

              {/* Placeholder Section */}
              <div className="col-2">
                <div className="position-absolute top-0 end-0 p-2">
                  <h1 className="text-muted" style={{ fontSize: "2rem" }}>
                    ...
                  </h1>{" "}
                  {/* Ellipsis in top right corner */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leftside;
