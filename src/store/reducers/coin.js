export const GET_ALL_COINS = "GET_ALL_COINS";
export const GET_COIN_DETAILS = "GET_COIN_DETAILS";

const initialState = {
    coins: [],
    coinDetails: []
};

const coinReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_COINS:
            return { ...state, coins: action.payload };

        case GET_COIN_DETAILS:
            return { ...state, coinDetails: [].concat(action.payload) }

        default:
            return state;
    }
};
export default coinReducer;