import { LOGIN_USER } from "../actions/types";

//STEP 2 - stating initial state and defining actions
//This is the default state
const initialState ={
    loggedInUser:{},
};

const userReducer = (state = initialState, action) => {
    const {type, payload} = action 
    switch (type) {
    case LOGIN_USER:
        return{
            ...state,
            loggedInUser: payload
        }     

    default:
        return state;//returns default state if no data is fetched
    }
}
export default userReducer;