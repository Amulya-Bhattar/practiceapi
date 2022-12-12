import { INCREMENT } from "../actions/FollowerAction";

const FollowerReducer = (state = { followers: 0 }, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                followers: state.followers + 1
            };
        default:
            return {followers: state.followers};

    }
};

export { FollowerReducer };