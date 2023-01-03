import styles from "../../Footer.module.scss"
import clsx from 'clsx';
function ContainerTwo() {
    return (
        <div className={clsx(styles.footerend)}>
            <p style={{ fontFamily: "'Roboto', sans-serif" }}>VIDSTREAM - 2023 All Rights Reserved.</p>
        </div>
    );
}

export default ContainerTwo;