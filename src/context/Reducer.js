const loginReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true
            }
        case "LOGOUT":
            return {
                isFetching: false,
                user: null,
                error: false
            }
        case "UPDATEPIC_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "UPDATEPIC_SUCCESS":
            return {
                ...state,
                profilePic: action.payload,

                isFetching: false,
                error: false
            }
        case "UPDATEPIC_FAILURE":
            return {

                user: state.user,
                isFetching: false,
                error: true
            }
        default: return state
    }
}

export default loginReducer;