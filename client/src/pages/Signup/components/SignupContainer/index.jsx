import styles from "../../Signup.module.scss"
import clsx from 'clsx';
import { Link } from "react-router-dom";
//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
//add hooks theme mui
import useColorMaterial, { theme } from "../../../../hooks/useColorMaterial";

function ResetPasswordContainer() {
    const loginColor = useColorMaterial('login')
    return (
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.signupcard)}>
                <h3 className={clsx(styles.textcenter)}>Create Your Account</h3>
                <form className={clsx(styles.form)} action="#">
                    <div className={clsx(styles.formgroup)}>
                        <label>Full Name</label>
                        <input type="text" placeholder='Enter email' autoComplete="full-name" />
                    </div>
                    <div className={clsx(styles.formgroup)}>
                        <label>Email</label>
                        <input type="text" placeholder='Enter email' autoComplete="email" />
                    </div>
                    <div className={clsx(styles.formgroup)}>
                        <label>Password</label>
                        <input type="password" placeholder='Password' autoComplete="current-password" />
                    </div>
                </form>
                <div className={clsx(styles.info)}>
                    <div className={clsx(styles.checkbox)}>
                        <input type="checkbox" />
                        <label htmlFor="customCheck">I accept
                            <Link to="#">
                                Terms and Conditions
                            </Link>
                        </label>
                    </div>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" size="large" color={loginColor}> Register</Button>
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

export default ResetPasswordContainer;