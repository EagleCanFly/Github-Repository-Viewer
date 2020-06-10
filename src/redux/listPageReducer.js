import {ListAPI} from "../API/api";

const SET_REPS = 'SET_REPS';

const initialState = {
    list: "listOfRepositories",
    items: []
};
const listPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPS: {
            return {
                ...state,
                items: action.items
            }
        }
        default:
            return state;

    }
}

export const setReps = (items) => {
    return {
        type: SET_REPS,
        items
    }
}

export default listPageReducer;

export const getRep = () => {
    return (dispatch) => {
        debugger
            ListAPI.getList().then(response => {
                dispatch(setReps(response.data.items));
            })

    }
}