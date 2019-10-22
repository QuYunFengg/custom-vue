<template>
 
   
    <nav class="navbar navbar-default" role="navigation" style="margin-bottom: 0px;">
			<div class="container">
				<div class="navbar-header">
					<button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
					</button>
          <img src="../assets/logo.png" class="navbar-brand" style="width: 130px;"/>
				</div>
				<div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-left text-uppercase">
						<li><a href="#" class="header-font">首页</a></li>
						<li><a href="#" class="header-font">翻译服务</a></li>
						<li><a href="#" class="header-font active">搜索译者</a></li>
						<li><a href="#" class="header-font">网文出海</a></li>
            <li><a href="#" class="header-font">联系我们</a></li>
					</ul>
					<ul class="nav navbar-nav navbar-right text-uppercase">
						<li><a href="#" class="header-font">用户注册</a></li>
						<li><a href="#" class="header-font">译者注册</a></li>
						<li><a href="#" class="header-font">登录</a></li>
						<li><a href="#" class="header-font">CH</a></li>
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
  }
}
</script>

<style scoped lang="scss">
@media (min-width: 768px) {
  .container {
    width: 700px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 900px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1000px;
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
