import mock from 'mock'

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
    // const { data } = await this.$axios.get(
    //   'http://localhost:8989/api/albumlist?_format=json'
    // )

    // mock drupal response
    const { data } = await Promise.resolve(mock.albumData)

    commit('setAlbums', data)
  },
  getArtists: async function({ state, commit }) {
    if (state.artists) return
    // const { data } = await this.$axios.get(
    //   'http://localhost:8989/api/artistlist?_format=json'
    // )

    // mock drupal response
    const { data } = await Promise.resolve(mock.artistData)

    commit('setArtists', data)
  }
}
