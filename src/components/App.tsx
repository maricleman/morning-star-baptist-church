import React, { useEffect, useState } from 'react';
import Header from './pages/Header';
import MainInfo from './pages/MainInfo';
import styles from './AppStyles.scss'
import BeliefStatement from './pages/BeliefStatement';
import Sermons from './pages/Sermons';
import AboutUs from './pages/AboutUs';

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
            <Header onSetSelectedPage={(page) => setSelectedPage(page)} selectedPage={selectedPage} />
            {selectedPage === 'welcome' && <MainInfo />}
            {selectedPage === 'sermons' && <Sermons />}
            {selectedPage === 'beliefs' && <BeliefStatement />}
            {selectedPage === 'about' && <AboutUs />}
        </div>
    );
}

export default App