import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function(createElement) {
		if ('-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style) {
			window.addEventListener('hashchange', () => {
				var currentPath = window.location.hash.slice(1)
				if (this.$route.path !== currentPath) {
					this.$router.push(currentPath)
				}
			}, false)
		}
		return createElement(App);
	}
}).$mount('#app')
