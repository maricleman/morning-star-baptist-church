import React, { useState } from 'react'
import styles from './HeaderStyles.scss';


interface IAppProps {
    onSetSelectedPage: Function;
}

export const Header: React.FC<IAppProps> = (props) => {
    const { onSetSelectedPage } = props;

    const onSetSelectedPageAsWelcomePage = () => {
        onSetSelectedPage('welcome');
    };

    const onSetSelectedPageAsSermonPage = () => {
        onSetSelectedPage('sermons');
    };

    const onSetSelectedPageAsBeliefStatement = () => {
        onSetSelectedPage('beliefs');
    };

    const onSetSelectedPageAsAboutUs = () => {
        onSetSelectedPage('about');
    };

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.title}>
                <h2>Morning Star Baptist Church</h2>
            </div>
            <div className={styles.navBar}>
                <div onClick={onSetSelectedPageAsWelcomePage}>Welcome</div>
                <div onClick={onSetSelectedPageAsSermonPage}>Sermons</div>
                <div onClick={onSetSelectedPageAsBeliefStatement}>What we Believe</div>
                <div onClick={onSetSelectedPageAsAboutUs}>About Us</div>
            </div>
        </div>
    );
}

export default Header