<template>
    <div class="gif-container" @mouseover="toogleTag(true)" @mouseleave="toogleTag(false)">
        <!-- <a :href="giflink" > -->
            <figcaption v-if="displayTags && hasTag" class="tags">
                <ul>
                    <li v-for="tag in tags" :key="tag" @click="beginSearch(tag)">#{{tag}}</li>
                </ul>
            </figcaption>
            <img :src="gifsrc" />
        <!-- </a> -->
    </div>
</template>
<script>
export default {
    name: 'GifDisplay',
    props: {
        gifsrc: {
            type: String,
            default: ""
        },
        tags: {
            type: Array,
            default: []
        },
        giflink: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            displayTags : false
        }
    },
    methods:{
        toogleTag(value){
            this.displayTags = value;
        },
        beginSearch(tag){
            this.$navigate('SearchViewDetail', {searchTerm: tag});
        },
    },
    computed:{
        hasTag(){
            return this.tags.length>0;
        }
    }
}
</script>
<style scoped>
.gif-container{
    cursor: pointer;
    margin: 20px 10px;
    width: calc(25% - 40px);
    display: inline-block;
    overflow: hidden;
}
.gif-container img{
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 5%), 0 2px 4px 0 rgb(0 0 0 / 8%);
}
.tags {
    position: absolute;
    width: calc(25% - 40px);
    color: #fff;
    font-family: Inter,helvetica,arial,sans-serif;
    font-size: 15px;
    font-weight: 600;
    padding-left: 10px;
    pointer-events: auto;
    text-overflow: ellipsis;
    text-shadow: 0 0 1px #000;
}
.tags ul{
    margin-bottom: 0;
    list-style: none;
    padding-left: 0;
}
.tags li{
    display: inline-block;
    list-style: none;
}
</style>