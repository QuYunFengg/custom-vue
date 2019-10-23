<template>
  <div>
     <section id="transltor">
        <div class="container">
            <div class="row">
                <div class="col-md-6 fadeInLeft">
                    <div class="row">
                        <div class="col-md-12" style="textAlign: left">
                        <h1 style="color: #16AB8E;marginLeft: -5px;">Contact Us</h1>
                        <p style="marginTop: 20px;font-size: 16px;lineHeight: 1px;">Anytime Anywhere</p>
                        <p style="font-size: 16px;">Direct trading whit translators to optimize translation quality,speed,price</p>
                        <p style="font-size: 16px;marginTop: 18px;"><span style="color: #16AB8E">随时随地</span>·与翻译人员直接交易，优化翻译质量、速度、价格</p> 
                    </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
        <div class="menu-main">
            <div class="container" style="textAlign: left">
                <span class="font-text">中国市场</span>
                <span class="font-text active">越南语市场</span>
                <span class="font-text">英语市场</span>
                <span class="font-text">泰语市场</span>
                <span class="font-text">俄语市场</span>
                <span class="font-text">阿语市场</span>
                <span class="font-text">韩国市场</span>
            </div>
        </div>
    </section>

    <section id="about">
			<div class="container">
                <div class="row" style="background: #F5F5F7">
                    <div class="col-md-9" style="paddingLeft: 0px;">
                        <img src="../assets/图层232.png" class="img-responsive" alt="feature img">
                    </div>
                    <div class="col-md-3 fadeInRight" style="padding: 0px;">
                        <div class="row" style="marginTop: 45px;paddingLeft: 20px;">
                            <div class="col-md-12 contact-content" style="textAlign: left">
                                <p style="">+86 15129272512</p>
                                <p style="">+86 02985795672</p>
                                <p style="">HI@Hitranslator.com</p>
                                <p style="marginTop: 25px;marginLeft: -3px;color: #16AB8E;font-weight: bold">【版权合作】</p>
                                <p style="">党女士：13312341234</p>
                                <p style="">bd@Hitranslator.com</p>
                                <p style="marginTop: 25px;marginLeft: -3px;font-weight: bold">【<span style="color: #16AB8E">发行合作</span>】</p>
                                <p style="">王先生：15129272512</p>
                                <p style="marginTop: 25px;color: #16AB8E;font-weight: bold">西安市科技路8号凯丽大厦东区405</p>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
		</section>
  </div>
</template>

<script>

export default {
  name: 'contact',
  data() {
    return {
    }
  },
  mounted() {
      
  },
  methods: {
    
  },
}
</script>

<style scoped lang="scss">
#transltor{
  background: #fff;
  padding-top: 80px;
  padding-bottom: 100px;
  background: url('../assets/图层228.png') no-repeat;
  background-size: cover;
  position: relative;
}

.menu-main {
    position: absolute;
    bottom: 0px;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    height: 50px;
}

.font-text {
    width: 12%;
    display: inline-block;
    height: 50px;
    font-size: 16px;
    color: #fff;
    line-height: 50px;
    text-align: center;
    overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
}
.font-text.active {
    background: #3F9989;
}

.contact-content p {
    margin: 5px;
}

#static {
  background: #fff;
  padding-top: 80px;
  padding-bottom: 80px;
}
.static-tip {
  margin-bottom: 30px;
}
.static-tip p:nth-child(1) {
  font-size: 44px;
  color: #16AB8E;
  font-weight: 600;
}
.static-tip p:nth-child(2) {
  font-size: 30px;
  color: #000;
}
#about {
  background: #fff;
  padding-bottom: 80px;
  padding-top: 80px;
}
.img-responsive {
  width: 100%;
}
</style>
