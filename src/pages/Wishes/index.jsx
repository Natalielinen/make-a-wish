import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import Content from '../../components/Content';

const Wishes = () => {

    const stars = useSelector(state => state.wishes.stars);

    const wishes = stars.map(star => star.wish);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <HeroSection title="Wishes"/>
            <Content array={wishes}/>
            <Footer/>
        </>
    );
};

export default Wishes;
