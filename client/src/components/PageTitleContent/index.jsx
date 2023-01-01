import styles from './PageTitleContent.module.scss'
import { clsx } from 'clsx';
import { useLocation } from 'react-router-dom';
import { useEffect, useState, memo } from 'react';
function PageTitleContent() {
    const [title, setTitle] = useState('')
    let { pathname } = useLocation()
    useEffect(() => {
        setTitle(`${pathname.toUpperCase()}`)
    }, [pathname])
    return (
        <div className={clsx(styles.content)}>
            <h2>{title.charAt(1).toUpperCase() + title.slice(2).toLowerCase().replace('-', ' ')}</h2>
            <div className={clsx(styles.breadcrumb)}>
                <span>Home</span>
                <p><span>/</span>{title.charAt(1).toUpperCase() + title.slice(2).toLowerCase().replace('-', ' ')}</p>
            </div>
        </div>
    );
}

export default memo(PageTitleContent);