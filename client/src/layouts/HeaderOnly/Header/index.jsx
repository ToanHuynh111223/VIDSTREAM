import { Link } from "react-router-dom";
import styles from './Header.module.scss'
import { clsx } from 'clsx';
//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
//add theme
import useColorMaterial, { theme } from "../../../hooks/useColorMaterial";
//import component list menu (header)
import NavbarHeader from "./NavbarHeader";

function Header() {
    const loginColor = useColorMaterial('login')
    return (
        <header>
            <div className={clsx(styles.container)}>
                <Link to='/' className={clsx(styles.goHome)}>
                    <img className={clsx(styles.logo)} src="./assets/logo/logo.png" alt="logo"></img>
                </Link>
                <NavbarHeader />
                <div className={clsx(styles.navbarRight)}>
                    <ThemeProvider theme={theme}>
                        <Button variant="outlined" size="large" color={loginColor}>Login</Button>
                    </ThemeProvider>

                </div>
            </div>
        </header>
    );
}

export default Header;