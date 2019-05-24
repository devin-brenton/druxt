export const state = () => ({
  albums: undefined,
  artists: undefined
})

export const mutations = {
  setAlbums: (state, albums) => {
    state.albums = albums
  },
  setArtists: (state, artists) => {
    state.artists = artists
  }
}

export const actions = {
  getAlbums: async function({ state, commit }) {
    if (state.albums) return
    const { data } = await this.$axios.get(
      'http://localhost:8989/api/albumlist?_format=json'
    )
    commit('setAlbums', data)
  },
  getArtists: async function({ state, commit }) {
    if (state.artists) return
    const { data } = await this.$axios.get(
      'http://localhost:8989/api/artistlist?_format=json'
    )
    commit('setArtists', data)
  }
}
