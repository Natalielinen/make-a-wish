import React from 'react';
import styles from './styles.module.scss';

const Card = ({text}) => {
    return (
        <div className={styles.card}>
            {text}
        </div>
    );
};

export default Card;
