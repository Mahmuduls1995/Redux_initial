// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// state
const initialCounterState = {
    count: 0,
};

// action - Object- 2 important part > type, payload
const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
};

const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
};


// create reducer for counter this is Pure Function This input get and return Output

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            state;
    }
};


