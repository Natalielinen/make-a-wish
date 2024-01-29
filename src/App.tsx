import React from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';
import { HiLanguage } from 'react-icons/hi2';
import Home from 'pages/Home';
import Stories from 'pages/Stories';
import Wishes from 'pages/Wishes';
import { useTranslation } from 'react-i18next';
import styles from './style.module.scss';

function App() {
    const { i18n } = useTranslation();

    const onLangBtnClick = () => {
        if (i18n.language === 'ru') {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('ru');
        }
    };
    return (
        <div className={styles.appContainer}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/stories" element={<Stories />} />
                <Route path="/wishes" element={<Wishes />} />
            </Routes>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button className={styles.langBtn} type="button" onClick={onLangBtnClick}>
                <HiLanguage />
            </button>
        </div>
    );
}

export default App;
