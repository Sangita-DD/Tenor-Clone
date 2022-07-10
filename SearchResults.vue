<template>
    <div class="results-container">
        <h2 class="container-title">Search Results for {{ searchTerm }}</h2>
        <div class="featured">
            <div class="gifs-display" >
                <gif-display v-for="result in searchResults" :key="result.id" :tags="result.tags" 
                    :gifsrc="result.media[0].gif.url" :giflink="result.itemurl"/>
            </div>
        </div>
    </div>
</template>
<script>
import GifDisplay from './../components/GifDisplay.vue';
import {mapGetters} from 'vuex';
export default {
    data() {
        return {
            searchTerm: 1,
        }
    },
    components: { GifDisplay },
    computed: {
        ...mapGetters({
            searchResults: 'getSearchResults'
        })
    },
    mounted(){
        if(this.$route.params.searchTerm){
            this.searchTerm = this.$route.params.searchTerm;
            this.$store.dispatch("searchForGIFs", this.searchTerm);
        }
    }
}
</script>