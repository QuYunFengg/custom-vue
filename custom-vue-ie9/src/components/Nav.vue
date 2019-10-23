<template>
    <nav class="navbar navbar-default" role="navigation" style="margin-bottom: 0px;">
			<div class="container">
				<div class="navbar-header">
					<button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
					</button>
          <img src="../assets/logo.png" class="navbar-brand" style="width: 156px;height: 30px;padding:0px;marginTop: 10px;"/>
				</div>
				<div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-left text-uppercase">
						<li :class="path =='home' ? 'active': ''"><a href="#" :class="`header-font ${path =='home' ? 'active':''}`" @click="toUrl()">首页</a></li>
						<li><a href="#" class="header-font">翻译服务</a></li>
						<li class=""><a href="#" class="header-font">搜索译者</a></li>
						<li><a href="#" class="header-font">网文出海</a></li>
            <li><a href="#" class="header-font">联系我们</a></li>
					</ul>
					<ul class="nav navbar-nav navbar-right text-uppercase">
						<li><a href="#" class="header-font">用户注册</a></li>
						<li><a href="#" class="header-font">译者注册</a></li>
						<li><a href="#" class="header-font">登录</a></li>
						<li class="dropdown" style="paddingLeft: 20px;">
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
    toUrl() {
      this.$router.push('/')
    }
  },
}
</script>

<style scoped lang="scss">
@media (max-width: 768px) {
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
  .header-font.active {
    background: #fff!important;
    color: #000;
  }
  
}
@media (min-width: 992px) {
  .container {
    width: 900px;
  }
  .header-font.active {
    background: #fff!important;
    color: #000;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1000px;
  }
  .header-font.active {
    background: #fff!important;
    color: #000;
  }
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
</style>
