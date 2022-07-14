import React from 'react';
import styles from './styles.module.scss';

const HeroSection = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.center}>
                <h1>Make a wish</h1>
                <div className={styles.mainStar}></div>
            </div>
        </section>
    )
}

export default HeroSection;
