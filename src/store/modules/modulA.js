
const A = {
  state: {
    count: 3
  },
  mutations: {
    setCount: (state, data) => {
      state.count = data
    }
  },
  actions: {
    async countAsyn ({ state, commit }, newCount) {
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

export default A
