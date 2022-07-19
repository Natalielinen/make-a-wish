import React from 'react';
import styles from './styles.module.scss';

const HeroSection = ({title}) => {
    return (
        <section className={styles.hero}>
            <div className={styles.center}>
                <h1>{title}</h1>
                <div className={styles.mainStar}></div>
            </div>
        </section>
    );
};

export default HeroSection;

