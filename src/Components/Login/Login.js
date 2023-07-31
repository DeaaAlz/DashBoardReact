import "../Login/Login.css";
import "../Login/util.css";
import "../Login/js/main";
import image from "../Login/images/login.svg";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { showDiv } from "../AllFunctions";
import axios from "axios";

function Login() {
  const userEmail = useRef();
  const userPass = useRef();
  const userStateChange = (e) => {
    document.getElementById("stateLogin").style.display = "none";
  };
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://smart-brain-api.imohamadnashaat.com:3000/api/auth/signin",
        {
          email: userEmail.current.value,
          password: userPass.current.value,
        }
      )
      .then((res) => {
        localStorage.setItem("isUserLogin", true);
        console.log(res);
        var date = new Date();
        // Add seven days to current date
        date.setDate(date.getDate() + 7);
        const userData = {
          email: userEmail.current.value,
          name: res.data.name,
          token: res.data.token,
          expire: date,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        window.location.replace("/");
      })
      .catch((err) => {
        localStorage.setItem("isUserLogin", false);
        document.getElementById("stateLogin").style.display = "flex";
      });
  };
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src={image} alt="IMG" />
          </div>
          <form
            onSubmit={formSubmit}
            className="login100-form validate-form"
            method="post"
          >
            <span className="login100-form-title">Login Page</span>
            <div className="stateLogin" id="stateLogin">
              Your Email Or Password Is Worng
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                ref={userEmail}
                onChange={userStateChange}
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                ref={userPass}
                onChange={userStateChange}
                className="input100"
                type="password"
                name="password"
                placeholder="Password"
              />
              <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn" type="submit">
                Login
              </button>
            </div>

            <div className="text-center p-t-12">
              <span className="txt1">Forgot</span>
              <a className="txt2" href="#">
                Username / Password?
              </a>
            </div>

            <div className="text-center p-t-136">
              <Link className="txt2" to="/register">
                Create your Account
              </Link>
            </div>
            <div id="setting-div"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
