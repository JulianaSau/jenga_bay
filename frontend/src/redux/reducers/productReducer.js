import { GET_PRODUCTS, GET_PRODUCT } from "../actions/types";

//STEP 2 - stating initial state and defining actions
//Thi sis the default state
const initialState ={
    products:[],
    productId:{},
};

const productReducer = (state = initialState, action) => {
    const {type, payload} = action 
    // STEP THREE
    // A new state is returned with the data from the endpoint
    // The GET USERS case is handled here
    switch (type) {
        case GET_PRODUCTS:
            return{
                ...state,
                products:payload
            }     
        case GET_PRODUCT:
            return{
                ...state,
                productId:payload
            } 
        default:
            return state;//returns defult state if no data is fetched
        }
}
export default productReducer;