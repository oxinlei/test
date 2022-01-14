<template>
  <div id="app">
    <router-view/>
<!--    <PopUp/>-->
  </div>
</template>

<script>
import PopUp from "./components/PopUp";
export default {
  name: 'App',
  components: {
    PopUp
  },
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
