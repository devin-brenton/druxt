<template>
  <div id="artist">
    <div class="row">
      <div
        v-for="artist in $store.state.artists"
        :key="artist.title[0].value"
        class="col-md-3 col-sm-12"
      >
        <div class="card">
          <a :href="`/artists/${artist.title[0].value}`">
            <img
              class="card-img-top artist_img"
              :src="artist.field_artist_pic[0].url"
              :alt="artist.field_artist_pic[0].alt"
            />
          </a>
          <div class="card-body">
            <h5
              class="card-title album_title"
              :href="`/artists/${artist.title[0].value}`"
            >
              {{ artist.title[0].value }}
            </h5>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Artist',
  async fetch({ store }) {
    await store.dispatch('getArtists')
  }
}
</script>
