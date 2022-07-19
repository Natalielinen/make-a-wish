import React, {useState} from 'react';
import {BsQuestionCircle} from 'react-icons/bs';
import CardsContainer from '../CardsContainer';
import styles from './styles.module.scss';
import Modal from '../Modal';

const MainSection = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <section className={styles.mainSection}>
            <div className={styles.top}>
                <div className={styles.blockquoteContainer}>
                    <blockquote>“Some wise words” - by Some Wise Old Person</blockquote>
                </div>
                <div className={styles.inputContainer}>
                    <input type="text" placeholder="Enter your wish..."/>
                    <BsQuestionCircle onClick={() => setIsModalVisible(!isModalVisible)}/>
                    {
                        isModalVisible && <Modal setIsVisible={setIsModalVisible}>
                            <div className={styles.rules}>
                                <h3>Wishes Rules</h3>
                                <ul>
                                    <li>one</li>
                                    <li>two</li>
                                    <li>three</li>
                                    <li>four</li>
                                    <li>five</li>
                                </ul>
                            </div>
                        </Modal>
                    }
                </div>
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
