import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartLine,
    faTicket,
    faGear,
    faUser,
    faDiagramProject,
    faGraduationCap,
    faUserGroup,
    faFile,
    faCreditCard,
    faSpinner,
    faCircleCheck,
    faTrashCan,
    faHeart,
    faComment,
    faBell,
} from "@fortawesome/free-solid-svg-icons";

import {showDiv} from '../Components/AllFunctions'


import "../Components/myFramework.css";
import "../Components/dashboard.css";
import avatar from "../imgs/avatar.png";
import twitter from "../imgs/twitter.png";
import facebook from "../imgs/facebook.png";
import linkedin from "../imgs/linkedin.png";
import youtube from "../imgs/youtube.png";

import { Link } from "react-router-dom";
import React from "react";

export default function Settings() {


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
              class="active d-flex align-center fs-14 c-black rad-6 p-10"
              to="/settings"
            >
              <FontAwesomeIcon icon={faGear} />
              <span class="hide-mobile">Settings</span>
            </Link>
          </li>
          <li>
            <Link
              class="d-flex align-center fs-14 c-black rad-6 p-10"
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
          <h1 class="p-relative">Settings</h1>
         <div class="settings m-20 d-grid gap-20">
           {/* <!-- start setting box --> */}
           <div class="p-20 bg-white rad-10">
                <h2 class="mt-0 mb-10">Site Control</h2>
                <p class="mt-0 mb-20 c-gray fs-15">Control The Website If Ther Is Maintenance</p>
                <div class="mb-15 flex-between">
                    <div>
                        <span>Website Control</span>
                        <p class="c-gray mb-5 mt-5">Open/Close Website And Type The Reasons</p>
                    </div>
                    <div>
                        <label>
                            <input class="toggle-checkbox" type="checkbox" defaultChecked={true}/>
                            <div class="toggle-switch"></div>
                        </label>
                    </div>
                </div>
                <textarea class="close-message p-10 rad-6 w-full d-block" placeholder="Close Message Content"></textarea>
           </div>
           {/* <!-- end setting box -->
            <!-- start setting box --> */}
            <div class="p-20 bg-white rad-10">
                <h2 class="mt-0 mb-10">General Info</h2>
                <p class="mt-0 mb-20 c-gray fs-15">General Information About Your Account</p>
                <div class="mb-15">
                    <label class="fs-14 c-grey d-block mb-10" for="first">First Name</label>
                    <input
                      class="b-none border-ccc p-10 rad-6 d-block w-full"
                      type="text"
                      id="first"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="mb-15">
                    <label class="fs-14 c-grey d-block mb-5" for="last">Last Name</label>
                    <input
                      class="b-none border-ccc p-10 rad-6 d-block w-full"
                      id="last"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div>
                    <label class="fs-14 c-grey d-block mb-5" for="email">Email</label>
                    <input
                      class="email b-none border-ccc p-10 rad-6 w-full mr-10"
                      id="email"
                      type="email"
                      value="o@nn.sa"
                      disabled
                    />
                    <a class="c-blue" href="#">Change</a>
                  </div>
                </div>
           {/* <!-- end setting box -->
            <!-- start setting box --> */}
            <div class="p-20 bg-white rad-10">
                <h2 class="mt-0 mb-10">Security Info</h2>
                <p class="mt-0 mb-20 c-grey fs-15">Security Information About Your Account</p>
                <div class="sec-box mb-15 flex-between">
                  <div>
                    <span>Password</span>
                    <p class="c-grey mt-5 mb-0 fs-13">Last Change On 25/10/2021</p>
                  </div>
                  <a class="button bg-blue c-white btn-shape" href="#">Change</a>
                </div>
                <div class="sec-box mb-15 flex-between">
                  <div>
                    <span>Two-Factor Authentication</span>
                    <p class="c-grey mt-5 mb-0 fs-13">Enable/Disable The Feature</p>
                  </div>
                  <label>
                    <input class="toggle-checkbox" type="checkbox" defaultChecked={true} />
                    <div class="toggle-switch"></div>
                  </label>
                </div>
                <div class="sec-box flex-between">
                  <div>
                    <span>Devices</span>
                    <p class="c-grey mt-5 mb-0 fs-13">Check The Login Devices List</p>
                  </div>
                  <a class="bg-eee c-black btn-shape" href="#">Devices</a>
                </div>
              </div>
           {/* <!-- end setting box -->
           <!-- start setting box --> */}
           <div class="social-boxes p-20 bg-white rad-10">
            <h2 class="mt-0 mb-10">Social Info</h2>
            <p class="mt-0 mb-20 c-grey fs-15">Social Media Information</p>
            <div class="d-flex align-center mb-15">
               {/* <i class="fa-brands fa-twitter flex-center c-gray"></i> */}
               <img src={twitter} alt="twitter" className="brand-img"/>
              
              {/* <FontAwesomeIcon icon={faTwitter} className="flex-center c-gray"/> */}
              <input class="w-full" type="text" placeholder="Twitter Username" />
            </div>
            <div class="d-flex align-center mb-15">
            <img src={facebook} alt="facebook" className="brand-img"/>
              {/* <i class="fa-brands fa-facebook-f flex-center c-gray"></i> */}
              <input class="w-full" type="text" placeholder="Facebook Username" />
            </div>
            <div class="d-flex align-center mb-15">
              {/* <i class="fa-brands fa-linkedin flex-center c-gray"></i> */}
              <img src={linkedin} alt="twitter" className="brand-img"/>
              <input class="w-full" type="text" placeholder="Linkedin Username" />
            </div>
            <div class="d-flex align-center">
            <img src={youtube} alt="twitter" className="brand-img"/>
              {/* <i class="fa-brands fa-youtube flex-center c-gray"></i> */}
              <input class="w-full" type="text" placeholder="Youtube Username" />
            </div>
          </div>
       {/* <!-- end setting box -->
       <!-- Start Settings Box --> */}
       <div class="widgets-control p-20 bg-white rad-10">
        <h2 class="mt-0 mb-10">Widgets Control</h2>
        <p class="mt-0 mb-20 c-grey fs-15">Show/Hide Widgets</p>
        <div class="control d-flex align-center mb-15">
          <input type="checkbox" id="one" defaultChecked={true} />
          <label for="one">Quick Draft</label>
        </div>
        <div class="control d-flex align-center mb-15">
          <input type="checkbox" id="two" defaultChecked={true} />
          <label for="two">Yearly Targets</label>
        </div>
        <div class="control d-flex align-center mb-15">
          <input type="checkbox" id="three" defaultChecked={true} />
          <label for="three">Tickets Statistics</label>
        </div>
        <div class="control d-flex align-center mb-15">
          <input type="checkbox" id="four" defaultChecked={true} />
          <label for="four">Latest News</label>
        </div>
        <div class="control d-flex align-center mb-15">
          <input type="checkbox" id="five" />
          <label for="five">Latest Tasks</label>
        </div>
        <div class="control d-flex align-center mb-15">
          <input type="checkbox" id="six" defaultChecked={true} />
          <label for="six">Top Search Items</label>
        </div>
      </div>
      {/* <!-- End Settings Box -->
       <!-- Start Settings Box --> */}
       <div class="backup-control p-20 bg-white rad-10">
        <h2 class="mt-0 mb-10">Backup Manager</h2>
        <p class="mt-0 mb-20 c-grey fs-15">Control Backup Time And Location</p>
        <div class="date d-flex align-center mb-15">
          <input type="radio" name="time" id="daily" defaultChecked={true} />
          <label for="daily">Daily</label>
        </div>
        <div class="date d-flex align-center mb-15">
          <input type="radio" name="time" id="weekly" />
          <label for="weekly">Weekly</label>
        </div>
        <div class="date d-flex align-center mb-15">
          <input type="radio" name="time" id="monthly" />
          <label for="monthly">Monthly</label>
        </div>
        <div class="servers d-flex align-center txt-c">
          <input type="radio" name="servers" id="server-one" />
          <div class="server mb-15 rad-10 w-full">
            <label class="d-block m-15" for="server-one">
              <i class="fa-solid fa-server d-block mb-10"></i>
              Megaman
            </label>
          </div>
          <input type="radio" name="servers" id="server-two" defaultChecked={true} />
          <div class="server mb-15 rad-10 w-full">
            <label class="d-block m-15" for="server-two">
              <i class="fa-solid fa-server d-block mb-10"></i>
              Zero
            </label>
          </div>
          <input type="radio" name="servers" id="server-three" />
          <div class="server mb-15 rad-10 w-full">
            <label class="d-block m-15" for="server-three">
              <i class="fa-solid fa-server d-block mb-10"></i>
              Sigma
            </label>
          </div>
        </div>
      </div>
      {/* <!-- End Settings Box --> */}
         </div>
      </div>
    </div>
  )
}
