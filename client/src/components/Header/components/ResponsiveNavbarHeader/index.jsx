import { Link } from "react-router-dom";
import styles from '../../Header.module.scss';
import { clsx } from 'clsx';
import MenuIcon from '@mui/icons-material/Menu';
//import icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useState, useEffect } from "react";
// list navbar
const menuNavbar = [
    { name: 'HOME', collection: [], isMenuChildren: false, isHome: true },
    { name: 'GENRES', collection: ['Action', 'Comedy', 'Documentary', 'Fantase', 'Horror', 'Drama', 'Music'], isMenuChildren: true },
    { name: 'TV SHOWS', collection: ['Show Category', 'Show Single', 'Show Details'], isMenuChildren: true },
    { name: 'MOVIES', collection: ['Movies Category', 'Movies Single', 'Movies Details'], isMenuChildren: true },
    { name: 'NEWS', collection: ['Blog', 'Blog Details'], isMenuChildren: true },
    { name: 'ABOUT US', collection: [], isMenuChildren: false },
    { name: 'CONTACT', collection: [], isMenuChildren: false },];
function ResponsiveNavbarHeader() {
    const [showNavbar, setShowNavBar] = useState(false)
    const [listChildren, setListChildren] = useState([])
    const [isShowListChildren, setIsShowListChildren] = useState(false)
    useEffect(() => {
        setListChildren(document.querySelectorAll(".Header_menuResponsiveChildren__9rvwe"))
    }, [isShowListChildren, showNavbar])
    const onClickShowNavbar = () => {
        setShowNavBar(!showNavbar)
    }
    const onClickShowListChildren = (index) => {

        if (listChildren[index - 1].className === "Header_menuResponsiveChildren__9rvwe Header_activeMenuChildren__5+gdA") {
            listChildren[index - 1].className = clsx(styles.menuResponsiveChildren)
        }
        else listChildren[index - 1].className = clsx(styles.menuResponsiveChildren, styles.activeMenuChildren)
        setIsShowListChildren(!isShowListChildren)
    }
    return (
        <div className={clsx(styles.menuResponsive)}>
            <div className={clsx(styles.overlay)} style={{ display: showNavbar ? "block" : "none" }} onClick={onClickShowNavbar}></div>
            <div className={clsx(styles.listMenuLeft)}>
                <MenuIcon sx={{ fontSize: 35 }} onClick={onClickShowNavbar} />
            </div>
            <div style={{ display: showNavbar ? "block" : "none" }}>
                <ul className={clsx(styles.listMenu)}>
                    {menuNavbar.map((item, index) => {
                        return (
                            item.isMenuChildren ?
                                <li className={clsx(styles.itemMenu)} key={index} onClick={() => onClickShowListChildren(index)}>
                                    <div className={clsx(styles.itemContent)}>
                                        {item.name}
                                        <KeyboardArrowDownIcon fontSize="large" />
                                    </div>
                                    <div className={clsx(styles.menuResponsiveChildren)}>
                                        <ul className={clsx(styles.listMenuChildren)}>
                                            {item.collection.map((collect, index) => {
                                                return (
                                                    <li className={clsx(styles.itemMenuChildren)} key={index}>
                                                        <Link to={`/${collect.toLowerCase().replace(' ', '-')}`}>
                                                            <RadioButtonCheckedIcon />
                                                            {collect}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </li> :
                                // Not menu children
                                <li className={clsx(styles.itemMenu)} key={index} >
                                    <Link to={item.isHome ? "/" : `/${item.name.toLowerCase().split(' ').join('-')}`} style={{ textDecoration: 'none' }}>
                                        <div className={clsx(styles.itemContent)}>
                                            {item.name}
                                        </div>
                                    </Link>
                                </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ResponsiveNavbarHeader;