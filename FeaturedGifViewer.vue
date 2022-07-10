<template>
    <div class="results-container">
        <h2 class="container-title">Featured Gif</h2>
        <div class="featured">
            <div class="gifs-display" >
                <gif-display v-for="result in featuredResults" :key="result.id" :tags="result.tags" 
                    :gifsrc="result.media_formats.gif.url" />
                    <!-- :giflink="result.itemurl"/> -->
            </div>
        </div>
    </div>
</template>
<script>
import GifDisplay from './GifDisplay.vue';
import {mapGetters} from 'vuex';
export default {
    components: { GifDisplay },
    computed: {
        ...mapGetters({
            featuredResults: 'getFeaturedResults'
        })
    },
    mounted(){
        this.$store.dispatch("getFeaturedGIFs");
    }
}
</script>
<style scoped>
.featured {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: -20px -10px!important;
    position: relative;
}
</style>