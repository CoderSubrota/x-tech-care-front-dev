import { FiMessageSquare } from "react-icons/fi";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { AiOutlineTransaction } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { CiHome } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import logo from "../images/TestLogo.png" ;
const Navbar = () => {
  return (
    <>
      <div classNameName="navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
          <div className="container-fluid">
            <a className="navbar-brand fs-2 d-none  d-lg-block" href="/">
              <img src={logo} alt="logo" className="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <CiHome className="mx-2"></CiHome>
                    Overview
                  </a>
                </li>
                <li className="nav-item patientsLink">
                  <a className="nav-link " href="/">
                    <BsPeopleFill className="mx-2"></BsPeopleFill>
                    Patients
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <RiCalendarScheduleFill className="mx-2" />
                    Schedule
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <FiMessageSquare className="mx-2" />
                    Message
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <AiOutlineTransaction className="mx-2"></AiOutlineTransaction>
                    Transactions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* user profile information and settings */}
          <div className="container w-50">
            <div className="row">
              <div className="col-10">
                <div className="container">
                  <div className="row d-none  d-lg-block">
                   <div className="col  d-flex">
                   <div className="col-4">
                        <img src="https://i.ibb.co.com/gmXDGJK/kalla.png" alt="user profile picture"  className="navProfile"/>
                    </div>
                    <div className="col-8">
                        <p className="text-muted">Dr. Jose Simmons</p>
                        <p className="text-muted">General Practitioner</p>
                    </div>
                   </div>
                  </div>
                </div>
              </div>
              <div className="col-2 mt-2">
                <div className="container">
                  <div className="row d-none  d-lg-block">
                      <div className="col d-flex justify-content-center">
                      <div className="col"><IoSettings className="fs-4 mx-2"/></div>
                      <div className="col"><HiDotsVertical  className="fs-4 mx-2"/></div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
