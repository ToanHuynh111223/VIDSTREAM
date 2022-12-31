import styles from "./Footer.module.scss"
import { clsx } from 'clsx';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';

//import components
import ContainerOne from "./components/ContainerOne";
import ContainerTwo from "./components/ContainerTwo";
function Footer() {
    return (
        <footer>
            <Container>
                <div className={clsx(styles.infomation)}>
                    <ContainerOne />
                    <ContainerTwo />
                </div>
            </Container>
        </footer >
    );
}

export default Footer;