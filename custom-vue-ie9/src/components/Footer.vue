<template>
 
   
     <section id="footer-main" style="paddingTop: 0px;">
        <nav class="container">
          <div>
            <div class="navbar-header" style="height: 70px;">
              <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon icon-bar"></span>
                <span class="icon icon-bar"></span>
                <span class="icon icon-bar"></span>
              </button>
              <img src="../assets/logo.png" class="navbar-brand" style="width: 230px;height: 70px;"/>
            </div>
              <ul class="nav navbar-nav navbar-left text-uppercase">
                <li><a  class="header-font" @click="toUrl('about')">关于我们</a></li>
                <li><a  class="header-font" @click="toUrl('contact')">联系我们</a></li>
                <li><a href="#" class="header-font">招纳贤士</a></li>
              </ul>
              <ul class="nav navbar-nav navbar-right text-uppercase">
                <li><a><img src="../assets/12facebook.png" style="width: 30px;margin-top:10px;"/></a></li>
                <li><a><img src="../assets/Twitter.png" style="width: 30px;margin-top:10px;"/></a></li>
                <li><a><img src="../assets/微博.png" style="width: 30px;margin-top:12px;"/></a></li>
                <li><a><img src="../assets/微信.png" style="width: 30px;margin-top:12px;"/></a></li>
              </ul>
          </div>
        </nav>
        <hr style="border-bottom: 1px dashed #DBDBDB"/>
        <div class="container">
            <ul class="nav navbar-nav navbar-left text-uppercase">
              <li><a href="#" class="header-font">陕ICP备14000715号</a></li>
              <li><a href="#" class="header-font">西安有言在前网络k科技有限公司</a></li>
              <li><a href="#" class="header-font">&copy; Hitranslator Inc. 2019</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right text-uppercase">
              <li><a href="#" class="header-font">法律声明</a></li>
              <li><a href="#" class="header-font">隐私声明</a></li>
            </ul>
          </div>
    </section>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  },
  methods: {
    toUrl(path) {
      this.$router.push(`${path}`)
    }
  },  
}
</script>

<style scoped lang="scss">
#footer-main .header-font {
  color: #000;
  line-height: 50px;
}
hr {
    margin-top: 0px;
    margin-bottom: 0px;
    border: 0;
    border-top: 1px dashed #eee;
}
ul li a {
  cursor: pointer;
}
</style>
