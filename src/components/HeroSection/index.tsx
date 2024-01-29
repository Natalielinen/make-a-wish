import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

type HeroSectionProps = {
    title: string
}

const HeroSection = ({ title }: HeroSectionProps) => {
    // @ts-ignore
    const stars = useSelector((state) => state.wishes.stars);

    //
    return (
        <section className={styles.hero}>
            {
                // @ts-ignore
                stars.map((star) => (
                    <div
                        title={star.wish}
                        key={star.id}
                        className={styles.star}
                        style={{
                            width: star.width,
                            height: star.height,
                            top: star.top,
                            left: star.left,
                        }}
                    />
                ))
            }
            <div className={styles.center}>
                <h1>{title}</h1>
                <NavLink to="/">
                    <div className={styles.mainStar} />
                </NavLink>
            </div>
        </section>
    );
};

export default HeroSection;
