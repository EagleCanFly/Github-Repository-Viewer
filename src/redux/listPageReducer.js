import {ListAPI} from "../API/api";

const SET_REPS = 'SET_REPS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initialState = {
    list: null,
    items: [],
    currentPage: 1
};
const listPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPS: {
            return {
                ...state,
                ...action.items
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
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
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}


export default listPageReducer;

export const getRep = (page) => {
    return (dispatch) => {
            ListAPI.getList(page).then(response => {
                dispatch(setReps(response.data));
            })

    }
}
export const onPageChange = (page) => {
    return (dispatch) => {
        ListAPI.getList(page).then(response => {
            dispatch(setCurrentPage(page))
            dispatch(setReps(response.data));
        })

    }
}
