import styles from './Contact.module.scss'
import clsx from 'clsx';

//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
//add hooks theme mui
import useColorMaterial, { theme } from '../../hooks/useColorMaterial.js';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import icons mui
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useEffect, useState, useRef } from 'react';
/* eslint-disable */
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
function Contact() {
    const loginColor = useColorMaterial('login')
    const [inputEmail, setInputEmail] = useState('')
    const [inputUserName, setInputUserName] = useState('')
    const [inputSubject, setInputSubject] = useState('')
    const [inputMessage, setInputMessage] = useState('')
    const userName = useRef()
    const email = useRef()
    const subject = useRef()
    const message = useRef()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    //Subscribe err when input === " "
    function onClickSendMessage() {
        if (!inputEmail || !inputMessage || !inputSubject || !inputUserName) {
            email.current.style.borderColor = "#e50914"
            subject.current.style.borderColor = "#e50914"
            userName.current.style.borderColor = "#e50914"
            message.current.style.borderColor = "#e50914"
        }
        else {
            if (regex.test(inputEmail) === false) {
                email.current.style.borderColor = "#e50914"
                subject.current.style.borderColor = "#fff"
                userName.current.style.borderColor = "#fff"
                message.current.style.borderColor = "#fff"
            }
            else {
                email.current.style.borderColor = "#fff"
                subject.current.style.borderColor = "#fff"
                userName.current.style.borderColor = "#fff"
                message.current.style.borderColor = "#fff"
            }
        }
    }
    return (
        <Container>
            <Row className={clsx(styles.row)}>
                <Col className={clsx(styles.left)}>
                    <h1>Get In Touch</h1>
                    <div className={clsx(styles.infocontact)}>
                        <div className={clsx(styles.title)}>
                            <LocationOnIcon sx={{ fontSize: 30 }} />
                            <h2>Address</h2>
                        </div>
                        <p>2215 Skinner Hollow Road, Medford, USA</p>
                    </div>
                    <div className={clsx(styles.infocontact)}>
                        <div className={clsx(styles.title)}>
                            <PhoneIcon sx={{ fontSize: 30 }} />
                            <h2>Phone</h2>
                        </div>
                        <p>(+1) 123 6547 7894</p>
                    </div>
                    <div className={clsx(styles.infocontact)}>
                        <div className={clsx(styles.title)}>
                            <EmailIcon sx={{ fontSize: 30 }} />
                            <h2>Email</h2>
                        </div>
                        <p>example@gmail.com</p>
                    </div>
                </Col>
                <Col className={clsx(styles.right)} xs={8}>
                    <h1>Send Your Message</h1>
                    <form action='#'>
                        <Row className={clsx(styles.sectionOne)}>
                            <Col>
                                <div className={clsx(styles.formgroup)}>
                                    <label>Name</label>
                                    <input ref={userName} placeholder="Enter your name" autoComplete="name"
                                        value={inputUserName} onChange={(e) => setInputUserName(e.target.value)} />
                                </div>
                            </Col>
                            <Col>
                                <div className={clsx(styles.formgroup)}>
                                    <label>Email</label>
                                    <input ref={email} placeholder="Enter your Email" autoComplete="email"
                                        value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} />
                                </div>
                            </Col>
                        </Row>
                        <Row className={clsx(styles.sectionTwo)}>
                            <Col>
                                <div className={clsx(styles.formgroup)}>
                                    <label>Subject</label>
                                    <input ref={subject} placeholder="Enter your Subject" autoComplete="Subject"
                                        value={inputSubject} onChange={(e) => setInputSubject(e.target.value)} />
                                </div>
                            </Col>
                        </Row>
                        <Row className={clsx(styles.sectionThree)}>
                            <Col>
                                <div className={clsx(styles.formgroup)}>
                                    <label>Message</label>
                                    {/* <input placeholder="Enter your Message" autoComplete="message"></input> */}
                                    <textarea ref={message} cols="30" rows="4" placeholder="Enter your Message"
                                        value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
                                </div>
                            </Col>
                        </Row>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" size="large" color={loginColor} onClick={onClickSendMessage}> Send Message </Button>
                        </ThemeProvider>
                    </form>
                </Col>
            </Row>

        </Container>
    );
}

export default Contact;