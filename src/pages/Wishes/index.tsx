import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState } from 'redux/store';
import { Star } from 'redux/slices/whishesSlice';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import Content from '../../components/Content';

const Wishes = () => {
    const { t } = useTranslation();

    const stars = useSelector((state: RootState) => state.wishes.stars);

    const wishes = stars.map((star: Star) => star.wish);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <HeroSection title={t('Желания')} />
            <Content array={wishes} />
            <Footer />
        </>
    );
};

export default Wishes;
