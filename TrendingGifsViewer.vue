<template>
    <div class="trending-container">
        <h2 class="container-title"> Trending Tenor Searches</h2>
        <div class="trends">
            <div v-show="page>1" class="previous-btn scroll-btn" @click="loadPrevious">
                <img src="./../assets/arrow.png" height="10px" width="10px" />
            </div>
            <!-- <div class="gifs-display">
                <trending-gif v-for="index in allowedIndex" :key="index" :searchTerm="trendingResults[index].content_description" 
                    :gifSrc="trendingResults[index].media[0].gif.url" />
            </div> -->
            <div class="gifs-display">
                <trending-gif v-for="index in allowedIndex" :key="index" :searchTerm="trendingTerms[index]" />
            </div>
            <div v-show="(endIndex+1) < trendsResultSize" class="next-btn scroll-btn" @click="loadNext">
                <img src="./../assets/arrow.png" height="10px" width="10px" />
            </div>
        </div>
    </div>
</template>
<script>
import TrendingGif from './TrendingGif.vue';
import {mapGetters} from 'vuex';
export default {
    components: { TrendingGif },
    name:"TrendingGifsViewer",
    data() {
        return {
            page: 1,
            allowedNumbersPerSlide: 5
        }
    },
    methods:{
        loadPrevious(){
            this.page--;
        },
        loadNext(){
            this.page++;
        }
    },
    computed: {
        ...mapGetters({
            trendingResults: 'getTrendingResults',
            trendingTerms: 'getTrendingTerms'
        }),
        startIndex(){
            return (this.page * this.allowedNumbersPerSlide) - (this.allowedNumbersPerSlide);
        },
        endIndex(){
            let index = (this.page * this.allowedNumbersPerSlide) -1;
            if(index > this.trendsResultSize){
                return this.trendsResultSize-1;
            }else{
                return index;
            }
        },
        allowedIndex(){
            let allowedIndices = [];
            for(let index = this.startIndex; index <= this.endIndex; index++){
                allowedIndices.push(index);
            }
            return allowedIndices;
        },
        trendsResultSize(){
            return this.trendingResults.length;
        }
    },
    mounted(){
        this.$store.dispatch("getTrendingGIFs");
        this.$store.dispatch("getTrendingTerms");
    }
}
</script>
<style scoped>
.previous-btn img{
    transform: rotate(90deg);
    float: left;
}
.next-btn img{
    transform: rotate(-90deg);
    float: right;
}
.trends{
    display: flex;
}
.scroll-btn{
    width: 10px;
    height: 10px;
    margin: 62px 0 62px 0;
    cursor: pointer;
}
.trending-container{
    width: 1140px;
    justify-content: center;
    margin-bottom: 0!important;
    overflow: hidden;
    position: relative;
    margin: auto;
}
.gifs-display{
    transition: left .3s linear;
    width: 100%;
    max-width: 1140px;
}
</style>