import React, { memo, useEffect, useState } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addWish, Star } from 'redux/slices/whishesSlice';
import { useTranslation } from 'react-i18next';
import { RootState } from 'redux/store';
import CardsContainer from '../CardsContainer';
import styles from './styles.module.scss';
import Modal from '../Modal';

type Quote = {
    text: string,
    author: string
}

type Wish = {
    id: string,
    wish: string,
    top: number,
    left: number,
    width: string,
    height: string,
}

const MainSection = () => {
    const { t } = useTranslation();

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [phrases, setPhrases] = useState<Array<Quote>>([]);
    const [phrase, setPhrase] = useState<Quote | null>(null);
    const [inputValue, setInputValue] = useState<string>('');

    const stars = useSelector((state: RootState) => state.wishes.stars);
    const stories = useSelector((state: RootState) => state.stories.items);
    const wishes = stars.map((star: Star) => star.wish);

    const dispatch = useDispatch();

    const onMakeWish = (wish: string) => {
        const size = wish.length < 60 ? `${wish.length}px` : `${Math.round(wish.length / 5)}px`;

        const newWish: Wish = {
            id: String(new Date()),
            wish,
            top: Math.round(Math.random() * 900),
            left: Math.round(Math.random() * 1920),
            width: size,
            height: size,
        };

        dispatch(addWish(newWish));

        setInputValue('');
    };

    const fetchData = async () => {
        const res = await axios.get('https://type.fit/api/quotes');

        setPhrases(res.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const random = Math.round(Math.random() * phrases.length);
        setPhrase(phrases[random]);
    }, [phrases]);

    return (
        <section className={styles.mainSection}>
            <div className={styles.top}>
                <div className={styles.blockquoteContainer}>
                    <blockquote>
                        “
                        {phrase?.text}
                        ” - by
                        {phrase?.author}
                    </blockquote>
                </div>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder={t('Напишите свое желание...')}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <BsQuestionCircle onClick={() => setIsModalVisible(!isModalVisible)} />
                    {
                        isModalVisible && (
                            <Modal setIsVisible={setIsModalVisible}>
                                <div className={styles.rules}>
                                    <h3>{t('Правила')}</h3>
                                    <h4>
                                        {t('Не разрешено')}
                                        :
                                    </h4>
                                    <ul>
                                        <li>{t('Оскорбления')}</li>
                                        <li>{t('Нецензурные слова')}</li>
                                        <li>{t('Желания смерти, увечий и так далее')}</li>
                                        <li>{t('Унижение в любых формах')}</li>
                                    </ul>
                                    <p>
                                        *
                                        {t('Все желания нарушающие правила, будут удалены')}
                                    </p>
                                    <p>
                                        **
                                        {/* eslint-disable-next-line max-len */}
                                        {t('Будьте осторожны со своими желаниями, ибо они имеют тенденцию сбываться')}
                                    </p>
                                </div>
                            </Modal>
                        )
                    }
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        type="submit"
                        onClick={() => onMakeWish(inputValue)}
                    >
                        {t('Загадай желание')}
                    </button>
                </div>
            </div>
            <div className={styles.bottom}>
                <CardsContainer title={t('Истории')} href="/stories" data={stories} isStories />
                <div className={styles.divider} />
                <CardsContainer title={t('Желания')} href="/wishes" data={wishes} />
            </div>
        </section>
    );
};

export default memo(MainSection);
