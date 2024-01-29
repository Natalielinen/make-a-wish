import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState } from 'redux/store';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import Content from '../../components/Content';

const Stories = () => {
    const { t } = useTranslation();

    const stories = useSelector((state: RootState) => state.stories.items);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <HeroSection title={t('Истории')} />
            <Content array={stories} />
            <Footer />
        </>
    );
};

export default Stories;
