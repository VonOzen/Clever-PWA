const appReducer = (state = {
    bgColorClass: "red"
}, action) => {
    switch (action.type) {
        case "CHANGE_BGCOLOR":
            state = {
                ...state,
                bgColorClass: action.payload
            }
            break;
        default:
            break;
    }
    return state;
};

export default appReducer;
