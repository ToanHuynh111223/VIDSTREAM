import { Link } from "react-router-dom";
import styles from './Header.module.scss';
import { clsx } from 'clsx';
//import icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

// list navbar
const menuNavbar = [
    { name: 'HOME', collection: ['Home One', 'Home Two', 'Home Three'], isMenuChildren: true },
    { name: 'GENRES', collection: ['Action', 'Comedy', 'Documentary', 'Fantase', 'Horror', 'Drama', 'Music'], isMenuChildren: true },
    { name: 'TV SHOWS', collection: ['Show Category', 'Show Single', 'Show Details'], isMenuChildren: true },
    { name: 'MOVIES', collection: ['Movies Category', 'Movies Single', 'Movies Details'], isMenuChildren: true },
    { name: 'NEWS', collection: ['Blog', 'Blog Details'], isMenuChildren: true },
    { name: 'CONTACT', collection: [], isMenuChildren: false },];

function NavbarHeader() {
    return (
        <div className={clsx(styles.menu)}>
            <ul className={clsx(styles.listMenu)}>
                {menuNavbar.map((item, index) => {
                    return (
                        item.isMenuChildren ?
                            <li className={clsx(styles.itemMenu)} key={index} >
                                <div className={clsx(styles.itemContent)}>
                                    {item.name}
                                    <KeyboardArrowDownIcon fontSize="large" />
                                </div>
                                <div className={clsx(styles.menuChildren)}>
                                    <ul className={clsx(styles.listMenuChildren)}>
                                        {item.collection.map((collect, index) => {
                                            return (
                                                <li className={clsx(styles.itemMenuChildren)} key={index}>
                                                    <Link>
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
                                <Link to='/contact' style={{ textDecoration: 'none' }}>
                                    <div className={clsx(styles.itemContent)}>
                                        {item.name}
                                    </div>
                                </Link>
                            </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default NavbarHeader;


