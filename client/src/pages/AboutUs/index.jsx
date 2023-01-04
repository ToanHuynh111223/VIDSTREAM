import styles from './AboutUs.module.scss'
import clsx from 'clsx';
import { imageAbout } from '../../assets';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';

function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (

        <Container>
            <Row className={clsx(styles.row)}>
                <Col className={clsx(styles.left)} m={12} xs={12} lg={6} xl={6} md={6}>
                    <img src={imageAbout[0]} alt='about'></img>
                </Col>
                <Col className={clsx(styles.right)} m={12} xs={12} lg={6} xl={6} md={6}>
                    <h1>Spend your boring time with us</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                        default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                    <p>There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by injected humour,
                        or randomised words which don't look even slightly believable.
                        If you are going to use a passage of Lorem Ipsum,
                        you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    <p>
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                        making this the first true generator on the Internet.
                    </p>
                </Col>
            </Row>
            <Row className={clsx(styles.row)}>
                <Col className={clsx(styles.left)} m={12} xs={12} lg={6} xl={6} md={6}>
                    <img src={imageAbout[1]} alt='about'></img>
                </Col>
                <Col className={clsx(styles.right)} m={12} xs={12} lg={6} xl={6} md={6}>
                    <h1>Create profiles for kids.</h1>
                    <p>
                        Send kids on adventures with their favorite characters in a space made just for
                        them—free with your membership.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;