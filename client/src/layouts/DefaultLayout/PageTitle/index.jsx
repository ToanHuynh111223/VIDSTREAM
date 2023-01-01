// import { Link } from "react-router-dom";
import styles from "./PageTitle.module.scss"
import { clsx } from 'clsx';
import { imageBgPageTitle } from "../../../assets";
//import component page-title-content
import { PageTitleContent } from "../../../components";
function PageTitle() {
    return (
        <section className={clsx(styles.pageheaderbox)} >
            <img className={clsx(styles.bg)} src={imageBgPageTitle} alt="background"></img>
            <PageTitleContent />
        </section>
    );
}

export default PageTitle;