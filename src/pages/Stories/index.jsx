import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import Content from '../../components/Content';

const Stories = () => {

    const stories = useSelector(state => state.stories.items);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <HeroSection title="Stories"/>
            <Content array={stories}/>
            <Footer/>
        </>
    );
};

export default Stories;
