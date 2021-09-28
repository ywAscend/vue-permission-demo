<template>
  <div id="app">
    <transition :name="transition">
      <keep-alive :include="keepList">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    name:'app',
    data(){
      return{
        keepList:[],
        transition: 'slide-right'
      }
    },
    watch: {

    }
  }
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
ul,li{
  list-style: none;
}
html,
body {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
}
#app {
  display: flex;
  flex: 1;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 0.3s;
  position: absolute;
  width: 100%;
  left: 0;
}

.slide-right-enter {
  transform: translateX(-100%);
}

.slide-right-leave-active {
  transform: translateX(100%);
}

.slide-left-enter {
  transform: translateX(100%);
}

.slide-left-leave-active {
  transform: translateX(-100%);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
