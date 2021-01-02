const state = {
    items: []
}


const getters = {}


const actions = {
    async LOAD_FROM_LOCALSTORAGE({commit}) {
        const rawItems = await localStorage.getItem('items')
        let items = []

        if (rawItems && rawItems.length) {
            try {
                items = await JSON.parse(rawItems)
            } catch (e) {
                items = []
            }
        }

        commit('SET_ITEMS', items)
    },
    async SAVE_TO_LOCALSTORAGE({state}) {
        await localStorage.setItem('items', JSON.stringify(state.items))
    },

}


const mutations = {
    SET_ITEMS(state, items) {
        state.items = items
    },
    ADD_ITEM(state, item) {
        state.items.push(item)
    },
    UPDATE_ITEM(state, { index, item }) {
        if (state.items[index]) {
            Object.assign(state.items[index], item)
        }
    },
    DELETE_ITEM(state, index) {
        state.items.splice(index, 1)
    },
}


export default {
    state,
    getters,
    actions,
    mutations
}