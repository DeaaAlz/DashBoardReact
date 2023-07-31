import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartLine,
    faGear,
    faUser,
    faDiagramProject,
    faGraduationCap,
    faUserGroup,
    faFile,
    faCreditCard,
    faBell,
} from "@fortawesome/free-solid-svg-icons";



import {showDiv} from '../Components/AllFunctions'
import "../Components/myFramework.css";
import "../Components/dashboard.css";
import avatar from "../imgs/avatar.png";
import activity1 from "../imgs/activity-01.png";
import activity2 from "../imgs/activity-02.png";
import activity3 from "../imgs/activity-03.png";


import { Link } from "react-router-dom";
import React from "react";

export default function Profile() {

  let userName="";
  let userEmail="";
  let userData =JSON.parse(localStorage.getItem("userData"));
  let isLogin=localStorage.getItem("isUserLogin");

  if(userData == null || isLogin == "false"){
    window.location.replace('Login');
  }
  if(new Date() >= new Date(userData.expire)){
    window.location.replace('Login');
  }
  
  userName = userData.name;
  userEmail = userData.email;

  const changeIsLogin=()=>{
    localStorage.setItem("isUserLogin", false);
  }


  return (
    <div class="page d-flex">
       <div class="sidebar bg-white p-relative p-20">
        <h3 class="p-relative txt-c mt-0">ElDhiaa</h3>
        <ul>
          <li>
            <Link
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/"
            >
              <FontAwesomeIcon icon={faChartLine} />
              <span class="hide-mobile">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/settings"
            >
              <FontAwesomeIcon icon={faGear} />
              <span class="hide-mobile">Settings</span>
            </Link>
          </li>
          <li>
            <Link
              class="active d-flex align-center fs-14 c-black rad-6 p-10"
              to="/profile"
            >
              <FontAwesomeIcon icon={faUser} />
              <span class="hide-mobile">Profile</span>
            </Link>
          </li>
          <li>
            <Link
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/projects"
            >
              <FontAwesomeIcon icon={faDiagramProject} />
              <span class="hide-mobile">Projects</span>
            </Link>
          </li>
          <li>
            <Link
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/courses"
            >
              <FontAwesomeIcon icon={faGraduationCap} />
              <span class="hide-mobile">Courses</span>
            </Link>
          </li>
          <li>
            <Link
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/friends"
            >
              <FontAwesomeIcon icon={faUserGroup} />
              <span class="hide-mobile">Friends</span>
            </Link>
          </li>
          <li>
            <Link
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/files"
            >
              <FontAwesomeIcon icon={faFile} />
              <span class="hide-mobile">Files</span>
            </Link>
          </li>
          <li>
            <Link
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/plans"
            >
              <FontAwesomeIcon icon={faCreditCard} />
              <span class="hide-mobile">Plans</span>
            </Link>
          </li>
        </ul>
      </div>
      <div class="content w-full">
          {/* <!-- start head --> */}
          <div class="head bg-white p-15 flex-between">
          <div class="search p-relative">
            <input class="p-10" type="search" placeholder="Type A Keyword" />
          </div>
          <div class="icons d-flex align-center">
            <span class="notification p-relative">
            <FontAwesomeIcon icon={faBell} />
            </span>
            <img src={avatar} alt="" onClick={showDiv}/>
            <div className="setting-div" id="setting-div">
                <img src={avatar}/>
                <span className="sp1">{userName}</span>
                <span className="sp2">{userEmail}</span>
                <ul>
                  <Link to={"/profile"}><li>My Profile</li></Link>
                  <a><li>Message</li></a>
                  <a><li>Activity</li></a>
                  <Link to={"/login"}><li onClick={changeIsLogin}>Sign Out</li></Link>
                </ul>
            </div>
          </div>
        </div>
          {/* <!-- end head --> */}
          <h1 class="p-relative">Profile</h1>
         <div class="profile-page m-20">
          <div class="overview bg-white rad-10 d-flex align-center">
            <div class="avatar-box txt-c p-20">
              {/* <img decoding="async" class="rad-half mb-10" src="imgs/avatar.png" alt="" /> */}
              <img  src={avatar} alt="avatar" className="rad-half mb-10"/>
              <h3 class="m-0">{userName}</h3>
              <p class="c-grey mt-10">Level 20</p>
              <div class="level rad-6 bg-eee p-relative">
                <span style={{width:"70%"}}></span>
              </div>
              <div class="rating mt-10 mb-10">
                <i class="fa-solid fa-star c-orange fs-13"></i>
                <i class="fa-solid fa-star c-orange fs-13"></i>
                <i class="fa-solid fa-star c-orange fs-13"></i>
                <i class="fa-solid fa-star c-orange fs-13"></i>
                <i class="fa-solid fa-star c-orange fs-13"></i>
              </div>
              <p class="c-grey m-0 fs-13">550 Rating</p>
            </div>
            <div class="info-box w-full txt-c-mobile">
              {/* <!-- Start Information Row --> */}
              <div class="box p-20 d-flex align-center">
                <h4 class="c-grey fs-15 m-0 w-full">General Information</h4>
                <div class="fs-14">
                  <span class="c-grey">Full Name : </span>
                  <span>{userName}</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Gender : </span>
                  <span>Male</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Country : </span>
                  <span>Egypt</span>
                </div>
                <div class="fs-14">
                  <label>
                    <input class="toggle-checkbox" type="checkbox" defaultChecked={true} />
                    <div class="toggle-switch"></div>
                  </label>
                </div>
              </div>
              {/* <!-- End Information Row -->
              <!-- Start Information Row --> */}
              <div class="box p-20 d-flex align-center">
                <h4 class="c-grey w-full fs-15 m-0">Personal Information</h4>
                <div class="fs-14">
                  <span class="c-grey">Email : </span>
                  <span>{userEmail}</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Phone : </span>
                  <span>019123456789</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Date Of Birth : </span>
                  <span>25/10/1982</span>
                </div>
                <div class="fs-14">
                  <label>
                    <input class="toggle-checkbox" type="checkbox" />
                    <div class="toggle-switch"></div>
                  </label>
                </div>
              </div>
              {/* <!-- End Information Row -->
              <!-- Start Information Row --> */}
              <div class="box p-20 d-flex align-center">
                <h4 class="c-grey w-full fs-15 m-0">Job Information</h4>
                <div class="fs-14">
                  <span class="c-grey">Title : </span>
                  <span>Full Stack Developer</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Programming Language : </span>
                  <span>Python</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Years Of Experience : </span>
                  <span>15+</span>
                </div>
                <div class="fs-14">
                  <label>
                    <input class="toggle-checkbox" type="checkbox" defaultChecked={true} />
                    <div class="toggle-switch"></div>
                  </label>
                </div>
              </div>
              {/* <!-- End Information Row -->
              <!-- Start Information Row --> */}
              <div class="box p-20 d-flex align-center">
                <h4 class="c-grey w-full fs-15 m-0">Billing Information</h4>
                <div class="fs-14">
                  <span class="c-grey">Payment Method : </span>
                  <span>Paypal</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Email : </span>
                  <span>email@website.com</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Subscription : </span>
                  <span>Monthly</span>
                </div>
                <div class="fs-14">
                  <label>
                    <input class="toggle-checkbox" type="checkbox" />
                    <div class="toggle-switch"></div>
                  </label>
                </div>
              </div>
              {/* <!-- End Information Row --> */}
            </div>
          </div>
          {/* <!-- End Overview -->
           <!-- Start Other Data --> */}
           <div class="other-data d-flex gap-20">
            <div class="skills-card p-20 bg-white rad-10 mt-20">
              <h2 class="mt-0 mb-10">My Skills</h2>
              <p class="mt-0 mb-20 c-grey fs-15">Complete Skills List</p>
              <ul class="m-0 txt-c-mobile">
                <li><span>HTML</span><span>Pugjs</span><span>HAML</span></li>
                <li><span>CSS</span><span>SASS</span><span>Stylus</span></li>
                <li><span>JavaScript</span><span>TypeScript</span></li>
                <li><span>Vuejs</span><span>Reactjs</span></li>
                <li><span>Jest</span><span>Jasmine</span></li>
                <li><span>PHP</span><span>Laravel</span></li>
                <li><span>Python</span><span>Django</span></li>
              </ul>
            </div>
            <div class="activities p-20 bg-white rad-10 mt-20">
              <h2 class="mt-0 mb-10">Latest Activities</h2>
              <p class="mt-0 mb-20 c-grey fs-15">Latest Activities Done By The User</p>
              <div class="activity d-flex align-center txt-c-mobile">
                <img decoding="async" src={activity1} alt="" />
                <div class="info">
                  <span class="d-block mb-10">Store</span>
                  <span class="c-grey">Bought The Mastering Python Course</span>
                </div>
                <div class="date">
                  <span class="d-block mb-10">18:10</span>
                  <span class="c-grey">Yesterday</span>
                </div>
              </div>
              <div class="activity d-flex align-center txt-c-mobile">
                <img decoding="async" src={activity2} alt="" />
                <div class="info">
                  <span class="d-block mb-10">Academy</span>
                  <span class="c-grey">Got The PHP Certificate</span>
                </div>
                <div class="date">
                  <span class="d-block mb-10">16:05</span>
                  <span class="c-grey">Yesterday</span>
                </div>
              </div>
              <div class="activity d-flex align-center txt-c-mobile">
                <img decoding="async" src={activity3} alt="" />
                <div class="info">
                  <span class="d-block mb-10">Badges</span>
                  <span class="c-grey">Unlocked The 10 Skills Badge</span>
                </div>
                <div class="date">
                  <span class="d-block mb-10">18:05</span>
                  <span class="c-grey">Yesterday</span>
                </div>
              </div>
              <div class="activity d-flex align-center txt-c-mobile">
                <img decoding="async" src={activity1} alt="" />
                <div class="info">
                  <span class="d-block mb-10">Store</span>
                  <span class="c-grey">Bought The Typescript Course</span>
                </div>
                <div class="date">
                  <span class="d-block mb-10">12:05</span>
                  <span class="c-grey">Yesterday</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Other Data --> */}
          </div>
      </div>
    </div>
  )
}
