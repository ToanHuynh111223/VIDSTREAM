import styles from './PageNotFound.module.scss'
import clsx from 'clsx';
import { Link } from "react-router-dom";
//import material-ui
import { Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
//add hooks theme mui
import useColorMaterial, { theme } from '../../hooks/UseColorMaterial/useColorMaterial';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function PageNotFound() {
    const loginColor = useColorMaterial('login')
    return (
        <div className={clsx(styles.wrapper)}>
            <Container>
                <Row>
                    <Col><h1>404</h1>
                    </Col>
                </Row>
                <Row>
                    <Col><h2>Oppos! Page not Found.</h2>
                    </Col>
                </Row>
                <Row>
                    <Col><p>This page not found which you looking for not exist or removed.</p>
                    </Col>
                </Row>
                <ThemeProvider theme={theme}>
                    <Link to="/">

                        <Button variant="contained" size="large" color={loginColor}>Go Home</Button>
                    </Link>
                </ThemeProvider>
            </Container>
        </div>
    );
}

export default PageNotFound;