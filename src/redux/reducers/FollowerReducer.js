import { INCREMENT,DECREMENT } from "../actions/FollowerAction";

const FollowerReducer = (state = { followers: 0 }, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                followers: state.followers + 1
            };
            case DECREMENT:
                if(state.followers > 0)
                return {    
                    followers: state.followers - 1
                };
        default:
            return {followers: state.followers};

    }
};

export { FollowerReducer };