<template>
  <div>
    <!-- 导航条-->
    <Nav/>
    <!-- 输入框部分 -->
    <section id="home">
				<div class="container main-div">
					<div class="row">
						<div class="col-md-1"></div>
						<div class="col-md-10 wow fadeIn" data-wow-delay="0.3s">
							<h1 class="text-upper">首创T2C模式的云端翻译系统</h1>
							<p class="tm-white">覆盖多种语言，专业精准翻译的语言服务专家</p>
						</div>
            <div class="col-md-1"></div>
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <textarea class="main-input" placeholder="请输入或者粘贴您需要翻译的内容（200字/小时回稿速度）">
              </textarea>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-7">
              <span class="sub-tip">其它文档格式及合作请联系我们</span>
            </div>
            <div class="col-md-4">
              <span class="btn-input" style="marginLeft: 1.3rem;marginTop: 30px;">下一步</span>
            </div>
					</div>
				</div>
		</section>

    <section id="transltor">
			<div class="container">
				<div class="row">
					<div class="col-md-6 fadeInLeft">
            <div class="row">
            	<div class="col-md-10" style="textAlign: left">
                <h2 style="color: #16AB8E">Hitranslator快速找到所需译者</h2>
                <p style="marginTop: 20px;">聚集全球译者，链接用户和译者，让用户快速找到全球各地的译者，由译者为用户提供本地化服务</p>
                <p>您也可以<span style="color: #16AB8E">发布</span>招募信息，<span style="color: #16AB8E">查看</span>最新的招募项目</p>
              </div>
              <div class="col-md-10" style="textAlign: left;marginTop: 60px;">
                <span class="btn-input" style="width: 130px;marginRight: 10px;">源语言</span>
                <span class="btn-input" style="width: 130px;marginRight: 10px;">目标语言</span>
                <span class="btn-input" style="color: #fff;background: #16AB8E;width: 130px;">搜索</span>
              </div>
              <div class="col-md-10" style="textAlign: left;">
                <div class="static-text">
                  <p>8023</p>
                  <p>译者人数</p>
                </div>
                <div class="static-text" >
                  <p>64</p>
                  <p>分布地区</p>
                </div>
                <div class="static-text" >
                  <p>274</p>
                  <p>语言种类</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
					<div class="col-md-6 fadeInRight">
						<img src="../assets/transltor.png" class="img-responsive" alt="feature img">
					</div>
				</div>
			</div>
		</section>

    <section id="wheel">
				<div class="container main-div" style="paddingBottom: 50px;">
					<div class="row">
						<div class="col-md-2"></div>
						<div class="col-md-8 wow">
							<h1 class="text-upper" style="color: #16AB8E;marginBottom: 20px;">AI翻译+人工翻译助力网文出海</h1>
							<p class="tm-white">通过PE+MT模式创造即时性、本地化、规模化、竞逐行的翻译生产网络，
              与全球各国版权方译者、发行方通力合作，用创新模式传播中华文化，主力网文出海和文化交流传播。</p>
						</div>
            <div class="col-md-2"></div>
            <div class="col-md-12">
              <p class="tm-white">支持API接口对接 <span style="color: #16AB8E">联系我们</span></p>
            </div>
            <div class="col-md-2"></div>
           <div class="col-md-12">
              <b-carousel
                id="carousel"
                v-model="slide"
                :interval="4000"
                indicators
                background="#F7F7F7"
                img-width="1023"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
              >
                <b-carousel-slide img-blank="false" style="width: 100%">
                  <div class="row" style="textAlign: center;width: 100%">
                    <div class="col-md-3">
                      <img src="../assets/1.png"/>
                    </div>
                    <div class="col-md-3">
                      <img src="../assets/2.png"/>
                    </div>
                    <div class="col-md-3">
                      <img src="../assets/1.png"/>
                    </div>
                    <div class="col-md-3">
                      <img src="../assets/2.png"/>
                    </div>
                  </div>
                </b-carousel-slide>
                <b-carousel-slide img-blank="false" style="width: 100%">
                  <div class="row" style="textAlign: center;width: 100%">
                    <div class="col-md-3">
                      <img src="../assets/1.png"/>
                    </div>
                    <div class="col-md-3">
                      <img src="../assets/2.png"/>
                    </div>
                    <div class="col-md-3">
                      <img src="../assets/1.png"/>
                    </div>
                    <div class="col-md-3">
                      <img src="../assets/2.png"/>
                    </div>
                  </div>
                </b-carousel-slide>
              </b-carousel>
            </div>
					</div>
				</div>
		</section>

    <section id="why">
				<div class="container main-div" style="paddingBottom: 50px;">
					<div class="row">
						<div class="col-md-2"></div>
						<div class="col-md-8 wow">
							<h1 class="text-upper" style="color: #16AB8E;marginBottom: 20px;">为什么选择Hitranslator</h1>
						</div>
            <div class="col-md-2"></div>
            <div class="col-md-12">
              <div class="col-md-4 " style="display: inline-block">
                <div class="col-md-11 content-box">
                  <img src="../assets/多语言.png"/>
                  <p class="sub-text">全球母语译者</p>
                  <p class="content-text">全球各地的母语译者以全新的方式为用户提供本地化服务</p>
                </div>
              </div>
              <div class="col-md-3 content-box">
                <img src="../assets/icon-rgb_机器学习算法引擎.png"/>
                <p class="sub-text">智能翻译引擎</p>
                <p class="content-text">自主研发的只能AI翻译引擎为译者提供辅助翻译</p>
              </div>
              <div class="col-md-4 " style="display: inline-block">
                <div class="col-md-11 content-box">
                  <img src="../assets/管理视图.png"/>
                  <p class="sub-text">在线管理系统</p>
                  <p class="content-text">自主研发的在线管理系统翻译系统、结算系统等</p>
                </div>
              </div>
            </div>
            <div class="col-md-12" style="marginTop: 30px;">
              <div class="col-md-4 " style="display: inline-block">
                <div class="col-md-11 content-box">
                  <img src="../assets/1全球上传.png"/>
                  <p class="sub-text">全球化网络</p>
                  <p class="content-text">与全球24个国家的阅读平台建立了长期战略合作</p>
                </div>
              </div>
              <div class="col-md-3 content-box">
                <img src="../assets/数据.png"/>
                <p class="sub-text">强大数据分析</p>
                <p class="content-text">拥有强大的本地化数据阅读偏好分析系统</p>
              </div>
              <div class="col-md-4 " style="display: inline-block">
                <div class="col-md-11 content-box">
                  <img src="../assets/图层233.png"/>
                  <p class="sub-text">友好合作模式</p>
                  <p class="content-text">与全球译者、版权发行方建立了友好共赢的合作模式</p>
                </div>
              </div>
            </div>
					</div>
				</div>
		</section>

  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'

