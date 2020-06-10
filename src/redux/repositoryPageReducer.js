const LOADED = 'LOADED';
const initialState = {
    rep: "rep"
};
const repositoryPageReducer = (state = null, action) => {
    switch (action.type) {
        case LOADED: {
            return null;
        }
        default:
            return state;
    }
}
export default repositoryPageReducer;

const onWakeUp = () => {
    return {
        type: LOADED
    }
}