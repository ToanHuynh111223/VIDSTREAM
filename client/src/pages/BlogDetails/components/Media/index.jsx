import styles from "../../BlogDetails.module.scss"
import clsx from "clsx"
import { imageAvatar } from "../../../../assets";
import { Link } from "react-router-dom";
//import layout bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Media() {
    return (
        <div className={clsx(styles.media)}>
            <h1 style={{ color: "#fff", fontSize: "3rem", marginBottom: "0.8rem", fontWeight: 700 }}>Comments (10)</h1>
            <Row>
                <Col xs={2}>
                    <Link to="#" style={{ width: "100%", height: "8rem", marginRight: "1.6rem" }} >
                        <img src={imageAvatar[0]} alt="user" style={{ width: "8rem", height: "8rem" }} />
                    </Link>
                </Col>
                <Col xs={10}>
                    <div className={clsx(styles.body)}>
                        <h3 style={{ color: "#fff", fontSize: "2rem", marginBottom: "0.8rem", fontWeight: 700 }}>Aimee K Guy</h3>
                        <p style={{ fontFamily: "'Roboto', sans-serif", margin: "0.8rem 0 1.6rem", color: "#d1d0cf", fontSize: "1.6rem", fontWeight: 500 }}>10 min ago</p>
                        <p style={{ fontFamily: "'Roboto', sans-serif", margin: "0.8rem 0 1.6rem", color: "#d1d0cf", fontSize: "1.8rem", fontWeight: 500 }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.</p>
                        <div className={clsx(styles.reply)}>
                            <Row>
                                <Col xs={2}>
                                    <Link to="#" style={{ width: "100%", height: "8rem", marginRight: "1.6rem" }} >
                                        <img src={imageAvatar[0]} alt="user" style={{ width: "8rem", height: "8rem" }} />
                                    </Link>
                                </Col>

                                <Col xs={10}>
                                    <div className={clsx(styles.body)}>
                                        <h3 style={{ color: "#fff", fontSize: "2rem", marginBottom: "0.8rem", fontWeight: 700 }}>Aimee K Guy</h3>
                                        <p style={{ fontFamily: "'Roboto', sans-serif", margin: "0.8rem 0 1.6rem", color: "#d1d0cf", fontSize: "1.6rem", fontWeight: 500 }}>10 min ago</p>
                                        <p style={{ fontFamily: "'Roboto', sans-serif", margin: "0.8rem 0 1.6rem", color: "#d1d0cf", fontSize: "1.8rem", fontWeight: 500 }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.</p>
                                    </div></Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                    <Link to="#" style={{ width: "100%", height: "8rem", marginRight: "1.6rem" }} >
                        <img src={imageAvatar[0]} alt="user" style={{ width: "8rem", height: "8rem" }} />
                    </Link>
                </Col>
                <Col xs={10}>
                    <div className={clsx(styles.body)}>
                        <h3 style={{ color: "#fff", fontSize: "2rem", marginBottom: "0.8rem", fontWeight: 700 }}>Aimee K Guy</h3>
                        <p style={{ fontFamily: "'Roboto', sans-serif", margin: "0.8rem 0 1.6rem", color: "#d1d0cf", fontSize: "1.6rem", fontWeight: 500 }}>10 min ago</p>
                        <p style={{ fontFamily: "'Roboto', sans-serif", margin: "0.8rem 0 1.6rem", color: "#d1d0cf", fontSize: "1.8rem", fontWeight: 500 }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Media;