export default {
  name: 'home',
  components: {
    Nav
  },
  data() {
    return {
      slide: 0
    }
  }
}
</script>

<style>
.carousel-caption {
  position: absolute;
  z-index: 10;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: #F7F7F7;
}
.carousel-indicators {
  background: #F7F7F7;
}
.carousel.slide {
  text-shadow: #F7F7F7 1px 1px 2px;
}
.carousel-indicators li {
    opacity: 1;
    border: 1px solid #16AB8E!important;
    background: #fff!important;
}
.carousel-indicators .active{
    opacity: 1;
    border: 1px solid #16AB8E!important;
    background: #16AB8E!important;
  }
</style>
<style scoped lang="scss">
#home {
    background: url('../assets/Ellipse777copy7.png') no-repeat;
    background-size: cover;
    color: #fff;
    text-align: center;
    width: 100%;
}
.main-div {
  padding-top: 60px;
  padding-bottom: 240px;
}

.main-input {
  height: 160px;
  margin-top: 20px;
  font-size: 13px;
  padding: 8px;
  width: 100%;
  border-radius: 5px;
}

.sub-tip {
  display: inline-block;
  margin-top: 25px;
  font-size: 13px;
  margin-left: -30px;
  color: #F8FBFA;
}
.btn-input {
  display: inline-block;
  border: 1px solid #00A080;
  width: 135px;
  height: 40px;
  line-height: 40px;
  background: #fff;
  color: #00A080;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  text-align: center;
}

#transltor{
  background: #fff;
  padding-top: 80px;
  padding-bottom: 80px;
}

.img-responsive {
  width: 100%;
}

.static-text {
  width: 130px;
  margin-right: 10px;
  display: inline-block;
}

.static-text p:nth-child(1) {
  color: #2D2D2D;
  font-size: 36px;
  margin-top: 10px;
}
.static-text p:nth-child(2) {
  padding: 0;
  font-size: 14px;
  line-height: 14px;
  margin-top: -20px;
}

#wheel {
  background: #F7F7F7;
  padding-top: 80px;

  text-align: center; 
  width: 100%;
}

#why {
  background: #fff;
  padding-top: 80px;
  text-align: center; 
  width: 100%;
}

.content-box {
  text-align: center;
  background: #EFEFEF;
  width: 100%;
  display: inline-block;  
  padding-top: 20px;
  padding-right: 1rem;
  padding-left: 1rem;
  img {
    width: 40px;
    height: 40px;
  }
  .sub-text {
    color: #16AB8E;
    margin-top: 15px;
    font-weight: 500;
  }
  .content-text {
    text-align: center;
  }
}

</style>
