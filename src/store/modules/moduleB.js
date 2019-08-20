
const B = {
  state: {
    countB: 3
  },
  mutations: {
    setCount: (state, data) => {
      state.countB = data
    }
  },
  actions: {
    async countBAsyn ({ state, commit }, newCount) {
      try {
        if (!newCount) throw Error('count can not be null')
        let params = {}
        let { data } = await this.$axios.get(`/api/v1/tags/${newCount}`, { params })
        commit('setCount', data)
      } catch (e) {
        commit('setCount', {})
        throw e
      }
    }
  }
}

export default B
