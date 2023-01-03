import styles from "../../BlogDetails.module.scss"
import clsx from "clsx"


import useColorMaterial, { theme } from "../.././../../hooks/useColorMaterial";
//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { useState, useRef } from "react";
//import layout bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/* eslint-disable */
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
function Comment() {
    const loginColor = useColorMaterial('login')
    const [inputEmail, setInputEmail] = useState('')
    const [inputUserName, setInputUserName] = useState('')
    const [inputWebsite, setInputWebsite] = useState('')
    const [inputComment, setInputComment] = useState('')
    const userName = useRef()
    const email = useRef()
    const website = useRef()
    const comment = useRef()
    function onClickSendComment() {
        if (!inputEmail || !inputWebsite || !inputComment || !inputUserName) {
            email.current.style.borderColor = "#e50914"
            website.current.style.borderColor = "#e50914"
            userName.current.style.borderColor = "#e50914"
            comment.current.style.borderColor = "#e50914"
        }
        else {
            if (regex.test(inputEmail) === false) {
                email.current.style.borderColor = "#e50914"
                comment.current.style.borderColor = "#fff"
                userName.current.style.borderColor = "#fff"
                website.current.style.borderColor = "#fff"
            }
            else {
                email.current.style.borderColor = "#fff"
                comment.current.style.borderColor = "#fff"
                userName.current.style.borderColor = "#fff"
                website.current.style.borderColor = "#fff"
            }
        }
    }
    return (
        <div className={clsx(styles.comment)}>
            <h1 style={{ color: "#fff", fontSize: "3rem", marginBottom: "0.8rem", fontWeight: 700 }}>Leave A Comment</h1>
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
                            <input ref={website} placeholder="Enter your website" autoComplete="website"
                                value={inputWebsite} onChange={(e) => setInputWebsite(e.target.value)} />
                        </div>
                    </Col>
                </Row>
                <Row className={clsx(styles.sectionThree)}>
                    <Col>
                        <div className={clsx(styles.formgroup)}>
                            <label>Message</label>
                            {/* <input placeholder="Enter your Message" autoComplete="message"></input> */}
                            <textarea ref={comment} cols="30" rows="4" placeholder="Comment"
                                value={inputComment} onChange={(e) => setInputComment(e.target.value)} />
                        </div>
                    </Col>
                </Row>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" size="large" color={loginColor} onClick={onClickSendComment}> Leave Comment </Button>
                </ThemeProvider>
            </form>
        </div>
    );
}

export default Comment;