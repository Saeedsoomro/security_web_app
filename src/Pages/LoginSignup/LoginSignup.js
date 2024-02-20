import React, { useRef, useState } from "react";
import "./LoginSignup.css";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link } from "react-router-dom";

const LoginSignup = ({ history }) => {
  // useRef
  const switcherTab = useRef(null);
  const loginTab = useRef(null);
  const registerTab = useRef(null);

  //   Functions
  const switchTabs = (event, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");
      loginTab.current.classList.remove("shiftToLeft");
      registerTab.current.classList.remove("shifToNeutralForm");
    }
    if (tab === "register") {
      switcherTab.current.classList.remove("shiftToNeutral");
      switcherTab.current.classList.add("shiftToRight");
      loginTab.current.classList.add("shiftToLeft");
      registerTab.current.classList.add("shifToNeutralForm");
    }
  };

  return (
    <>
      <div className="loginSignupComponent">
        <div className="loginSignupBox">
          <div className="top-buttons">
            <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
            <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
          </div>
          <button className="moving-button" ref={switcherTab}></button>
          <form className="loginForm" ref={loginTab}>
            <div>
              <MailOutlineIcon />
              <input type="Email" placeholder="Email" />
            </div>
            <div>
              <LockOpenIcon />
              <input type="password" placeholder="Password" />
            </div>
            <Link to="/password/forgot">Forgot Password?</Link>
            <input type="submit" value="Login" className="loginSubmit" />
          </form>
          {/* ------------ */}
          {/* multipart/form-data=it is used when during submission we ara having an image */}
          <form
            className="signupform"
            ref={registerTab}
            encType="multipart/form-data"
          >
            <div>
              <FaceIcon />
              <input type="text" placeholder="Name" name="name" required />
            </div>
            <div>
              <MailOutlineIcon />
              <input type="email" placeholder="Email" name="email" required />
            </div>
            <div>
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            </div>
            <div id="registerImage">
              <img src="" alt="AvatarPreview" />
              <input type="file" name="avatar" accept="image/*" />
            </div>
            <input type="submit" value="Register" className="signupSubmit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
