import React from 'react';
import styles from './styles.module.scss';
import {NavLink} from 'react-router-dom';

const HeroSection = ({title}) => {
    return (
        <section className={styles.hero}>
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

