import styles from "../../Signin.module.scss"
import clsx from 'clsx';
import { Link } from "react-router-dom";
//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
//add hooks theme mui
import useColorMaterial, { theme } from "../../../../hooks/UseColorMaterial/useColorMaterial";
//hooks react
import { useEffect, useRef, useState } from "react";
/* eslint-disable */
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
function SigninContainer() {
    const loginColor = useColorMaterial('login')
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const email = useRef()
    const password = useRef()
    //scroll page when mount
    useEffect(() => {
        window.scrollTo(0, 390)
    }, [])
    //Submit err when input === " "
    function onClickSubmit() {
        if (!inputEmail || !inputPassword) {
            email.current.style.borderColor = "#e50914"
            password.current.style.borderColor = "#e50914"
        }
        else {
            if (regex.test(inputEmail) === false) {
                email.current.style.borderColor = "#e50914"
                password.current.style.borderColor = "#fff"
            }
            else {
                email.current.style.borderColor = "#fff"
            }
        }
    }

    return (
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.signincard)}>
                <h3 className={clsx(styles.textcenter)}>Login Your Account</h3>
                <form className={clsx(styles.form)} action="#">
                    <div className={clsx(styles.formgroup)}>
                        <label>Email</label>
                        <input ref={email} type="text" placeholder='Enter email' autoComplete="email"
                            value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} />
                    </div>
                    <div className={clsx(styles.formgroup)}>
                        <label>Password</label>
                        <input ref={password} type="password" placeholder='Password' autoComplete="current-password"
                            value={inputPassword} onChange={(e) => setInputPassword(e.target.value)}
                        />
                    </div>
                </form>
                <div className={clsx(styles.info)}>
                    <div className={clsx(styles.checkbox)}>
                        <input type="checkbox" />
                        <label htmlFor="customCheck">Remember Me</label>
                    </div>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" size="large" color={loginColor} onClick={onClickSubmit}> Log in </Button>
                    </ThemeProvider>
                </div>
                <div className={clsx(styles.textsignup)}>
                    Don't have an account?
                    <Link to="/register">Register</Link>
                </div>
                <div className={clsx(styles.textforgotpw)}>
                    <Link to="/reset-password">Forgot your password?</Link>
                </div>
            </div>

        </div>
    );
}

export default SigninContainer;