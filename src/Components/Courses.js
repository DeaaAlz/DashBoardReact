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
import course1 from "../imgs/course-01.jpg";
import course2 from "../imgs/course-02.jpg";
import course3 from "../imgs/course-03.jpg";
import course4 from "../imgs/course-04.jpg";
import course5 from "../imgs/course-05.jpg";
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
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/projects"
            >
              <FontAwesomeIcon icon={faDiagramProject} />
              <span class="hide-mobile">Projects</span>
            </Link>
          </li>
          <li>
            <Link
              class="active d-flex align-center fs-14 c-black rad-6 p-10"
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
          <h1 class="p-relative">Courses</h1>
        <div class="courses-page d-grid m-20 gap-20">
          <div class="course bg-white rad-6 p-relative">
            <img decoding="async" class="cover" src={course1} alt="" />
            <img decoding="async" class="instructor" src={team1} alt="" />
            <div class="p-20">
              <h4 class="m-0">Mastering Web Design</h4>
              <p class="description c-grey mt-15 fs-14">
                Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture
              </p>
            </div>
            <div class="info p-15 p-relative flex-between">
              <span class="title bg-blue c-white btn-shape">Course Info</span>
              <span class="c-grey">
              <FontAwesomeIcon icon= {faUser} style={{marginRight:"5px"}}/>
                950
              </span>
              <span class="c-grey">
              <FontAwesomeIcon icon= {faDollarSign} style={{marginRight:"5px"}}/>
                165
              </span>
            </div>
          </div>
          <div class="course bg-white rad-6 p-relative">
            <img decoding="async" class="cover" src={course2} alt="" />
            <img decoding="async" class="instructor" src={team2} alt="" />
            <div class="p-20">
              <h4 class="m-0">Data Structure And Algorithms</h4>
              <p class="description c-grey mt-15 fs-14">
                Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering
              </p>
            </div>
            <div class="info p-15 p-relative flex-between">
              <span class="title bg-blue c-white btn-shape">Course Info</span>
              <span class="c-grey"> <FontAwesomeIcon icon= {faUser} style={{marginRight:"5px"}}/> 1150</span>
              <span class="c-grey"><FontAwesomeIcon icon= {faDollarSign} style={{marginRight:"5px"}}/> 210</span>
            </div>
          </div>
          <div class="course bg-white rad-6 p-relative">
            <img decoding="async" class="cover" src={course3} alt="" />
            <img decoding="async" class="instructor" src={team1} alt="" />
            <div class="p-20">
              <h4 class="m-0">Responsive Web Design</h4>
              <p class="description c-grey mt-15 fs-14">
                Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints
              </p>
            </div>
            <div class="info p-15 p-relative flex-between">
              <span class="title bg-blue c-white btn-shape">Course Info</span>
              <span class="c-grey"> <FontAwesomeIcon icon= {faUser} style={{marginRight:"5px"}}/> 650</span>
              <span class="c-grey"><FontAwesomeIcon icon= {faDollarSign} style={{marginRight:"5px"}}/> 90</span>
            </div>
          </div>
          <div class="course bg-white rad-6 p-relative">
            <img decoding="async" class="cover" src={course4} alt="" />
            <img decoding="async" class="instructor" src={team4} alt="" />
            <div class="p-20">
              <h4 class="m-0">Mastering Python</h4>
              <p class="description c-grey mt-15 fs-14">
                Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life
              </p>
            </div>
            <div class="info p-15 p-relative flex-between">
              <span class="title bg-blue c-white btn-shape">Course Info</span>
              <span class="c-grey"> <FontAwesomeIcon icon= {faUser} style={{marginRight:"5px"}}/> 950</span>
              <span class="c-grey"><FontAwesomeIcon icon= {faDollarSign} style={{marginRight:"5px"}}/> 250</span>
            </div>
          </div>
          <div class="course bg-white rad-6 p-relative">
            <img decoding="async" class="cover" src={course5} alt="" />
            <img decoding="async" class="instructor" src={team3} alt="" />
            <div class="p-20">
              <h4 class="m-0">PHP Examples</h4>
              <p class="description c-grey mt-15 fs-14">
                PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases
              </p>
            </div>
            <div class="info p-15 p-relative flex-between">
              <span class="title bg-blue c-white btn-shape">Course Info</span>
              <span class="c-grey"> <FontAwesomeIcon icon= {faUser} style={{marginRight:"5px"}}/> 850</span>
              <span class="c-grey"><FontAwesomeIcon icon= {faDollarSign} style={{marginRight:"5px"}}/> 150</span>
            </div>
          </div>
          <div class="course bg-white rad-6 p-relative">
            <img decoding="async" class="cover" src={course2} alt="" />
            <img decoding="async" class="instructor" src={team2} alt="" />
            <div class="p-20">
              <h4 class="m-0">Data Structure And Algorithms</h4>
              <p class="description c-grey mt-15 fs-14">
                Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering
              </p>
            </div>
            <div class="info p-15 p-relative flex-between">
              <span class="title bg-blue c-white btn-shape">Course Info</span>
              <span class="c-grey"> <FontAwesomeIcon icon= {faUser} style={{marginRight:"5px"}}/> 1150</span>
              <span class="c-grey"><FontAwesomeIcon icon= {faDollarSign} style={{marginRight:"5px"}}/> 210</span>
            </div>
          </div>
          <div class="course bg-white rad-6 p-relative">
            <img decoding="async" class="cover" src={course3} alt="" />
            <img decoding="async" class="instructor" src={team2} alt="" />
            <div class="p-20">
              <h4 class="m-0">Responsive Web Design</h4>
              <p class="description c-grey mt-15 fs-14">
                Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints
              </p>
            </div>
            <div class="info p-15 p-relative flex-between">
              <span class="title bg-blue c-white btn-shape">Course Info</span>
              <span class="c-grey"> <FontAwesomeIcon icon= {faUser} style={{marginRight:"5px"}}/> 650</span>
              <span class="c-grey"><FontAwesomeIcon icon= {faDollarSign} style={{marginRight:"5px"}}/> 90</span>
            </div>
          </div>
          <div class="course bg-white rad-6 p-relative">
            <img decoding="async" class="cover" src={course1} alt="" />
            <img decoding="async" class="instructor" src={team1} alt="" />
            <div class="p-20">
              <h4 class="m-0">Mastering Web Design</h4>
              <p class="description c-grey mt-15 fs-14">
                Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Archticture
              </p>
            </div>
            <div class="info p-15 p-relative flex-between">
              <span class="title bg-blue c-white btn-shape">Course Info</span>
              <span class="c-grey"> <FontAwesomeIcon icon= {faUser} style={{marginRight:"5px"}}/> 850</span>
              <span class="c-grey"><FontAwesomeIcon icon= {faDollarSign} style={{marginRight:"5px"}}/> 145</span>
            </div>
          </div>
          <div class="course bg-white rad-6 p-relative">
            <img decoding="async" class="cover" src={course5} alt="" />
            <img decoding="async" class="instructor" src={team3} alt="" />
            <div class="p-20">
              <h4 class="m-0">PHP Examples</h4>
              <p class="description c-grey mt-15 fs-14">
                PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases
              </p>
            </div>
            <div class="info p-15 p-relative flex-between">
              <span class="title bg-blue c-white btn-shape">Course Info</span>
              <span class="c-grey"> <FontAwesomeIcon icon= {faUser} style={{marginRight:"5px"}}/> 850</span>
              <span class="c-grey"><FontAwesomeIcon icon= {faDollarSign} style={{marginRight:"5px"}}/> 150</span>
            </div>
          </div>
          <div class="course bg-white rad-6 p-relative">
            <img decoding="async" class="cover" src={course4} alt="" />
            <img decoding="async" class="instructor" src={team4} alt="" />
            <div class="p-20">
              <h4 class="m-0">Mastering Python</h4>
              <p class="description c-grey mt-15 fs-14">
                Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life
              </p>
            </div>
            <div class="info p-15 p-relative flex-between">
              <span class="title bg-blue c-white btn-shape">Course Info</span>
              <span class="c-grey"> <FontAwesomeIcon icon= {faUser} style={{marginRight:"5px"}}/> 950</span>
              <span class="c-grey"><FontAwesomeIcon icon= {faDollarSign} style={{marginRight:"5px"}}/> 250</span>
            </div>
          </div>
        </div>
      
    </div>
  </div>
  )
}
