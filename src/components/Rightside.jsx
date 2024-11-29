import { SlCalender } from "react-icons/sl";
import { FaTransgenderAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";

const Rightside = (data) => {
  const labdata = data?.data?.lab_results;
  console.log(data) ;
  return (
    <>
      <div className="rightside">
        <div className="rightProfileInfo">
          <img
            src={
              data?.data?.profile_picture
                ? data?.data?.profile_picture
                : "https://i.ibb.co.com/y08d4vM/jes.jpg"
            }
            className="rightProfilePic"
            alt="profile"
            srcset=""
          />
          <p className="fs-5 my-3 ms-2">
            {" "}
            {data?.data?.name ? data?.data?.name : "Jessica Tylor"}{" "}
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-4">
              <p>
                <SlCalender className="mt-3"></SlCalender>
              </p>
            </div>
            <div className="col-8">
              <p> Date of birth</p>
              <p>
                {data?.data?.date_of_birth
                  ? data?.data?.date_of_birth
                  : "August, 23, 1996"}{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-4">
              <p>
                <FaTransgenderAlt className="mt-3"></FaTransgenderAlt>
              </p>
            </div>
            <div className="col-8">
              <p> Gender</p>
              <p>{data?.data?.gender ? data?.data?.gender : "Female"} </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-4">
              <p>
                <FaPhoneAlt className="mt-3"></FaPhoneAlt>
              </p>
            </div>
            <div className="col-8">
              <p>Contact info</p>
              <p>
                {data?.data?.phone_number
                  ? data?.data?.phone_number
                  : "(415) 555-1234"}{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-4">
              <p>
                <FaPhoneAlt className="mt-3"></FaPhoneAlt>
              </p>
            </div>
            <div className="col-8">
              <p>Emergency contact</p>
              <p>
                {data?.data?.emergency_contact
                  ? data?.data?.emergency_contact
                  : "(415) 555-5678"}{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-4">
              <p>
                <AiOutlineSafety className="mt-3"></AiOutlineSafety>
              </p>
            </div>
            <div className="col-8">
              <p>Insurance type</p>

              <p>
                {data?.data?.insurance_type
                  ? data?.data?.insurance_type
                  : "Sunrise Health Insurance"}{" "}
              </p>
            </div>
          </div>
        </div>

        <h2 className="my-4">Lab Result</h2>

        <div className="labResult">
          {labdata?.map((item, idx) => {
            return (
              <>
                <div key={idx} className="d-flex justify-content-between my-3">
                  <div>
                    <p>{item ? item : "Blood Tests"}</p>
                  </div>
                  <div>
                    <FaDownload></FaDownload>
                  </div>
                </div>
              </>
            );
          })}

          {labdata === undefined && (
            <>
              {[1, 2, 3, 1, 2, 1, 2, 1, 2].map((item) => {
                return (
                  <>
                    <div className="d-flex justify-content-between my-3">
                      <div>
                        <p>Blood Tests {item}</p>
                      </div>
                      <div>
                        <FaDownload></FaDownload>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Rightside;
