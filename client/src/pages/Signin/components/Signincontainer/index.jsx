import styles from "../../Signin.module.scss"
import clsx from 'clsx';
//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
//add theme mui
import useColorMaterial, { theme } from "../../../../hooks/useColorMaterial";
import { Link } from "react-router-dom";
function Signincontainer() {
    const loginColor = useColorMaterial('login')
    return (
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.signincard)}>
                <h3 className={clsx(styles.textcenter)}>Login Your Account</h3>
                <form className={clsx(styles.form)} action="#">
                    <div className={clsx(styles.formgroup)}>
                        <label>Email</label>
                        <input type="text" placeholder='Enter email' />
                    </div>
                    <div className={clsx(styles.formgroup)}>
                        <label>Password</label>
                        <input type="password" placeholder='Password' />
                    </div>
                </form>
                <div className={clsx(styles.info)}>
                    <div className={clsx(styles.checkbox)}>
                        <input type="checkbox" />
                        <label for="customCheck">Remember Me</label>
                    </div>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" size="large" color={loginColor}> Log in </Button>
                    </ThemeProvider>
                </div>
                <div className={clsx(styles.textsignup)}>
                    Don't have an account?
                    <Link to="/signup">Register</Link>
                </div>
                <div className={clsx(styles.textforgotpw)}>
                    <Link>

                        Forgot your password?
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Signincontainer;