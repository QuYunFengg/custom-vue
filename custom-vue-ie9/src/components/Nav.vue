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
          <ul class="nav navbar-nav navbar-left text-uppercase test-under-line" id="navs">
						<li id="1" :class="path =='home' ? 'active': ''"><a id="1a" :href="`${path =='home' ? '#home':''}`" :class="`header-font ${path =='home' ? 'active':''}`" @click="toUrl('home')">首页</a></li>
						<li id="2"><a id="2a"  class="header-font" href="#home" @click="toUrl('home')">翻译服务</a></li>
						<li id="3" class=""><a id="3a" href="#transltor" class="header-font" @click="toUrl('home')">搜索译者</a></li>
						<li id="4"><a  id="4a" href="#wheel" class="header-font" @click="toUrl('home')">网文出海</a></li>
            <li id="5" :class="path =='contact' ? 'active': ''"><a id="5a" :class="`header-font ${path =='contact' ? 'active':''}`" @click="toUrl('contact')">联系我们</a></li>
					</ul>
					<ul class="nav navbar-nav navbar-right text-uppercase">
						<li v-show="!isLogin"><a href="#" class="header-font">用户注册</a></li>
						<li v-show="!isLogin"><a href="#" class="header-font">译者注册</a></li>
						<li v-show="!isLogin"><a href="#" class="header-font" @click="isLogin=true">登录</a></li>
            <li v-show="isLogin" class="dropdown padding-left" style="paddingLeft: 20px;">
              <div class="dropdown-toggle siaze" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <div class="avator"></div>
                <span style="lineHeight: 50px;color:#777">小王</span>
                <span class="caret" style="color:#777"></span>
              </div>
              <ul class="dropdown-menu">
                <li><a @click="isLogin=false" >退出登录</a></li>
              </ul>
            </li>
            <li class="dropdown padding-left" style="paddingLeft: 20px;marginTop: -1px;">
              <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >CH <span class="caret"></span></a>
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
      path: 'home',
      isLogin: false
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
  mounted() {

  },
  methods: {
    toUrl(path) {
      this.$router.push({name: path})
    }
  },
}
</script>

<style scoped lang="scss">
.test-under-line  {
        li:last-child::after {
            position: relative;
            content: '';
            width: 52px;
            height: 1px;
            background: transparent;
            display: block;
            transition: .3s ease;
            left: 0;
        }
        /* 设置选中链接下划线颜色与位置 */
        li:nth-child(1).active~:last-child::after {
            background-color: #16AB8E;
            left: -340%;        /* 通过left使下划线向右移动4个li的大小距离 */
        }
        li a:hover{
          color: #16AB8E;
        }
        li:nth-child(2).active~:last-child::after {
            background-color: #16AB8E;
            left: -254%;        /* 通过left使下划线向右移动3个li的大小距离 */
        }
 
        li:nth-child(3).active~:last-child::after {
            background-color: #16AB8E;
            left: -153%;        /* 通过left使下划线向右移动2个li的大小距离 */
        }
 
        li:nth-child(4).active~:last-child::after {
            background-color: #16AB8E;
            left: -53%;        /* 通过left使下划线向右移动1个li的大小距离 */
        }
 
         li:nth-child(5).active:last-child::after {
            background-color: #16AB8E;
            left: 47%;
        }
        /* 设置鼠标悬停下划线颜色与位置 */
        li:nth-child(1):hover~:last-child::after {
            background-color: #16AB8E;
            left: -340%;
        }
 
        li:nth-child(2):hover~:last-child::after {
            background-color: #16AB8E;
            left: -254%;
        }
 
        li:nth-child(3):hover~:last-child::after {
            background-color: #16AB8E;
            left: -153%;
        }
 
        li:nth-child(4):hover~:last-child::after {
            background-color: #16AB8E;
            left: -53%;
        }
 
        li:nth-child(5):last-child:hover::after {
            background-color: #16AB8E ;
            left: 47%;
        }
}
        
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
.avator {
  width: 40px;
  height:40px;
  border-radius:100px;
  border: 1px solid #16AB8E;
  background: url('../assets/20150723115018_ma428.jpeg') no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  margin-bottom: -16px;
  margin-top: 6px;
  margin-right: 10px;
}
.siaze {
  height:50px;
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
}
ul li a {
  cursor: pointer;
}
</style>
