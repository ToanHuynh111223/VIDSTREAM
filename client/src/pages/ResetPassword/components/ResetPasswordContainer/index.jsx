import styles from "../../ResetPassword.module.scss"
import clsx from 'clsx';
//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
//add hooks theme mui
import useColorMaterial, { theme } from "../../../../hooks/UseColorMaterial/useColorMaterial";
//hooks react
import { useEffect, useState, useRef } from "react";
/* eslint-disable */
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
function ResetPasswordContainer() {
    const loginColor = useColorMaterial('login')
    const [inputEmail, setInputEmail] = useState('')
    const email = useRef()
    useEffect(() => {
        window.scrollTo(0, 340)
    }, [])
    //Reset err when input === " "
    function onClickReset() {
        if (!inputEmail) {
            email.current.style.borderColor = "#e50914"
        }
        else {
            if (regex.test(inputEmail) === false) {
                email.current.style.borderColor = "#e50914"
            }
            else {
                email.current.style.borderColor = "#fff"
            }
        }
    }
    return (
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.resetpasswordcard)}>
                <h3 className={clsx(styles.textcenter)}>Reset Password</h3>
                <p>Enter your email address and we'll send you an email with instructions to reset your password.</p>
                <form className={clsx(styles.form)} action="#">
                    <div className={clsx(styles.formgroup)}>
                        <label>Email</label>
                        <input ref={email} type="text" placeholder='Enter email' autoComplete="email"
                            value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} />
                    </div>
                </form>
                <div className={clsx(styles.info)}>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" size="large" color={loginColor} onClick={onClickReset}> Reset</Button>
                    </ThemeProvider>
                </div>
            </div>

        </div>
    );
}

export default ResetPasswordContainer;