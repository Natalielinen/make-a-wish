import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Card from '../Card';
import styles from './styles.module.scss';

type ContentProps = {
    array: Array<string>
}

const Content = ({ array }: ContentProps) => (
    <section className={styles.container}>
        <NavLink to="/" className={styles.arrowBtn}>
            <BsFillArrowLeftCircleFill />
        </NavLink>
        {
            array.map((item) => <Card text={item} key={Math.random() * 10000} />)
        }
    </section>
);

export default Content;
