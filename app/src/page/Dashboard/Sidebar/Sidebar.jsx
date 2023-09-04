import React from 'react';
import { BiSolidDashboard , BiUser} from "react-icons/bi";
import { FaChalkboardTeacher, FaUserCircle } from "react-icons/fa";
import 'bootstrap/js/dist/dropdown';
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
     <>
       <div className="container-fluid z-index-1">
          <div className="row">
            <div className="bg-dark col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
              <div>
                <Link to='/dashboard' className="text-decoration-none d-none d-sm-inline d-flex text-white aling-items-center">
                  <i className="bi"></i>
                  <span className="ms-1 mt-3 fs-4 d-none d-sm-inline">Sonrisas</span>
                </Link>
                <hr className='text-secondary d-none d-sm-block' />
                <ul className='nav nav-pills flex-column mt-3 mt-sm-0'>
                  <li className="nav-item text-white fs-6 my-1 py-4 py-sm-0">
                    <Link to="/dashboard" className="nav-link text-white">
                      <BiSolidDashboard/>
                      <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                    </Link>
                  </li>
                  <li className="nav-item text-white fs-6 my-1 py-4 py-sm-0">
                    <a href="" className="nav-link text-white">
                      <BiUser/>
                      <span className="ms-2 d-none d-sm-inline">Users</span>
                    </a>
                  </li>
                  <li className="nav-item text-white fs-6 my-1 py-4 py-sm-0">
                    <a href="" className="nav-link text-white">
                      <FaChalkboardTeacher/>
                      <span className="ms-2 d-none d-sm-inline">Teachers</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown open">
                <a className="text-decoration-none text-white dropdown-toggle p-3" type="button" id='triggerId' data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FaUserCircle /><span className='ms-3 d-none d-sm-inline'>MyUser</span>
                </a>
                <div className="dropdown-menu" aria-labelledby='triggerId'>
                  <a href="" className="dropdown-item">Profile</a>
                  <a href="" className="dropdown-item">Settings</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Sidebar