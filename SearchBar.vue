<template>
    <div class="search-container">
        <img v-if="showLogo" src="./../assets/tenor-logo-white.svg" width="80" height="22" alt="Tenor" itemprop="logo"/>
        <div class="input-container">
            <input id="search-bar" type="text" v-model.trim="searchInput" :placeholder="placeholder" v-on:keyup.enter="enterKeyHandler(searchInput)" />
            <button v-if="hasButton" id="search-btn" @click="enterKeyHandler(searchInput)" >
                <img src="./../assets/search-icon.png" height=40px width="40px"/>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SearchBar',
    props: {
        placeholder: {
            type: String,
            default: function() {
                return "Search";
            }
        },
        enterKeyHandler: {
            type: Function,
            default: () => {}
        },
        hasButton: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            searchInput: '',
            showLogo: false
        }
    }
}
</script>
<style scoped>
#search-btn{
    height: 50px;
    width : 50px;
    padding: 2.5px;
    border: 0;
    float: right;
    background-color: white;
    border-radius: 0 3px 3px 0;
    cursor: pointer;
}
#search-bar{
    height: 50px;
    border: 0;
    padding: 0;
    position: inherit;
    width: 1060px;
    font-weight: 600;
    font-family: Inter var,helvetica,arial,sans-serif;
    padding: 0 20px 0 20px;
    border-radius: 3px 0 0 3px;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 16%), 0 0 1px 0 rgb(0 0 0 / 8%);
}
.input-container{
    display: flex; 
    justify-content: center;
    max-width: 1140px;
    margin: auto;
}
.search-container{
    display: block;
    height: 50px;
    padding: 12px;
    z-index: 200;
    width: 100%;
    background-image: linear-gradient(90deg,#4cafff,#2e93e6);
}
</style>