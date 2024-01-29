import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../../components/HeroSection';
import MainSection from '../../components/MainSection';
import Footer from '../../components/Footer';

const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            <HeroSection title={t('Загадай желание')} />
            <MainSection />
            <Footer />
        </>
    );
};

export default Home;
