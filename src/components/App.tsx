import React, { useEffect, useState } from 'react'
import Header from './Header';
import MainInfo from './MainInfo';
import styles from './AppStyles.scss'
import BeliefStatement from './BeliefStatement';

/**
 * I want to extend a thanks to this example for
 * ideas on how to style the application:
 * https://nuflakbrr-todolist.vercel.app/
 * https://github.com/nuflakbrr/react-todolist/blob/master/src/components/List.js
 * 
 * @returns The Todo Application in its entirety.
 */
function App() {
    const [selectedPage, setSelectedPage] = useState('welcome');

    return (
        <div className={styles.mainContainer}>
            <Header onSetSelectedPage={(page) => setSelectedPage(page)} />
            {selectedPage === 'welcome' && <MainInfo />}
            {selectedPage === 'beliefs' && <BeliefStatement />}
        </div>
    );
}

export default App