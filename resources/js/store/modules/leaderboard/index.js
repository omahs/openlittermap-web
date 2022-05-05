import { actions } from "./actions";
import { mutations } from "./mutations";

const state = {
    currentPage: 1,
    hasNextPage: false,
    users: []
};

export const leaderboard = {
    state,
    actions,
    mutations
}