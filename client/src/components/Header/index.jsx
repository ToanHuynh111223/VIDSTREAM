import { Link } from "react-router-dom";
import styles from './Header.module.scss'
import { clsx } from 'clsx';
import { logo } from "../../assets";
//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
//add theme mui
import useColorMaterial, { theme } from "../../hooks/useColorMaterial.js";
//import component list menu (header)
import NavbarHeader from "./components/NavbarHeader";
import { useEffect, useState } from "react";

function Header() {
    const loginColor = useColorMaterial('login')
    const [showHeader, setShowHeader] = useState(false)
    useEffect(() => {
        const handleScrollAddHeader = () => {
            setShowHeader(window.scrollY >= 120)
        }
        window.addEventListener('scroll', handleScrollAddHeader)
        return () => window.removeEventListener('scroll', handleScrollAddHeader)
    }, [])
    return (
        <header className={showHeader ? clsx(styles.scrollAnimation) : ""}>
            <div className={clsx(styles.container)}>
                <Link to='/' className={clsx(styles.goHome)}>
                    <img className={clsx(styles.logo)} src={logo} alt="logo"></img>
                </Link>
                <NavbarHeader />
                <div className={clsx(styles.navbarRight)} >
                    <ThemeProvider theme={theme}>
                        <Link to='/login'>
                            <Button variant="outlined" size="large" color={loginColor}> Login </Button>
                        </Link>
                    </ThemeProvider>

                </div>
            </div>
        </header>
    );
}

export default Header;