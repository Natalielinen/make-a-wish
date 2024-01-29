import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { addStory } from 'redux/slices/storiesSlice';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import Card from '../Card';
import Modal from '../Modal';

type CardsContainerProps = {
    title: string,
    href: string,
    data: Array<string>,
    isStories?: boolean
}

const CardsContainer = ({
    title, href, data, isStories = false,
}: CardsContainerProps) => {
    const { t } = useTranslation();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const onAddStory = (story: string) => {
        dispatch(addStory(story));
        setIsModalVisible(false);
        setValue('');
    };

    useEffect(() => {
        if (!isModalVisible) {
            setValue('');
        }
    }, [isModalVisible]);

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2>{title}</h2>
                {isStories && (
                    <div className={styles.iconContainer}>
                        <FiPlus onClick={() => setIsModalVisible(!isModalVisible)} />
                        {
                            isModalVisible
                        && (
                            <Modal setIsVisible={setIsModalVisible}>
                                <div className={styles.addStoryModal}>
                                    <h3>{t('Добавьте свою историю')}</h3>
                                    <textarea
                                        name="add-story"
                                        id="addStory"
                                        cols={30}
                                        rows={10}
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                    />
                                    <button
                                        type="submit"
                                        onClick={() => onAddStory(value)}
                                    >
                                        {t('Добавить')}
                                    </button>
                                </div>
                            </Modal>
                        )
                        }
                    </div>
                )}
            </div>
            {
                data.slice(0, 3).map((text) => <Card text={text} key={Math.random() * 100000} />)

            }
            {
                data.length > 3
                    ? (
                        <NavLink to={href}>{`${t('Читать еще')}...`}</NavLink>
                    )
                    : ''
            }

        </div>
    );
};

export default CardsContainer;
