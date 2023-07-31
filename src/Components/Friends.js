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
    faPhone,
    faEnvelope,
    faNewspaper,
    faFaceSmile,
    faCodeCommit
    
} from "@fortawesome/free-solid-svg-icons";



import {showDiv} from '../Components/AllFunctions'
import "../Components/myFramework.css";
import "../Components/dashboard.css";
import avatar from "../imgs/avatar.png";
import fr1 from "../imgs/friend-01.jpg";
import fr2 from "../imgs/friend-02.jpg";
import fr3 from "../imgs/friend-03.jpg";
import fr4 from "../imgs/friend-04.jpg";
import fr5 from "../imgs/friend-05.jpg";
import { Link } from "react-router-dom";
import React from "react";


export default function Friends() {


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
              class="active d-flex align-center fs-14 c-black rad-6 p-10"
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
      <h1 class="p-relative">Friends</h1>
      <div class="friends-page d-grid m-20 gap-20">
          <div class="friend bg-white rad-6 p-20 p-relative">
            <div class="contact">
            <FontAwesomeIcon icon={faPhone} className="fa"/>
            <FontAwesomeIcon icon={faEnvelope} className="fa"/>
            </div>
            <div class="txt-c">
              <img decoding="async" class="rad-half mt-10 mb-10 w-100 h-100" src={fr1} alt="" />
              <h4 class="m-0">Ahmed Nasser</h4>
              <p class="c-grey fs-13 mt-5 mb-0">JavaScript Developer</p>
            </div>
            <div class="icons fs-14 p-relative">
              <div class="mb-10">
              <FontAwesomeIcon icon={faUser} style={{marginRight:"5px"}} />
                <span>80 Friends</span>
              </div>
              <div class="mb-10">
              <FontAwesomeIcon icon={faCodeCommit} style={{marginRight:"5px"}}/>
                <span>20 Projects</span>
              </div>
              <div>
              <FontAwesomeIcon icon={faNewspaper} style={{marginRight:"5px"}}/>
                <span>25 Articles</span>
              </div>
              <span class="vip fw-bold c-orange">VIP</span>
            </div>
            <div class="info flex-between fs-13">
              <span class="c-grey">Joined 02/10/2021</span>
              <div>
                <a class="bg-blue c-white btn-shape mr-5" href="profile.html">Profile</a>
                <a class="bg-red c-white btn-shape mr-5" href="#">Remove</a>
              </div>
            </div>
          </div>
          <div class="friend bg-white rad-6 p-20 p-relative">
            <div class="contact">
            <FontAwesomeIcon icon={faPhone} className="fa"/>
            <FontAwesomeIcon icon={faEnvelope} className="fa"/>
            </div>
            <div class="txt-c">
              <img decoding="async" class="rad-half mt-10 mb-10 w-100 h-100" src={fr2} alt="" />
              <h4 class="m-0">Omar Fathy</h4>
              <p class="c-grey fs-13 mt-5 mb-0">Cloud Developer</p>
            </div>
            <div class="icons fs-14 p-relative">
              <div class="mb-10">
              <FontAwesomeIcon icon={faUser} style={{marginRight:"5px"}} />
                <span>80 Friends</span>
              </div>
              <div class="mb-10">
              <FontAwesomeIcon icon={faCodeCommit} style={{marginRight:"5px"}}/>
                <span>20 Projects</span>
              </div>
              <div>
              <FontAwesomeIcon icon={faNewspaper} style={{marginRight:"5px"}}/>
                <span>12 Articles</span>
              </div>
            </div>
            <div class="info flex-between fs-13">
              <span class="c-grey">Joined 02/08/2020</span>
              <div>
                <a class="bg-blue c-white btn-shape mr-5" href="profile.html">Profile</a>
                <a class="bg-red c-white btn-shape mr-5" href="">Remove</a>
              </div>
            </div>
          </div>
          <div class="friend bg-white rad-6 p-20 p-relative">
            <div class="contact">
            <FontAwesomeIcon icon={faPhone} className="fa"/>
            <FontAwesomeIcon icon={faEnvelope} className="fa"/>
            </div>
            <div class="txt-c">
              <img decoding="async" class="rad-half mt-10 mb-10 w-100 h-100" src={fr3} alt="" />
              <h4 class="m-0">Omar Ahmed</h4>
              <p class="c-grey fs-13 mt-5 mb-0">Mobile Developer</p>
            </div>
            <div class="icons fs-14 p-relative">
              <div class="mb-10">
              <FontAwesomeIcon icon={faUser} style={{marginRight:"5px"}} />
                <span>80 Friends</span>
              </div>
              <div class="mb-10">
              <FontAwesomeIcon icon={faCodeCommit} style={{marginRight:"5px"}}/>
                <span>20 Projects</span>
              </div>
              <div>
              <FontAwesomeIcon icon={faNewspaper} style={{marginRight:"5px"}}/>
                <span>18 Articles</span>
              </div>
            </div>
            <div class="info flex-between fs-13">
              <span class="c-grey">Joined 02/06/2020</span>
              <div>
                <a class="bg-blue c-white btn-shape mr-5" href="profile.html">Profile</a>
                <a class="bg-red c-white btn-shape mr-5" href="">Remove</a>
              </div>
            </div>
          </div>
          <div class="friend bg-white rad-6 p-20 p-relative">
            <div class="contact">
            <FontAwesomeIcon icon={faPhone} className="fa"/>
            <FontAwesomeIcon icon={faEnvelope} className="fa"/>
            </div>
            <div class="txt-c">
              <img decoding="async" class="rad-half mt-10 mb-10 w-100 h-100" src={fr4} alt="" />
              <h4 class="m-0">Shady Nabil</h4>
              <p class="c-grey fs-13 mt-5 mb-0">Back-End Developer</p>
            </div>
            <div class="icons fs-14 p-relative">
              <div class="mb-10">
              <FontAwesomeIcon icon={faUser} style={{marginRight:"5px"}} />
                <span>80 Friends</span>
              </div>
              <div class="mb-10">
              <FontAwesomeIcon icon={faCodeCommit} style={{marginRight:"5px"}}/>
                <span>20 Projects</span>
              </div>
              <div>
              <FontAwesomeIcon icon={faNewspaper} style={{marginRight:"5px"}}/>
                <span>18 Articles</span>
              </div>
            </div>
            <div class="info flex-between fs-13">
              <span class="c-grey">Joined 28/06/2020</span>
              <div>
                <a class="bg-blue c-white btn-shape mr-5" href="profile.html">Profile</a>
                <a class="bg-red c-white btn-shape mr-5" href="">Remove</a>
              </div>
            </div>
          </div>
          <div class="friend bg-white rad-6 p-20 p-relative">
            <div class="contact">
            <FontAwesomeIcon icon={faPhone} className="fa"/>
            <FontAwesomeIcon icon={faEnvelope} className="fa"/>
            </div>
            <div class="txt-c">
              <img decoding="async" class="rad-half mt-10 mb-10 w-100 h-100" src={fr2} alt="" />
              <h4 class="m-0">Mohamed Ibrahim</h4>
              <p class="c-grey fs-13 mt-5 mb-0">Algorithm Developer</p>
            </div>
            <div class="icons fs-14 p-relative">
              <div class="mb-10">
              <FontAwesomeIcon icon={faUser} style={{marginRight:"5px"}} />
                <span>80 Friends</span>
              </div>
              <div class="mb-10">
              <FontAwesomeIcon icon={faCodeCommit} style={{marginRight:"5px"}}/>
                <span>20 Projects</span>
              </div>
              <div>
              <FontAwesomeIcon icon={faNewspaper} style={{marginRight:"5px"}}/>
                <span>18 Articles</span>
              </div>
            </div>
            <div class="info flex-between fs-13">
              <span class="c-grey">Joined 28/08/2020</span>
              <div>
                <a class="bg-blue c-white btn-shape mr-5" href="profile.html">Profile</a>
                <a class="bg-red c-white btn-shape mr-5" href="">Remove</a>
              </div>
            </div>
          </div>
          <div class="friend bg-white rad-6 p-20 p-relative">
            <div class="contact">
            <FontAwesomeIcon icon={faPhone} className="fa"/>
            <FontAwesomeIcon icon={faEnvelope} className="fa"/>
            </div>
            <div class="txt-c">
              <img decoding="async" class="rad-half mt-10 mb-10 w-100 h-100" src={fr4} alt="" />
              <h4 class="m-0">Amr Hendawy</h4>
              <p class="c-grey fs-13 mt-5 mb-0">Back-End Developer</p>
            </div>
            <div class="icons fs-14 p-relative">
              <div class="mb-10">
              <FontAwesomeIcon icon={faUser} style={{marginRight:"5px"}} />
                <span>80 Friends</span>
              </div>
              <div class="mb-10">
              <FontAwesomeIcon icon={faCodeCommit} style={{marginRight:"5px"}}/>
                <span>20 Projects</span>
              </div>
              <div>
              <FontAwesomeIcon icon={faNewspaper} style={{marginRight:"5px"}}/>
                <span>18 Articles</span>
              </div>
            </div>
            <div class="info flex-between fs-13">
              <span class="c-grey">Joined 28/06/2020</span>
              <div>
                <a class="bg-blue c-white btn-shape mr-5" href="profile.html">Profile</a>
                <a class="bg-red c-white btn-shape mr-5" href="">Remove</a>
              </div>
            </div>
          </div>
          <div class="friend bg-white rad-6 p-20 p-relative">
            <div class="contact">
            <FontAwesomeIcon icon={faPhone} className="fa"/>
            <FontAwesomeIcon icon={faEnvelope} className="fa"/>
            </div>
            <div class="txt-c">
              <img decoding="async" class="rad-half mt-10 mb-10 w-100 h-100" src={fr1} alt="" />
              <h4 class="m-0">Mahmoud Adel</h4>
              <p class="c-grey fs-13 mt-5 mb-0">Cloud Developer</p>
            </div>
            <div class="icons fs-14 p-relative">
              <div class="mb-10">
              <FontAwesomeIcon icon={faUser} style={{marginRight:"5px"}} />
                <span>80 Friends</span>
              </div>
              <div class="mb-10">
              <FontAwesomeIcon icon={faCodeCommit} style={{marginRight:"5px"}}/>
                <span>20 Projects</span>
              </div>
              <div>
              <FontAwesomeIcon icon={faNewspaper} style={{marginRight:"5px"}}/>
                <span>12 Articles</span>
              </div>
            </div>
            <div class="info flex-between fs-13">
              <span class="c-grey">Joined 02/08/2020</span>
              <div>
                <a class="bg-blue c-white btn-shape mr-5" href="profile.html">Profile</a>
                <a class="bg-red c-white btn-shape mr-5" href="">Remove</a>
              </div>
            </div>
          </div>
          <div class="friend bg-white rad-6 p-20 p-relative">
            <div class="contact">
            <FontAwesomeIcon icon={faPhone} className="fa"/>
            <FontAwesomeIcon icon={faEnvelope} className="fa"/>
            </div>
            <div class="txt-c">
              <img decoding="async" class="rad-half mt-10 mb-10 w-100 h-100" src={fr5} alt="" />
              <h4 class="m-0">Ahmed Abuzaid</h4>
              <p class="c-grey fs-13 mt-5 mb-0">Content Creator</p>
            </div>
            <div class="icons fs-14 p-relative">
              <div class="mb-10">
              <FontAwesomeIcon icon={faUser} style={{marginRight:"5px"}} />
                <span>80 Friends</span>
              </div>
              <div class="mb-10">
              <FontAwesomeIcon icon={faCodeCommit} style={{marginRight:"5px"}}/>
                <span>20 Projects</span>
              </div>
              <div>
              <FontAwesomeIcon icon={faNewspaper} style={{marginRight:"5px"}}/>
                <span>18 Articles</span>
              </div>
              <span class="vip fw-bold c-orange">Vip</span>
            </div>
            <div class="info flex-between fs-13">
              <span class="c-grey">Joined 28/08/2020</span>
              <div>
                <a class="bg-blue c-white btn-shape mr-5" href="profile.html">Profile</a>
                <a class="bg-red c-white btn-shape mr-5" href="">Remove</a>
              </div>
            </div>
          </div>
          <div class="friend bg-white rad-6 p-20 p-relative">
            <div class="contact">
            <FontAwesomeIcon icon={faPhone} className="fa"/>
            <FontAwesomeIcon icon={faEnvelope} className="fa"/>
            </div>
            <div class="txt-c">
              <img decoding="async" class="rad-half mt-10 mb-10 w-100 h-100" src={fr3} alt="" />
              <h4 class="m-0">Gareeb Elshiekh</h4>
              <p class="c-grey fs-13 mt-5 mb-0">JavaScript Developer</p>
            </div>
            <div class="icons fs-14 p-relative">
              <div class="mb-10">
              <FontAwesomeIcon icon={faUser} style={{marginRight:"5px"}} />
                <span>80 Friends</span>
              </div>
              <div class="mb-10">
              <FontAwesomeIcon icon={faCodeCommit} style={{marginRight:"5px"}}/>
                <span>20 Projects</span>
              </div>
              <div>
              <FontAwesomeIcon icon={faNewspaper} style={{marginRight:"5px"}}/>
                <span>25 Articles</span>
              </div>
              <span class="vip fw-bold c-orange">Vip</span>
            </div>
            <div class="info flex-between fs-13">
              <span class="c-grey">Joined 02/10/2020</span>
              <div>
                <a class="bg-blue c-white btn-shape mr-5" href="profile.html">Profile</a>
                <a class="bg-red c-white btn-shape mr-5" href="">Remove</a>
              </div>
            </div>
          </div>
          <div class="friend bg-white rad-6 p-20 p-relative">
            <div class="contact">
            <FontAwesomeIcon icon={faPhone} className="fa"/>
            <FontAwesomeIcon icon={faEnvelope} className="fa"/>
            </div>
            <div class="txt-c">
              <img decoding="async" class="rad-half mt-10 mb-10 w-100 h-100" src={fr2} alt="" />
              <h4 class="m-0">Hamza</h4>
              <p class="c-grey fs-13 mt-5 mb-0">Front-End Developer</p>
            </div>
            <div class="icons fs-14 p-relative">
              <div class="mb-10">
              <FontAwesomeIcon icon={faUser} style={{marginRight:"5px"}} />
                <span>80 Friends</span>
              </div>
              <div class="mb-10">
              <FontAwesomeIcon icon={faCodeCommit} style={{marginRight:"5px"}}/>
                <span>20 Projects</span>
              </div>
              <div>
              <FontAwesomeIcon icon={faNewspaper} style={{marginRight:"5px"}}/>
                <span>18 Articles</span>
              </div>
            </div>
            <div class="info flex-between fs-13">
              <span class="c-grey">Joined 02/06/2020</span>
              <div>
                <a class="bg-blue c-white btn-shape mr-5" href="profile.html">Profile</a>
                <a class="bg-red c-white btn-shape mr-5" href="">Remove</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}
