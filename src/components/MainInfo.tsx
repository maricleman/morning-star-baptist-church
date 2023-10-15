import React from 'react';
import styles from './MainInfo.scss';


export const MainInfo: React.FC = () => {

    return (
        <div className={styles.body}>
            <h2>Welcome message goes here</h2>
            <p>We are glad you are here.</p>
        </div>
    );
}

export default MainInfo