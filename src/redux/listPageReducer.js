import {ListAPI} from "../API/api";

const SET_REPS = 'SET_REPS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    ON_SEARCH_KEY_UP ='ON_SEARCH_KEY_UP',
    SET_CONTRIBUTORS = 'SET_CONTRIBUTORS',
    TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'

const  initialState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {
    items: [],
    contributors: [],
    currentPage: 1,
    searchValue: '',
    lastSearchValue: 'stars:>=10000',
    isLoading: false
};

const listPageReducer = (state = initialState, action) => {
    localStorage.setItem('state',JSON.stringify(state));
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
                currentPage: action.currentPage,
                lastSearchValue: action.lastSearchValue
            }
        }
        case ON_SEARCH_KEY_UP: {
            return {
                ...state,
                searchValue: action.searchValue,
                lastSearchValue: action.searchValue
            }
        }
        case SET_CONTRIBUTORS: {
            return {
                ...state,
                contributors: [...action.contributors]
            }
        }
        case TOGGLE_IS_LOADING: {
            return {
                ...state,
                isLoading: action.value
            }
        }
        default:
            return state;

    }
}
export default listPageReducer;

// action creators
export const setReps = (items) => {
    return {
        type: SET_REPS,
        items
    }
}
export const setCurrentPage = (currentPage,lastSearchValue) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
        lastSearchValue

    }
}
export const onSearchKeyUp = (searchValue) => {
    return {
        type: ON_SEARCH_KEY_UP,
        searchValue
    }
}
export const setContributors = (contributors) => {
    return {
        type: SET_CONTRIBUTORS,
        contributors
    }
}
export const toggleIsLoading = (value) => {
    return {
        type: TOGGLE_IS_LOADING,
        value
    }
}

// thunks
export const getRep = (page, query) => {
    return (dispatch) => {
            ListAPI.getList(page,query).then(response => {
                dispatch(setReps(response.data));
            })

    }
}
export const getContributors = (login, repository) => {
    return (dispatch) => {
        ListAPI.getContributorsList(login, repository).then(response => {
            dispatch(setContributors(response.data));
        })

    }
}
export const onPageChange = (page,  lastSearchValue) => {

    return (dispatch) => {
        dispatch(setCurrentPage(page, lastSearchValue));
        dispatch(toggleIsLoading(true));
        ListAPI.getList(page, lastSearchValue).then(response => {
            dispatch(toggleIsLoading(false));
            dispatch(setReps(response.data));
        })

    }
}
export const search = (page,query) => {
    return (dispatch) => {
        dispatch(toggleIsLoading(true));
        dispatch(setCurrentPage(1,query));
        ListAPI.getList(1, query).then(response => {
            dispatch(toggleIsLoading(false));
            if (response.data.total_count === 0) {
                alert('No matches were found');
                return;
            }
            dispatch(setReps(response.data));
        })

    }
}
export const getTopTen = () => {
    return (dispatch) => {
        dispatch(toggleIsLoading(true));
        ListAPI.getTopTen().then(response => {
            dispatch(toggleIsLoading(false));
            dispatch(setCurrentPage(1,'stars:>=10000'));
            dispatch(setReps(response.data));
        })

    }
}