import React, {useEffect} from 'react';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import {useSelector} from 'react-redux';
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