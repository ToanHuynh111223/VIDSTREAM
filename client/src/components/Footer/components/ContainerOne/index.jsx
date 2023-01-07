import styles from "../../Footer.module.scss"
import clsx from 'clsx';
import { Link } from "react-router-dom";
import { logo } from "../../../../assets";
//import icon mui
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
//add hooks theme mui
import useColorMaterial, { theme } from "../../../../hooks/useColorMaterial.js";
import { useRef, useState } from "react";
/* eslint-disable */
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
function ContainerOne() {
    const loginColor = useColorMaterial('login')
    const [inputEmail, setInputEmail] = useState('')
    const email = useRef()

    //Subscribe err when input === " "
    function onClickSubscribe() {
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
    function onBlurInput() {
        email.current.style.borderColor = "#fff"
    }
    return (
        <Row>
            <Col className={clsx(styles.colstart)} lg={3} md={4}>
                <img className={clsx(styles.logo)} src={logo} alt="logo"></img>
                <p className={clsx(styles.pleft)}>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout.</p>
                <div className={clsx(styles.social)}>
                    <a href="https://www.facebook.com/">
                        <FacebookIcon sx={{ fontSize: 32 }} />
                    </a>
                    <a href="https://www.instagram.com/">
                        <InstagramIcon sx={{ fontSize: 32 }} />
                    </a>
                    <a href="https://www.linkedin.com">
                        <LinkedInIcon sx={{ fontSize: 32 }} />
                    </a>
                    <a href="https://www.whatsapp.com/?lang=vi">
                        <WhatsAppIcon sx={{ fontSize: 32 }} />
                    </a>
                </div>
            </Col>
            <Col className={clsx(styles.colcenter)} lg={3} md={4}>
                <h2 className={clsx(styles.title)}>Quick Link</h2>
                <ul>
                    <li><Link to="/about-us">
                        About Us
                    </Link>
                    </li>
                    <li><Link to="/*">
                        Movies
                    </Link>
                    </li>
                    <li><Link to="/*">
                        Tv Shows
                    </Link>
                    </li>
                    <li><Link to="/privacy">
                        Privacy Policy
                    </Link>
                    </li>
                    <li><Link to="/*">
                        Terms & Conditions
                    </Link>
                    </li>
                    <li><Link to="/*">
                        Help
                    </Link>
                    </li>
                </ul>
            </Col>
            <Col className={clsx(styles.colcenter)} lg={3} md={4}>
                <h2 className={clsx(styles.title)}>Important Link</h2>
                <ul>
                    <li><Link to="/*">
                        Support
                    </Link>
                    </li>
                    <li><Link to="/faq">
                        FAQ
                    </Link>
                    </li>
                    <li><Link to="/contact">
                        Contact Us
                    </Link>
                    </li>
                    <li><Link to="/*">
                        Latest News
                    </Link>
                    </li>
                    <li><Link to="/pricing-plan">
                        Pricing Plan
                    </Link>
                    </li>
                </ul>
            </Col>
            <Col className={clsx(styles.colend)} lg={3} md={12}>
                <h2 className={clsx(styles.title)}>Subscribe</h2>
                <p>Subscribe our newsletter to get latest update & news.</p>
                <form action="#">
                    <div className={clsx(styles.formgroup)}>
                        <input ref={email} type="email" placeholder="Enter email" autoComplete="off" required=""
                            value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} onBlur={onBlurInput} />
                    </div>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" size="large" color={loginColor} onClick={onClickSubscribe}> Subscribe Now </Button>
                    </ThemeProvider>
                </form>
            </Col>
        </Row>
    );
}

export default ContainerOne;