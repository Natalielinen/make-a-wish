import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

const Footer = () => {
    const { t } = useTranslation();
    return (

        <footer className={styles.footer}>
            <p>{t('Здесь вы можете загадать свое желание, каким бы странным оно не было')}</p>
        </footer>
    );
};

export default Footer;
