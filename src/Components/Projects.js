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
    faDollarSign
} from "@fortawesome/free-solid-svg-icons";



import {showDiv} from '../Components/AllFunctions'
import "../Components/myFramework.css";
import "../Components/dashboard.css";
import avatar from "../imgs/avatar.png";
import team1 from "../imgs/team-01.png";
import team2 from "../imgs/team-02.png";
import team3 from "../imgs/team-03.png";
import team4 from "../imgs/team-04.png";
import team5 from "../imgs/team-05.png";
import React from "react";

import { Link } from "react-router-dom";
export default function Projects() {

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
              class="active d-flex align-center fs-14 c-black rad-6 p-10"
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
      <h1 class="p-relative">Projects</h1>
      <div class="projects-page d-grid m-20 gap-20">
        <div class="project bg-white p-20 rad-6 p-relative">
          <span class="date fs-13 c-grey">15/10/2021</span>
          <h4 class="m-0">ElDhiaa Dashboard</h4>
          <p class="c-grey mt-10 mb-10 fs-14">ElDhiaa Dashboard Project Design And Programming And Hosting</p>
          <div class="team">
            <a href="#"><img decoding="async" src={team1} alt="" /></a>
            <a href="#"><img decoding="async" src={team2} alt="" /></a>
            <a href="#"><img decoding="async" src={team3} alt="" /></a>
            <a href="#"><img decoding="async" src={team4} alt="" /></a>
            <a href="#"><img decoding="async" src={team5} alt="" /></a>
          </div>
          <div class="do d-flex">
            <span class="fs-13 rad-6 bg-eee">Programming</span>
            <span class="fs-13 rad-6 bg-eee">Design</span>
            <span class="fs-13 rad-6 bg-eee">Hosting</span>
            <span class="fs-13 rad-6 bg-eee">Marketing</span>
          </div>
          <div class="info flex-between">
            <div class="prog bg-eee">
              <span class="bg-red" style={{width:"50%"}}></span>
            </div>
            <div class="fs-14 c-grey">
            <FontAwesomeIcon icon={faDollarSign}  style={{marginRight:"10px"}}/>
              2500
            </div>
          </div>
        </div>
        <div class="project bg-white p-20 rad-6 p-relative">
          <span class="date fs-13 c-grey">15/6/2022</span>
          <h4 class="m-0">Academy Portal</h4>
          <p class="c-grey mt-10 mb-10 fs-14">Academy Portal Project Design And Programming</p>
          <div class="team">
            <a href="#"><img decoding="async" src={team1} alt="" /></a>
            <a href="#"><img decoding="async" src={team2} alt="" /></a>
            <a href="#"><img decoding="async" src={team3} alt="" /></a>
          </div>
          <div class="do d-flex">
            <span class="fs-13 rad-6 bg-eee">Programming</span>
            <span class="fs-13 rad-6 bg-eee">Design</span>
          </div>
          <div class="info flex-between">
            <div class="prog bg-eee">
              <span class="bg-green" style={{width:"50%"}}></span>
            </div>
            <div class="fs-14 c-grey">
            <FontAwesomeIcon icon={faDollarSign}  style={{marginRight:"10px"}}/>
              1800
            </div>
          </div>
        </div>
        <div class="project bg-white p-20 rad-6 p-relative">
          <span class="date fs-13 c-grey">15/6/2022</span>
          <h4 class="m-0">Chatting Application</h4>
          <p class="c-grey mt-10 mb-10 fs-14">Chatting Application Project Design</p>
          <div class="team">
            <a href="#"><img decoding="async" src={team1} alt="" /></a>
            <a href="#"><img decoding="async" src={team3} alt="" /></a>
            <a href="#"><img decoding="async" src={team2} alt="" /></a>
          </div>
          <div class="do d-flex">
            <span class="fs-13 rad-6 bg-eee">Design</span>
          </div>
          <div class="info flex-between">
            <div class="prog bg-eee">
              <span class="bg-blue" style={{width:"100%"}}></span>
            </div>
            <div class="fs-14 c-grey">
            <FontAwesomeIcon icon={faDollarSign}  style={{marginRight:"10px"}}/>
              950
            </div>
          </div>
        </div>
        <div class="project bg-white p-20 rad-6 p-relative">
          <span class="date fs-13 c-grey">15/6/2022</span>
          <h4 class="m-0">Ahmed Dashboard</h4>
          <p class="c-grey mt-10 mb-10 fs-14">Ahmed Dashboard Project Design And Programming And Hosting</p>
          <div class="team">
          <a href="#"><img decoding="async" src={team1} alt="" /></a>
            <a href="#"><img decoding="async" src={team3} alt="" /></a>
            <a href="#"><img decoding="async" src={team2} alt="" /></a>
          </div>
          <div class="do d-flex">
            <span class="fs-13 rad-6 bg-eee">Programming</span>
            <span class="fs-13 rad-6 bg-eee">Design</span>
            <span class="fs-13 rad-6 bg-eee">Hosting</span>
            <span class="fs-13 rad-6 bg-eee">Marketing</span>
          </div>
          <div class="info flex-between">
            <div class="prog bg-eee">
              <span class="bg-green" style={{width:"60%"}}></span>
            </div>
            <div class="fs-14 c-grey">
            <FontAwesomeIcon icon={faDollarSign}  style={{marginRight:"10px"}}/>
              1700
            </div>
          </div>
        </div>
        <div class="project bg-white p-20 rad-6 p-relative">
          <span class="date fs-13 c-grey">15/6/2022</span>
          <h4 class="m-0">Ahmed Portal</h4>
          <p class="c-grey mt-10 mb-10 fs-14">Ahmed Portal Project Design And Programming</p>
          <div class="team">
          <a href="#"><img decoding="async" src={team1} alt="" /></a>
            <a href="#"><img decoding="async" src={team3} alt="" /></a>
            <a href="#"><img decoding="async" src={team2} alt="" /></a>
          </div>
          <div class="do d-flex">
            <span class="fs-13 rad-6 bg-eee">Programming</span>
            <span class="fs-13 rad-6 bg-eee">Design</span>
          </div>
          <div class="info flex-between">
            <div class="prog bg-eee">
              <span class="bg-green" style={{width:"70%"}}></span>
            </div>
            <div class="fs-14 c-grey">
            <FontAwesomeIcon icon={faDollarSign}  style={{marginRight:"10px"}}/>
              850
            </div>
          </div>
        </div>
        <div class="project bg-white p-20 rad-6 p-relative">
          <span class="date fs-13 c-grey">15/6/2022</span>
          <h4 class="m-0">Mohamed Application</h4>
          <p class="c-grey mt-10 mb-10 fs-14">Mohamed Application Project Design</p>
          <div class="team">
          <a href="#"><img decoding="async" src={team1} alt="" /></a>
            <a href="#"><img decoding="async" src={team3} alt="" /></a>
            <a href="#"><img decoding="async" src={team2} alt="" /></a>
          </div>
          <div class="do d-flex">
            <span class="fs-13 rad-6 bg-eee">Design</span>
          </div>
          <div class="info flex-between">
            <div class="prog bg-eee">
              <span class="bg-red" style={{width:"40%"}}></span>
            </div>
            <div class="fs-14 c-grey">
            <FontAwesomeIcon icon={faDollarSign}  style={{marginRight:"10px"}}/>
              950
            </div>
          </div>
        </div>
        <div class="project bg-white p-20 rad-6 p-relative">
          <span class="date fs-13 c-grey">15/6/2022</span>
          <h4 class="m-0">Mohamed Dashboard</h4>
          <p class="c-grey mt-10 mb-10 fs-14">Mohamed Dashboard Project Design And Programming And Hosting</p>
          <div class="team">
          <a href="#"><img decoding="async" src={team1} alt="" /></a>
            <a href="#"><img decoding="async" src={team3} alt="" /></a>
            <a href="#"><img decoding="async" src={team2} alt="" /></a>
            <a href="#"><img decoding="async" src={team4} alt="" /></a>
          </div>
          <div class="do d-flex">
            <span class="fs-13 rad-6 bg-eee">Programming</span>
            <span class="fs-13 rad-6 bg-eee">Design</span>
            <span class="fs-13 rad-6 bg-eee">Hosting</span>
            <span class="fs-13 rad-6 bg-eee">Marketing</span>
          </div>
          <div class="info flex-between">
            <div class="prog bg-eee">
              <span class="bg-green" style={{width:"65%"}}></span>
            </div>
            <div class="fs-14 c-grey">
            <FontAwesomeIcon icon={faDollarSign}  style={{marginRight:"10px"}}/>
              1950
            </div>
          </div>
        </div>
        <div class="project bg-white p-20 rad-6 p-relative">
          <span class="date fs-13 c-grey">15/6/2022</span>
          <h4 class="m-0">Mohamed Portal</h4>
          <p class="c-grey mt-10 mb-10 fs-14">Mohamed Portal Project Design And Programming</p>
          <div class="team">
          <a href="#"><img decoding="async" src={team1} alt="" /></a>
            <a href="#"><img decoding="async" src={team3} alt="" /></a>
            <a href="#"><img decoding="async" src={team2} alt="" /></a>
          </div>
          <div class="do d-flex">
            <span class="fs-13 rad-6 bg-eee">Programming</span>
            <span class="fs-13 rad-6 bg-eee">Design</span>
          </div>
          <div class="info flex-between">
            <div class="prog bg-eee">
              <span class="bg-green" style={{width:"60%"}}></span>
            </div>
            <div class="fs-14 c-grey">
            <FontAwesomeIcon icon={faDollarSign}  style={{marginRight:"10px"}}/>
              1650
            </div>
          </div>
        </div>
        <div class="project bg-white p-20 rad-6 p-relative">
          <span class="date fs-13 c-grey">15/6/2022</span>
          <h4 class="m-0">Ahmed Application</h4>
          <p class="c-grey mt-10 mb-10 fs-14">Ahmed Application Project Design</p>
          <div class="team">
          <a href="#"><img decoding="async" src={team1} alt="" /></a>
            <a href="#"><img decoding="async" src={team3} alt="" /></a>
            <a href="#"><img decoding="async" src={team2} alt="" /></a>
          </div>
          <div class="do d-flex">
            <span class="fs-13 rad-6 bg-eee">Design</span>
          </div>
          <div class="info flex-between">
            <div class="prog bg-eee">
              <span class="bg-green" style={{width:"90%"}}></span>
            </div>
            <div class="fs-14 c-grey">
            <FontAwesomeIcon icon={faDollarSign}  style={{marginRight:"10px"}}/>
              950
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
