import React, {useState} from 'react';
import styles from './styles.module.scss';
import {FiPlus} from 'react-icons/fi';
import Card from '../Card';
import Modal from '../Modal';

const storiesCards = [
    'Stories Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor eros non cursus hendrerit. Cras id lectus non orci ornare rhoncus. Curabitur mollis ante ac consectetur pulvinar.',
    'Stories Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor eros non cursus hendrerit. Cras id lectus non orci ornare rhoncus. Curabitur mollis ante ac consectetur pulvinar.',
    'Stories Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor eros non cursus hendrerit. Cras id lectus non orci ornare rhoncus. Curabitur mollis ante ac consectetur pulvinar.',
];

const wishesCards = [
    'wishes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor eros non cursus hendrerit. Cras id lectus non orci ornare rhoncus. Curabitur mollis ante ac consectetur pulvinar.',
    'wishes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor eros non cursus hendrerit. Cras id lectus non orci ornare rhoncus. Curabitur mollis ante ac consectetur pulvinar.',
    'wishes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor eros non cursus hendrerit. Cras id lectus non orci ornare rhoncus. Curabitur mollis ante ac consectetur pulvinar.',
    'wishes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor eros non cursus hendrerit. Cras id lectus non orci ornare rhoncus. Curabitur mollis ante ac consectetur pulvinar.',
];

const CardsContainer = ({title, href}) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2>{title}</h2>
                {title === 'Stories' && <div className={styles.iconContainer}>
                    <FiPlus onClick={() => setIsModalVisible(!isModalVisible)}/>
                    {
                        isModalVisible &&
                        <Modal setIsVisible={setIsModalVisible}>
                            <div className={styles.addStoryModal}>
                                <h3>Add your story</h3>
                                <textarea name="add-story" id="addStory" cols="30" rows="10"></textarea>
                                <button type="submit">Add story</button>
                            </div>
                        </Modal>
                    }
                </div>}
            </div>
            {
                title === 'Stories'
                    ? storiesCards.slice(0, 3).map(text => <Card text={text}/>)
                    : wishesCards.slice(0, 3).map(text => <Card text={text}/>)
            }
            {
              title ===  'Stories' && storiesCards.length > 3 ?  <a href={href}>Read more...</a> : ''
            }
            {
                title === 'Wishes' && wishesCards.length > 3 ? <a href={href}>Read more...</a> : ''
            }
        </div>
    );
};

export default CardsContainer;
