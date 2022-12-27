import styles from "../../ResetPassword.module.scss"
import clsx from 'clsx';
//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
//add hooks theme mui
import useColorMaterial, { theme } from "../../../../hooks/useColorMaterial";

function ResetPasswordContainer() {
    const loginColor = useColorMaterial('login')
    return (
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.resetpasswordcard)}>
                <h3 className={clsx(styles.textcenter)}>Reset Password</h3>
                <p>Enter your email address and we'll send you an email with instructions to reset your password.</p>
                <form className={clsx(styles.form)} action="#">
                    <div className={clsx(styles.formgroup)}>
                        <label>Email</label>
                        <input type="text" placeholder='Enter email' autoComplete="email" />
                    </div>
                </form>
                <div className={clsx(styles.info)}>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" size="large" color={loginColor}> Reset</Button>
                    </ThemeProvider>
                </div>
            </div>

        </div>
    );
}

export default ResetPasswordContainer;