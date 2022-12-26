// import { Link } from "react-router-dom";
import styles from "./PageTitle.module.scss"
import { clsx } from 'clsx';

//import component page-title-content
import PageTitleContent from "../../../components/PageTitleContent";
function PageTitle() {
    return (
        <section className={clsx(styles.pageheaderbox)} >
            <img className={clsx(styles.bg)} src="./assets/bgpagetitle/title.jpg" alt="background"></img>
            <PageTitleContent />
        </section>
    );
}

export default PageTitle;