<template>
  <div class="home">
    <trending-gifs-viewer/>
    <featured-gif-viewer/>
  </div>
</template>

<script>
import FeaturedGifViewer from '../components/FeaturedGifViewer.vue'
import TrendingGifsViewer from '../components/TrendingGifsViewer.vue'

export default {
  components: { TrendingGifsViewer, FeaturedGifViewer },
  name: 'Home',
}
</script>
<style scoped>
</style>
