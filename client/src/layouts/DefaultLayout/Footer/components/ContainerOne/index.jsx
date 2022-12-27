import styles from "../../Footer.module.scss"
import clsx from 'clsx';
import { Link } from "react-router-dom";
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
import useColorMaterial, { theme } from "../../../../../hooks/useColorMaterial";
function ContainerOne() {
    const loginColor = useColorMaterial('login')
    return (
        <Row>
            <Col className={clsx(styles.colstart)}>
                <img className={clsx(styles.logo)} src="./assets/logo/logo.png" alt="logo"></img>
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
            <Col className={clsx(styles.colcenter)}>
                <h2 className={clsx(styles.title)}>Quick Link</h2>
                <ul>
                    <li><Link to="/about-us">
                        About Us
                    </Link>
                    </li>
                    <li><Link to="/about-us">
                        Movies
                    </Link>
                    </li>
                    <li><Link to="/about-us">
                        Tv Shows
                    </Link>
                    </li>
                    <li><Link to="/about-us">
                        Privacy Policy
                    </Link>
                    </li>
                    <li><Link to="/about-us">
                        Terms & Conditions
                    </Link>
                    </li>
                    <li><Link to="/about-us">
                        Help
                    </Link>
                    </li>
                </ul>
            </Col>
            <Col className={clsx(styles.colcenter)}>
                <h2 className={clsx(styles.title)}>Important Link</h2>
                <ul>
                    <li><Link to="/about-us">
                        Support
                    </Link>
                    </li>
                    <li><Link to="/about-us">
                        FAQ
                    </Link>
                    </li>
                    <li><Link to="/contact">
                        Contact Us
                    </Link>
                    </li>
                    <li><Link to="/about-us">
                        Latest News
                    </Link>
                    </li>
                    <li><Link to="/about-us">
                        Pricing Plan
                    </Link>
                    </li>
                </ul>
            </Col>
            <Col className={clsx(styles.colend)}>
                <h2 className={clsx(styles.title)}>Subscribe</h2>
                <p>Subscribe our newsletter to get latest update & news.</p>
                <form action="#">
                    <div className={clsx(styles.formgroup)}>
                        <input type="email" placeholder="Enter email" autoComplete="off" required="" />
                    </div>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" size="large" color={loginColor}> Subscribe Now </Button>
                    </ThemeProvider>
                </form>
            </Col>
        </Row>
    );
}

export default ContainerOne;