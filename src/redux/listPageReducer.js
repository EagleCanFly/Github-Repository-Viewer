import {ListAPI} from "../API/api";

const SET_REPS = 'SET_REPS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    ON_SEARCH_KEY_UP ='ON_SEARCH_KEY_UP',
    TOGGLE_LIST_PAGE = 'TOGGLE_LIST_PAGE',
    SET_CONTRIBUTORS = 'SET_CONTRIBUTORS',
    SET_CURRENT_PORTION = 'SET_CURRENT_PORTION'

const  initialState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {
    list: null,
    items: [],
    contributors: [],
    topTen: [],
    currentPage: 1,
    currentPortion: 1,
    searchValue: '',
    lastSearchValue: 'stars:>=10000',
    isListPageActive: true,
    isRepositoryPageActive: false
};

const listPageReducer = (state = initialState, action) => {
    localStorage.setItem('state',JSON.stringify(state));
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
        case TOGGLE_LIST_PAGE: {
            return {
                ...state,
                isListPageActive: action.value
            }
        }
        case SET_CONTRIBUTORS: {
            return {
                ...state,
                contributors: [...action.contributors]
            }
        }
        case SET_CURRENT_PORTION: {
            return {
                ...state,
                currentPortion: action.currentPortion

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
export const toggleListPage = (value) => {
    return {
        type: TOGGLE_LIST_PAGE,
        value
    }
}
export const setContributors = (contributors) => {
    return {
        type: SET_CONTRIBUTORS,
        contributors
    }
}
export const setCurrentPortion = (currentPortion) => {
    return {
        type: SET_CURRENT_PORTION,
        currentPortion
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

        ListAPI.getList(page, lastSearchValue).then(response => {

            dispatch(setReps(response.data));
            dispatch(setCurrentPage(page, lastSearchValue));
        })

    }
}
export const search = (page,query) => {
    return (dispatch) => {
        dispatch(setCurrentPage(1,query));
        dispatch(setCurrentPortion(1));
        ListAPI.getList(1, query).then(response => {
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
        ListAPI.getTopTen().then(response => {
            dispatch(setReps(response.data));
        })

    }
}