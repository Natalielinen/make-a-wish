import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import {FiPlus} from 'react-icons/fi';
import Card from '../Card';
import Modal from '../Modal';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {addStory} from '../../redux/slices/storiesSlice';

const CardsContainer = ({title, href}) => {
    const textAreaValue = useSelector(state => state.stories.textAreaValue)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [value, setValue] = useState(textAreaValue)
    const stars = useSelector(state => state.wishes.stars)
    const stories = useSelector(state => state.stories.items)
    const wishes = stars.map(star => star.wish)

    const dispatch = useDispatch()

    const onAddStory = story => {
        console.log(story);
        dispatch(addStory(story))
        setIsModalVisible(false)
        setValue('')
    }

    useEffect(() => {
        if (!isModalVisible) {
            setValue('')
        }
    }, [isModalVisible])

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
                                <textarea name="add-story" id="addStory" cols="30" rows="10" value={value} onChange={e => setValue(e.target.value)}></textarea>
                                <button type="submit" onClick={() => onAddStory(value)}>Add story</button>
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
              title ===  'Stories' && stories.length > 3 ?  <NavLink to={href}>Read more...</NavLink> : ''
            }
            {
                title === 'Wishes' && wishes.length > 3 ? <NavLink to={href}>Read more...</NavLink> : ''
            }
        </div>
    );
};

export default CardsContainer;
