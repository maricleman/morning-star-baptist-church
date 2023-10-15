import React, { useState } from 'react'
import styles from './styles/SermonStyles.scss';


interface IAppProps {
}

export const Header: React.FC<IAppProps> = (props) => {
    const {  } = props;

    return (
        <div className={styles.wrapper}>
            <h2>Find sermons here</h2>
        </div>
    );
}

export default Header