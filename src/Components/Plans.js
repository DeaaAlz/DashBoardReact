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
    faCheck,
    faXmark,
    faCircleInfo
    
} from "@fortawesome/free-solid-svg-icons";




import "../Components/myFramework.css";
import "../Components/dashboard.css";
import avatar from "../imgs/avatar.png";

import {showDiv} from '../Components/AllFunctions';
import { Link } from "react-router-dom";
import React from "react";


export default function Plans() {


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
              class="active d-flex align-center fs-14 c-black rad-6 p-10"
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
      <h1 class="p-relative">Plans</h1>
      <div class="plans-page d-grid m-20 gap-20">
          <div class="plan green bg-white p-20 rad-10">
            <div class="top bg-green txt-c p-20">
              <h2 class="m-0 c-white">Free</h2>
              <div class="price c-white"><span>$</span>0.00</div>
            </div>
            <ul>
              <li>
               <FontAwesomeIcon icon={faCheck} className="yes" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Access All Text Lessons</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faCheck} className="yes" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Access All Videos Lessons</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faCheck} className="yes" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Appear On Leaderboard</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faXmark} className="c-red" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Browse Content Without Ads</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faXmark} className="c-red" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Access All Assignments</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faXmark} className="c-red" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Get Daily Prizes</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faXmark} className="c-red" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Earn Certificate</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faXmark} className="c-red" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>1 GB Space For Hosting Files</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faXmark} className="c-red" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Access Badge System</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
            </ul>
            <a href="#" class="btn-shape bg-green c-white d-block w-fit">Join</a>
          </div>
          {/* <!-- Start Plan --> */}
          <div class="plan blue bg-white p-20 rad-10">
            <div class="top bg-blue txt-c p-20">
              <h2 class="m-0 c-white">Basic</h2>
              <div class="price c-white"><span>$</span>7.99</div>
            </div>
            <ul class="list-none p-0">
              <li>
              <FontAwesomeIcon icon={faCheck} className="yes" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Access All Text Lessons</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faCheck} className="yes" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Access All Videos Lessons</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faCheck} className="yes" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Appear On Leaderboard</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faCheck} className="yes" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Browse Content Without Ads</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faCheck} className="yes" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Access All Assignments</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faCheck} className="yes" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Get Daily Prizes</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faCheck} className="yes" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Earn Certificate</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faXmark} className="c-red" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>1 GB Space For Hosting Files</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faXmark} className="c-red" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Access Badge System</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
            </ul>
            <a href="#" class="btn-shape bg-blue c-white d-block w-fit">Join</a>
          </div>
          {/* <!-- End Plan -->
          <!-- Start Plan --> */}
          <div class="plan orange bg-white p-20 rad-10">
            <div class="top bg-orange txt-c p-20">
              <h2 class="m-0 c-white">Premium</h2>
              <div class="price c-white"><span>$</span>19.99</div>
            </div>
            <ul class="list-none p-0">
              <li>
              <FontAwesomeIcon icon={faCheck} className="yes" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Access All Text Lessons</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faCheck} className="yes" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Access All Videos Lessons</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faCheck} className="yes" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Appear On Leaderboard</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faCheck} className="yes" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Browse Content Without Ads</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faCheck} className="yes" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Access All Assignments</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faCheck} className="yes" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Get Daily Prizes</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faCheck} className="yes" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Earn Certificate</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faCheck} className="yes" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>1 GB Space For Hosting Files</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
              <li>
              <FontAwesomeIcon icon={faCheck} className="yes" style={{fontSize:"18px",marginRight:"15px"}}/>
                <span>Access Badge System</span>
                <FontAwesomeIcon icon={faCircleInfo} className="info c-gray" style={{fontSize:"18px",marginLeft:"auto",cursor:"pointer"}}/>
              </li>
            </ul>
            <p class="c-grey m-0 txt-c">This Is Your Current Plan</p>
          </div>
          {/* <!-- End Plan --> */}
        </div>
    </div>
  </div>
  )
}
