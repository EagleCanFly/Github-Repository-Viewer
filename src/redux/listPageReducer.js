import {ListAPI} from "../API/api";

const SET_REPS = 'SET_REPS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    ON_SEARCH_KEY_UP ='ON_SEARCH_KEY_UP',
    TOGGLE_LIST_PAGE = 'TOGGLE_LIST_PAGE',
    SET_CONTRIBUTORS = 'SET_CONTRIBUTORS',
    SET_TOP_TEN = 'SET_TOP_TEN'

// const  initialState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {
//     list: null,
//     items: [],
//     contributors: [],
//     topTen: [],
//     currentPage: 1,
//     searchValue: '',
//     isListPageActive: true,
//     isRepositoryPageActive: false
// };
const initialState = {
    list: null,
    items: [],
    contributors: [],
    topTen: [],
    currentPage: 1,
    searchValue: '',
    isListPageActive: true,
    isRepositoryPageActive: false
};

const listPageReducer = (state = initialState, action) => {
    // localStorage.setItem('state',JSON.stringify(state));
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
// export const setTopTen = (items) => {
//     return {
//         type: SET_TOP_TEN,
//         items
//     }
// }

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
export const onPageChange = (page) => {
    debugger
    return (dispatch) => {
        ListAPI.getList(page).then(response => {
            dispatch(setCurrentPage(page));
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
export const getTopTen = () => {
    return (dispatch) => {
        ListAPI.getTopTen().then(response => {
            dispatch(setReps(response.data));
        })

    }
}