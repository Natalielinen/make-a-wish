import React from 'react';
import styles from './styles.module.scss';
import {FiPlus} from 'react-icons/fi';

const CardsContainer = ({title, href}) => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2>{title}</h2>
                {title === 'Stories' && <div className={styles.iconContainer}><FiPlus/></div>}
            </div>
            card 1
            <a href={href}>Read more...</a>
        </div>
    )
}

export default CardsContainer;