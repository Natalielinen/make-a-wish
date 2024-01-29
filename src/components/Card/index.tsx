import React from 'react';
import styles from './styles.module.scss';

type CardProps = {
    text: string
}

const Card = ({ text }: CardProps) => (
    <div className={styles.card}>
        {text}
    </div>
);

export default Card;
