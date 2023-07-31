import "../Rigester/css/style.css";
import "../Rigester/js/main";
import image2 from "./images/image-2.png";
import { showDiv } from "../AllFunctions";
import { useState, useRef } from "react";
import axios from "axios";
import { json } from "react-router-dom";

function Register() {
  const userStateChange=(e)=>{
		document.getElementById("stateLogin").style.display='none'
	}
  const userName = useRef();
  const userEmail = useRef();
  const userBirthDate = useRef();
  const userBassword = useRef();
  const confirmPass = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birtDate, setBirtDate] = useState("");
  const [password, setBassword] = useState("");
  const [userToken, setUserToken] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    if (userBassword.current.value === confirmPass.current.value) {
      axios
        .post(
          "https://smart-brain-api.imohamadnashaat.com:3000/api/auth/register",
          {
            email: `${userEmail.current.value}`,
            password: `${userBassword.current.value}`,
            name: `${userName.current.value}`,
          }
        )
        .then((res) => {
          setUserToken(res.data.token);
		  const userData = {
        token: res.data.token,
        name: res.data.name,
        email: res.data.email,
      };
		  localStorage.setItem("userData",JSON.stringify(userData));
		  window.location.replace("/login");
        })
        .catch((err) => {console.log(err);
          let messageError="";
        if(err.response.data.message=="Unable to register with this email.")
        {
          messageError="This email is already in use";
        }
        if(err.response.data.message=='"email" must be a valid email')
        {
          messageError="'email' must be a valid email";
        }
        document.getElementById("stateLogin").style.display="flex";
        document.getElementById("stateLogin").innerHTML=messageError;
      });
    } else {
      e.preventDefault();
      alert("password is not match");
    }
	
  };

  if(localStorage.getItem("userData")!=null){
	let DataFromLocalStorage = JSON.parse(localStorage.getItem("userData"));
    console.log("user token is "+DataFromLocalStorage.token);
  }
  	
  return (
	
    <div className="wrapper">
      <div className="inner">
        <form action="" method="post" onSubmit={formSubmit}>
          <h3 className="myh3">New Account?</h3>
          <div className='stateLogin' id='stateLogin'>
						
					</div>
          <div className="form-holder">
            <span className="lnr lnr-user"></span>
            <input
              name="usename"
              ref={userName}
              type="text"
              className="form-control myinput"
              placeholder="Full Name"
              required
              
            />
          </div>
          <div className="form-holder">
            <span className="lnr lnr-envelope"></span>
            <input
              ref={userEmail}
              name="email"
              type="text"
              className="form-control myinput"
              placeholder="Mail"
              required
              onChange={userStateChange}
            />
          </div>
          <div className="form-holder">
            <span className="lnr lnr-calendar-full"></span>
            <input
              ref={userBirthDate}
              name="userBirthDate"
              type="text"
              className="form-control myinput"
              placeholder="Your Birth Date As 1990/09/01"
              required
            />
          </div>
          <div className="form-holder">
            <span className="lnr lnr-lock"></span>
            <input
              ref={userBassword}
              name="password"
              type="password"
              className="form-control myinput"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-holder">
            <span className="lnr lnr-lock"></span>
            <input
              ref={confirmPass}
              type="password"
              className="form-control myinput"
              placeholder="Confirm Password"
              required
            />
          </div>
          <button className="btnRegister" type="submit">
            <span>Register</span>
          </button>
        </form>
        <img src={image2} alt="IMG" className="image-2" />
      </div>
      <div id="setting-div"></div>
    </div>
  );
}

export default Register;
