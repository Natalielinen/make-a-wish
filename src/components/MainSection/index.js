import React from 'react';
import styles from './styles.module.scss';
import CardsContainer from '../CardsContainer';

const MainSection = () => {
    return (
        <section className={styles.mainSection}>
            <div className={styles.top}>
                <div className={styles.blockquoteContainer}>
                    <blockquote>“Some wise words” - by Some Wise Old Person</blockquote>
                </div>
                <div className={styles.inputContainer}><input type="text" placeholder="Enter your wish..."/></div>
                <div className={styles.buttonContainer}>
                    <button type="submit">Make a wish</button>
                </div>
            </div>
            <div className={styles.bottom}>
                <CardsContainer title="Stories" href="www.stories.com"/>
                <div className={styles.divider}></div>
                <CardsContainer title="Wishes" href="www.wishes.com"/>
            </div>
        </section>
    );
};

export default MainSection;