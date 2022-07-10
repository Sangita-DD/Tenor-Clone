<template>
  <div id="app">
    <div id="logo">
      <div id="container" @click="$navigate('Home')">
        <!-- <a href="www.tenor.com"/> -->
        <img src="./assets/tenor-logo.svg" width="80" height="22" alt="Tenor" itemprop="logo" />
      </div>
    </div>
    <div id="search">
      <search-bar :placeholder=search_placeholder :enterKeyHandler=search_enterhandler :hasButton=true />
      <router-link to="/"></router-link>
      <router-link to="/search"></router-link>
    </div>
    <div id="gif-view">
    </div>
    <router-view/>
  </div>
</template>
<script>
import SearchBar from './components/SearchBar.vue'
import Home from './views/Home.vue'
export default {
  components: { SearchBar, Home },
  name: 'App',
  data(){
    return {
      search_placeholder:"Search for GIFs and Stickers",
      search_enterhandler: (inputText)=>{
        if(inputText){
          this.$navigate('SearchViewDetail', {searchTerm: inputText});
        }
      }
    }
  },
}
</script>
<style>
#app {
  height: 100%;
  width: 1905px;
}
#logo{
  height: 50px;
  width: 100%;
}
#search{
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 2;
}
#container{
  position: relative;
  max-width: 1140px;
  margin: auto;
  padding: 14px 0 0 15px;
  cursor: pointer;
}
.gifs-display{
    flex-basis: 0;
    flex-grow: 1;
    height: 100%;
    margin: 0;
    position: relative;
    top: 0;
}
.results-container{
    max-width: 1140px;
    justify-content: center;
    overflow: hidden;
    position: relative;
    margin: auto;
}
.container-title{
    font-family: Inter var,helvetica,arial,sans-serif;
    font-size: 25px;
    font-weight: 700;
    padding-top: 30px;
    margin-top: 0px;
    margin-left: 15px;
}
</style>
