<template>
    <div class="gif-container" @click="beginSearch">
        <div class="trending-gif" v-if="gifSrc || URLFromtrendingTerm" :style="getURL"></div>
        <div class="trending-gif" v-else></div>
        <div class="info">
            <span class="searchterm">{{ searchTerm }}</span>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    name: 'TrendingGif',
    props: {
        gifSrc: {
            type: String,
            default: ""
        },
        searchTerm: {
            type: String,
            default: ""
        }
    },
    methods:{
        beginSearch(){
            this.$navigate('SearchViewDetail', {searchTerm: this.searchTerm});
        },
    },
    computed:{
        ...mapGetters({
            trendingTermURLMap: 'getURLFromTrendingTerm'
        }),
        getURL(){
            let src = this.gifSrc || this.URLFromtrendingTerm;
            return 'background-image:url("' + src + '")';
        },
        URLFromtrendingTerm(){
            return this.trendingTermURLMap[this.searchTerm];
        }
    },
    watch:{
        searchTerm : {
            handler() {
                if(this.searchTerm) {
                    this.$store.dispatch("searchWithTrendingTerm", this.searchTerm);
                }
            }
        },
    }
}
</script>
<style scoped>
.info{
    overflow: hidden;
    padding-top: 5px;
}
.trending-gif{
    background-color: grey;
    background-position: 50%;
    background-size: cover;
    border-radius: 5px;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 5%), 0 2px 4px 0 rgb(0 0 0 / 8%);
    height: 90px;
    position: relative;
    width: 100%;
}
.searchterm{
    padding-top: 5px;
    color: #000;
    font-family: Inter,helvetica,arial,sans-serif;
    font-size: 16px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
}
.gif-container{
    display: inline-block;
    margin: 0 10px;
    position: relative;
    vertical-align: top;
    width: calc(20% - 20px);
    cursor: pointer;
}
</style>