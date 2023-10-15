import React, { useState } from 'react'
import styles from './styles/HeaderStyles.scss';


interface IAppProps {
    onSetSelectedPage: Function;
    selectedPage: string;
}

export const Header: React.FC<IAppProps> = (props) => {
    const { onSetSelectedPage, selectedPage } = props;

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.title}>
                <h2>Morning Star Baptist Church</h2>
            </div>
            <div className={styles.navBar}>
                <div style={{fontWeight: selectedPage === 'welcome' ? 'bold' : 'normal'}} className={styles.navItem} onClick={() => onSetSelectedPage('welcome')}>Welcome</div>
                <div style={{fontWeight: selectedPage === 'sermons' ? 'bold' : 'normal'}} className={styles.navItem} onClick={() => onSetSelectedPage('sermons')}>Sermons</div>
                <div style={{fontWeight: selectedPage === 'beliefs' ? 'bold' : 'normal'}} className={styles.navItem} onClick={() => onSetSelectedPage('beliefs')}>What we Believe</div>
                <div style={{fontWeight: selectedPage === 'about' ? 'bold' : 'normal'}} className={styles.navItem} onClick={() => onSetSelectedPage('about')}>About Us</div>
            </div>
        </div>
    );
}

export default Header