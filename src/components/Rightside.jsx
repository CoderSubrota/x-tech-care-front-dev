import { SlCalender } from "react-icons/sl";
import { FaTransgenderAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";

const Rightside = () => {
  return (
    <>
      <div className="rightside">
      <div className="rightProfileInfo">
      <img
          src="https://i.ibb.co.com/y08d4vM/jes.jpg"
          className="rightProfilePic"
          alt="profile"
          srcset=""
        />
        <p className="fs-3"> Jessica Tylor </p>
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
              <p>August, 23, 1996</p>
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
              <p>Female</p>
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
              <p>(415) 555-1234</p>
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
              <p>(415) 555-5678</p>
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
              <p>Insurance provider</p>
              <p>Sunrise Health Insurance</p>
            </div>
          </div>
        </div>

        
      <h2 className="my-4">Lab Result</h2>

      <div className="labResult">
      <div className="d-flex justify-content-between my-3">
        <div>
          <p>Blood Tests</p>
        </div>
        <div>
          <FaDownload></FaDownload>
        </div>
      </div>

      <div className="d-flex justify-content-between my-3">
        <div>
          <p>CT Scan</p>
        </div>
        <div>
          <FaDownload></FaDownload>
        </div>
      </div>
      <div className="d-flex justify-content-between my-3">
        <div>
          <p>X-Rays</p>
        </div>
        <div>
          <FaDownload></FaDownload>
        </div>
      </div>
      <div className="d-flex justify-content-between my-3">
        <div>
          <p>Urine Tests</p>
        </div>
        <div>
          <FaDownload></FaDownload>
        </div>
      </div>
      <div className="d-flex justify-content-between my-3">
        <div>
          <p>Blood Tests</p>
        </div>
        <div>
          <FaDownload></FaDownload>
        </div>
      </div>
      <div className="d-flex justify-content-between my-3">
        <div>
          <p>Blood Tests</p>
        </div>
        <div>
          <FaDownload></FaDownload>
        </div>
      </div>
      <div className="d-flex justify-content-between my-3">
        <div>
          <p>Blood Tests</p>
        </div>
        <div>
          <FaDownload></FaDownload>
        </div>
      </div>
      <div className="d-flex justify-content-between my-3">
        <div>
          <p>Blood Tests</p>
        </div>
        <div>
          <FaDownload></FaDownload>
        </div>
      </div>
      <div className="d-flex justify-content-between my-3">
        <div>
          <p>Blood Tests</p>
        </div>
        <div>
          <FaDownload></FaDownload>
        </div>
      </div>
      <div className="d-flex justify-content-between my-3">
        <div>
          <p>Blood Tests</p>
        </div>
        <div>
          <FaDownload></FaDownload>
        </div>
      </div>
      </div>

      </div>

    </>
  );
};

export default Rightside;
