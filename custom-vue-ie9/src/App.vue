<template>
  <div id="app">
    <Nav />
    <router-view/>
    <Footer/>
    <div id="qrcode" class="qrcode-div hidden" @click="hideQrcode">
      <img src="./assets/微信图片_20191026094500.jpg" style="position: absolute;top: 50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);left: 50%"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav, Footer
  },
  watch:{
    $route(to,from){
      window.scrollTo(0 ,0);      
    },
  },
  mounted() {
  },
  methods:{
    hideQrcode() {
      $('#qrcode').addClass('hidden');
    },
  }
}
</script>


<style lang="scss">
.hidden {
  display: none;
}
.qrcode-div {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  transition: display 0.3s
}
.navbar {
  margin-bottom: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
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
