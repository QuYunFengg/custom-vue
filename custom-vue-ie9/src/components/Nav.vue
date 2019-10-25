<template>
    <nav class="navbar navbar-default navbar-fixed-top">
			<div class="footer container">
				<div class="navbar-header">
					<button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
					</button>
          <img src="../assets/logo.png" class="navbar-brand" style="width: 156px;height: 30px;padding:0px;marginTop: 10px;marginLeft: 10px;"/>
				</div>
				<div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-left text-uppercase">
						<li :class="path =='home' ? 'active': ''"><a :href="`${path =='home' ? '#home':''}`" :class="`header-font ${path =='home' ? 'active':''}`" @click="toUrl('home')">首页</a></li>
						<li><a  class="header-font" href="#transltor">翻译服务</a></li>
						<li class=""><a href="#" class="header-font">搜索译者</a></li>
						<li><a href="#" class="header-font">网文出海</a></li>
            <li :class="path =='contact' ? 'active': ''"><a :class="`header-font ${path =='contact' ? 'active':''}`" @click="toUrl('contact')">联系我们</a></li>
					</ul>
					<ul class="nav navbar-nav navbar-right text-uppercase">
						<li><a href="#" class="header-font">用户注册</a></li>
						<li><a href="#" class="header-font">译者注册</a></li>
						<li><a href="#" class="header-font">登录</a></li>
						<li class="dropdown padding-left" style="paddingLeft: 20px;">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CH <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">EN</a></li>
              </ul>
            </li>
					</ul>
				</div>
			</div>
		</nav>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      slide: 0,
      text: 123
    }
  },
  mounted() {
    
  }
}
</script>
<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  },
  data() {
    return {
      path: 'home'
    }
  },
  watch: {
    $route: {
      handler: function(val, oldVal){
        console.log(val);
        this.path = val.name;
      },
      // 深度观察监听
      deep: true
    }
  },
  methods: {
    toUrl(path) {
      this.$router.push({name: path})
    }
  },
}
</script>

<style scoped lang="scss">
@media (max-width: 768px) {
  .header-font {
    margin-left: 0px!important;
  }
  .padding-left {
    padding-left:0!important;
  }
  .navbar-collapse .active {
    background: #16AB8E!important;
    a {
      color: #fff!important;
    }
  }
}
@media (min-width: 768px) {
  .container {
    width: 700px;
  }
  .footer.container{
    width: 700px;
  }
  .header-font.active {
    background: transparent!important;
    color: #000;
  }
}
@media (max-width: 768px) and (min-width: 992px) {
  .container {
    width: 900px;
  }
  .footer.container{
    width: 950px;
  }
  .header-font.active {
    background: transparent!important;
    color: #000;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1000px;
  }
  .footer.container{
    width: 1100px;
  }
  .header-font.active {
    background: transparent!important;
    color: #000;
  }
}
.padding-left {
  padding-left:20px;
}
.header-font {
    margin-left: 45px;
    font-size: 13px; 
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 4px;
    color: #000;   
}
.header-font.active {
    color: #16AB8E!important;   
    border-bottom: 1px solid #16AB8E;
}
ul li a {
  cursor: pointer;
}
</style>
