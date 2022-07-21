import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import styles from './styles.module.scss';

const HeroSection = ({title}) => {

    const stars = useSelector(state => state.wishes.stars);

    return (
        <section className={styles.hero}>
            {
                stars.map(star => (
                    <div
                        title={star.wish}
                        key={star.id}
                        className={styles.star}
                        style={{
                            width: star.width,
                            height: star.height,
                            top: star.top,
                            left: star.left
                        }}></div>
                ))
            }
            <div className={styles.center}>
                <h1>{title}</h1>
                <NavLink to="/">
                    <div className={styles.mainStar}></div>
                </NavLink>
            </div>
        </section>
    );
};

export default HeroSection;
