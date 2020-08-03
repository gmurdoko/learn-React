const initialState = {
    rooms: [],
};

const ExchangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ROOMS":
            return {
                ...state,
                rooms: action.rooms,
            };
        default:
            return state;
    }
};

export { ExchangeReducer };
