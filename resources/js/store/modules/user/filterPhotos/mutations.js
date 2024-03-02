export const mutations = {

    setFilterTag (state, payload) {
        state.filterTag = payload;
    },

    setFilterCustomTag (state, payload) {
        state.filterCustomTag = payload;
    },

    setFilterDateFrom (state, payload) {
        state.filterDateFrom = payload;
    },

    setFilterDateTo (state, payload) {
        state.filterDateTo = payload;
    },

    setFilterPhotosPaginationAmount (state, payload) {
        state.paginationAmount = payload;
    }
}
