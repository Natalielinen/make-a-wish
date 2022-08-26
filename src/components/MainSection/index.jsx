import React, {memo, useEffect, useState} from 'react';
import {BsQuestionCircle} from 'react-icons/bs';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import CardsContainer from '../CardsContainer';
import styles from './styles.module.scss';
import Modal from '../Modal';
import {addWish} from '../../redux/slices/whishesSlice';

const MainSection = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [phrases, setPhrases] = useState([])
    const [phrase, setPhrase] = useState({})
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

    const onMakeWish = (wish) => {

        const size = wish.length < 60 ? `${wish.length}px` : `${Math.round(wish.length / 5)}px`;

        const newWish = {
            id: String(new Date()),
            wish: wish,
            top: Math.round(Math.random() * 900),
            left: Math.round(Math.random() * 1920),
            width: size,
            height: size,
        }

        dispatch(addWish(newWish))

        setInputValue('')
    }

    const fetchData = async () => {
        const res = await axios.get('https://type.fit/api/quotes')
        setPhrases(res.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        const random = Math.round(Math.random() * phrases.length)
        setPhrase(phrases[random])
    }, [phrases])

    return (
        <section className={styles.mainSection}>
            <div className={styles.top}>
                <div className={styles.blockquoteContainer}>
                    <blockquote>“{phrase?.text}” - by {phrase?.author}</blockquote>
                </div>
                <div className={styles.inputContainer}>
                    <input type="text" placeholder="Enter your wish..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <BsQuestionCircle onClick={() => setIsModalVisible(!isModalVisible)}/>
                    {
                        isModalVisible && <Modal setIsVisible={setIsModalVisible}>
                            <div className={styles.rules}>
                                <h3>Wishes Rules</h3>
                                <h4>Not allowed:</h4>
                                <ul>
                                    <li>Any insults</li>
                                    <li>Rude words</li>
                                    <li>Wishes for death, mutilation, etc.</li>
                                    <li>Humiliation in any forms</li>
                                </ul>
                                <p>* the site administration reserves the right to remove content that does not comply with the rules or of questionable content</p>
                                <p>** be careful what you wish for because your wishes tend to come true</p>
                            </div>
                        </Modal>
                    }
                </div>
                <div className={styles.buttonContainer}>
                    <button type="submit" onClick={() => onMakeWish(inputValue)}>Make a wish</button>
                </div>
            </div>
            <div className={styles.bottom}>
                <CardsContainer title="Stories" href="/stories"/>
                <div className={styles.divider}></div>
                <CardsContainer title="Wishes" href="/wishes"/>
            </div>
        </section>
    );
};

export default memo(MainSection);
