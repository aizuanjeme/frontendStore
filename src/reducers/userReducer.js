

const initialState = {
    exercises: [],
    profile: {
        phoneno: "",
        address: "",
        firstName: "",
        lastName: "",
        status: "",
    }
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_EXERCISE:
            return {
                ...state,
                profile: action.payload
            }
        default:
            return state;

    }
}
export default userReducer;