import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: [
        'stories Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor eros non cursus hendrerit. Cras id lectus non orci ornare rhoncus. Curabitur mollis ante ac consectetur pulvinar.',
        'stories Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor eros non cursus hendrerit. Cras id lectus non orci ornare rhoncus. Curabitur mollis ante ac consectetur pulvinar.',
        'stories Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor eros non cursus hendrerit. Cras id lectus non orci ornare rhoncus. Curabitur mollis ante ac consectetur pulvinar.',
        'stories Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor eros non cursus hendrerit. Cras id lectus non orci ornare rhoncus. Curabitur mollis ante ac consectetur pulvinar.',
        'stories Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor eros non cursus hendrerit. Cras id lectus non orci ornare rhoncus. Curabitur mollis ante ac consectetur pulvinar.',
    ]

};

const storiesSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {
        addStory: (state, action) => {
            state.items = [action.payload, ...state.items]
        }

    }
});

export const {addStory} = storiesSlice.actions;

export default storiesSlice.reducer;