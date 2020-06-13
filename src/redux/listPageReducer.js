import {ListAPI} from "../API/api";

const SET_REPS = 'SET_REPS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    ON_SEARCH_KEY_UP ='ON_SEARCH_KEY_UP'

const initialState = {
    list: null,
    items: [],
    currentPage: 1,
    searchValue: '',
    
};
const listPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPS: {
            return {
                ...state,
                ...action.items,
                searchValue: ''
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case ON_SEARCH_KEY_UP: {
            return {
                ...state,
                searchValue: action.searchValue
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
export const onSearchKeyUp = (searchValue) => {
    return {
        type: ON_SEARCH_KEY_UP,
        searchValue
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
export const search = (page,query) => {
    return (dispatch) => {
        ListAPI.getList(1, query).then(response => {
            dispatch(setReps(response.data));
        })

    }
}