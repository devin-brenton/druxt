<template>
  <h1>{{ artistName }}</h1>
</template>

<script>
export default {
  data() {
    return {
      artistName: this.$route.params.slug
    }
  }
}
</script>

<style></style>
