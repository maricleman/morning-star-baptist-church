import React, { useState } from 'react'
import styles from './styles/AboutUsStyles.scss';


interface IAppProps {
}

export const AboutUS: React.FC<IAppProps> = (props) => {
    const {  } = props;

    return (
        <div className={styles.wrapper}>
            <h2>Here is More About Us</h2>
        </div>
    );
}

export default AboutUS