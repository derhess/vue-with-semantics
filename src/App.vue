<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <with-microformats testProp="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import WithMicroformats from './components/WithMicroformats.vue';

export default {
  name: 'app',
  components: {
    WithMicroformats
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
