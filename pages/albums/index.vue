<template>
  <div id="albums">
    <div class="row">
      <div
        v-for="album in $store.state.albums"
        :key="album.title[0].value"
        class="col-md-3 col-sm-12"
      >
        <div class="card">
          <img
            class="card-img-top album_img"
            :src="album.field_album[0].url"
            :alt="album.field_album[0].alt"
          />
          <div class="card-body">
            <h5 class="card-title album_title">{{ album.title[0].value }}</h5>
            <div class="card-text">
              <p>
                <strong>Artist :</strong>
                <span>{{
                  album.field_artist[0] && album.field_artist[0].value
                }}</span>
              </p>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Albums',
  async fetch(context) {
    await context.store.dispatch('getAlbums')
  }
}
</script>
