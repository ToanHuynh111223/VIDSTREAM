import styles from "../../SignUp.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
//add hooks theme mui
import useColorMaterial, { theme } from "../../../../hooks/useColorMaterial.js";
//hooks react
import { useEffect, useRef, useState } from "react";
/* eslint-disable */
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function SignupContainer() {
  const loginColor = useColorMaterial("login");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputUserName, setInputUserName] = useState("");
  const email = useRef();
  const password = useRef();
  const userName = useRef();
  //scroll page when mount
  useEffect(() => {
    window.scrollTo(0, 300);
  }, []);
  //Register err when input === " "
  function onClickRegister() {
    if (!inputEmail || !inputPassword) {
      email.current.style.borderColor = "#e50914";
      password.current.style.borderColor = "#e50914";
      userName.current.style.borderColor = "#e50914";
    } else {
      if (regex.test(inputEmail) === false) {
        email.current.style.borderColor = "#e50914";
        password.current.style.borderColor = "#fff";
        userName.current.style.borderColor = "#fff";
      } else {
        email.current.style.borderColor = "#fff";
      }
    }
  }
  return (
    <div className={clsx(styles.container)}>
      <div className={clsx(styles.signupcard)}>
        <h3 className={clsx(styles.textcenter)}>Create Your Account</h3>
        <form className={clsx(styles.form)} action="#">
          <div className={clsx(styles.formgroup)}>
            <label>Full Name</label>
            <input
              ref={userName}
              type="text"
              placeholder="Enter email"
              autoComplete="full-name"
              value={inputUserName}
              onChange={(e) => setInputUserName(e.target.value)}
            />
          </div>
          <div className={clsx(styles.formgroup)}>
            <label>Email</label>
            <input
              ref={email}
              type="text"
              placeholder="Enter email"
              autoComplete="email"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
          </div>
          <div className={clsx(styles.formgroup)}>
            <label>Password</label>
            <input
              ref={password}
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            />
          </div>
        </form>
        <div className={clsx(styles.info)}>
          <div className={clsx(styles.checkbox)}>
            <input type="checkbox" id="customCheck" />
            <label htmlFor="customCheck">
              I accept
              <Link to="#">Terms and Conditions</Link>
            </label>
          </div>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              size="large"
              color={loginColor}
              onClick={onClickRegister}
            >
              {" "}
              Register
            </Button>
          </ThemeProvider>
        </div>
        <div className={clsx(styles.textsignup)}>
          Already have an account?
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default SignupContainer;
