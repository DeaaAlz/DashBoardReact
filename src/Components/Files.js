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
    faFilePdf,
    faImage,
    faFileWord,
    faFileCsv,
    faDownload
    
} from "@fortawesome/free-solid-svg-icons";



import {showDiv} from '../Components/AllFunctions'
import "../Components/myFramework.css";
import "../Components/dashboard.css";
import avatar from "../imgs/avatar.png";
import png from "../imgs/png.svg";
import pdf from "../imgs/pdf.svg";
import psd from "../imgs/psd.svg";
import sql from "../imgs/sql.svg";
import dll from "../imgs/dll.svg";
import eps from "../imgs/eps.svg";
import txt from "../imgs/txt.svg";
import zib from "../imgs/zip.svg";
import avi from "../imgs/avi.svg";


import { Link } from "react-router-dom";
import React from "react";


export default function Files() {

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
              class="active d-flex align-center fs-14 c-black rad-6 p-10"
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
      <h1 class="p-relative">Files</h1>
      <div class="files-page d-flex m-20 gap-20">
          <div class="files-stats p-20 bg-white rad-10">
            <h2 class="mt-0 mb-15 txt-c-mobile">Files Statistics</h2>
            <div class="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
              {/* <i class="fa-regular fa-file-pdf fa-lg blue flex-center c-blue icon"></i> */}
              <FontAwesomeIcon icon={faFilePdf} className="flex-center c-blue icon"/>
              <div class="info">
                <span>PDF Files</span>
                <span class="c-grey d-block mt-5">130</span>
              </div>
              <div class="size c-grey">6.5GB</div>
            </div>
            <div class="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
              {/* <i class="fa-regular fa-images fa-lg green flex-center c-green icon"></i> */}
              <FontAwesomeIcon icon={faImage} className="flex-center c-green icon"/>
              <div class="info">
                <span>Images</span>
                <span class="c-grey d-block mt-5">115 Files</span>
              </div>
              <div class="size c-grey">3.5GB</div>
            </div>
            <div class="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
              {/* <i class="fa-regular fa-file-word fa-lg red flex-center c-red icon"></i> */}
              <FontAwesomeIcon icon={faFileWord} className="flex-center c-red icon"/>
              <div class="info">
                <span>Word Files</span>
                <span class="c-grey d-block mt-5">110 Files</span>
              </div>
              <div class="size c-grey">3.2GB</div>
            </div>
            <div class="d-flex align-center border-eee p-10 rad-6 fs-13">
              {/* <i class="fa-solid fa-file-csv fa-lg orange flex-center c-orange icon"></i> */}
              <FontAwesomeIcon icon={faFileCsv} className="flex-center c-orange icon"/>
              <div class="info">
                <span>CSV Files</span>
                <span class="c-grey d-block mt-5">99 Files</span>
              </div>
              <div class="size c-grey">2.9GB</div>
            </div>
            <a class="upload bg-blue c-white fs-13 rad-6 d-block w-fit" href="#">
              <i class="fa-solid fa-angles-up mr-10"></i>
              Upload
            </a>
          </div>
          <div class="files-content d-grid gap-20">
            <div class="file bg-white p-10 rad-10">
              {/* <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/> */}
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={zib} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.zip</div>
              <p class="c-grey fs-13">ElDhiaa</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>20/06/2020</span>
                <span>5.5MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
            <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={avi} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.avi</div>
              <p class="c-grey fs-13">Admin</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>12.5MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={eps} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.eps</div>
              <p class="c-grey fs-13">Uploader</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>2.7MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={psd} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.psd</div>
              <p class="c-grey fs-13">Osama</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>15.1MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={dll} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.dll</div>
              <p class="c-grey fs-13">Coder</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>2.2MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={png} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.png</div>
              <p class="c-grey fs-13">Designer</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>1.1MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={dll} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.dll</div>
              <p class="c-grey fs-13">Coder</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>2.2MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={png} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.png</div>
              <p class="c-grey fs-13">Designer</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>1.1MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={psd} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.psd</div>
              <p class="c-grey fs-13">Osama</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>15.1MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={pdf} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.pdf</div>
              <p class="c-grey fs-13">ElDhiaa</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>5.5MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={avi} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.avi</div>
              <p class="c-grey fs-13">Admin</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>12.5MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={eps} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.eps</div>
              <p class="c-grey fs-13">Uploader</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>2.7MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={pdf} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.pdf</div>
              <p class="c-grey fs-13">ElDhiaa</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>5.5MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={avi} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.avi</div>
              <p class="c-grey fs-13">Admin</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>12.5MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={eps} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.eps</div>
              <p class="c-grey fs-13">Uploader</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>2.7MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={psd} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.psd</div>
              <p class="c-grey fs-13">Osama</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>15.1MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={dll} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.dll</div>
              <p class="c-grey fs-13">Coder</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>2.2MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={png} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.png</div>
              <p class="c-grey fs-13">Designer</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>1.1MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={dll} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.dll</div>
              <p class="c-grey fs-13">Coder</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>2.2MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={png} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.png</div>
              <p class="c-grey fs-13">Designer</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>1.1MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={psd} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.psd</div>
              <p class="c-grey fs-13">Osama</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>15.1MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={pdf} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.pdf</div>
              <p class="c-grey fs-13">ElDhiaa</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>5.5MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={avi} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.avi</div>
              <p class="c-grey fs-13">Admin</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>12.5MB</span>
              </div>
            </div>
            <div class="file bg-white p-10 rad-10">
              <FontAwesomeIcon icon={faDownload} className="c-grey p-absolute"/>
              <div class="icon txt-c">
                <img decoding="async" class="mt-15 mb-15" src={avi} alt="" />
              </div>
              <div class="txt-c mb-10 fs-14">my-file.eps</div>
              <p class="c-grey fs-13">Uploader</p>
              <div class="info flex-between mt-10 pt-10 fs-13 c-grey">
                <span>16/5/2021</span>
                <span>2.7MB</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}
