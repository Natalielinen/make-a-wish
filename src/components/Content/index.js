import React from 'react';
import {NavLink} from 'react-router-dom';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import Card from '../Card';
import styles from './styles.module.scss';

const Content = ({array}) => {
    return (
        <section className={styles.container}>
            <NavLink to='/' className={styles.arrowBtn}>
                <BsFillArrowLeftCircleFill />
            </NavLink>
            {
                array.map(item => <Card text={item}/>)
            }
        </section>
    )
}

export default Content;
