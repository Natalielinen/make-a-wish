import React, {useState} from 'react';
import styles from './styles.module.scss';
import {FiPlus} from 'react-icons/fi';
import Card from '../Card';
import Modal from '../Modal';
import {useSelector} from 'react-redux';

const CardsContainer = ({title, href}) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const wishes = useSelector(state => state.wishes.items)
    const stories = useSelector(state => state.stories.items)

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
                    ? stories.slice(0, 3).map(text => <Card text={text}/>)
                    : wishes.slice(0, 3).map(text => <Card text={text}/>)
            }
            {
              title ===  'Stories' && stories.length > 3 ?  <a href={href}>Read more...</a> : ''
            }
            {
                title === 'Wishes' && wishes.length > 3 ? <a href={href}>Read more...</a> : ''
            }
        </div>
    );
};

export default CardsContainer;
