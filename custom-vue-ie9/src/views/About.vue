<template>
  <div>
    <!-- 导航条-->
    <Nav/>

    <section id="transltor">
			<div class="container">
				<div class="row">
					<div class="col-md-6 fadeInLeft">
            <div class="row">
            	<div class="col-md-12" style="textAlign: left">
                <h2 style="color: #16AB8E">关于 Hi Hitranslator</h2>
                <p style="marginTop: 20px;font-size: 16px;line-height: 28px;">有言在前（LanguagesAI）是一家语言服务和全球化公司是通过互联网组织译者为市场提供语言服务，助力全球文化传播</p>
                <p style="font-size: 16px;">全球互通·有言在前·沟通世界·传承文明</p>
              </div>
            </div>
            <div></div>
          </div>
				</div>
			</div>
		</section>

    <section id="static">
			<div class="container">
				<div class="row">
					<div class="col-md-4 static-tip">
            <p>2018</p>
            <p>Found</p>
          </div>
          <div class="col-md-4 static-tip">
            <p>+10K</p>
            <p>Translators</p>
          </div>
          <div class="col-md-4 static-tip">
            <p>+120B</p>
            <p>Words</p>
          </div>
				</div>
			</div>
		</section>

    <section id="about">
			<div class="container">
				<div class="row">
          <div class="col-md-5 fadeInLeft">
              <img src="../assets/图层221.png" class="img-responsive" alt="feature img">
          </div>
					<div class="col-md-7 fadeInRight">
            
            <div class="row" style="marginTop: 45px;paddingLeft: 20px;">
            	<div class="col-md-10" style="textAlign: left">
                <h1 style="color: #16AB8E;">Our Mission</h1>
                <p style="marginTop: 20px;font-size: 16px;">消除语言障碍，助力全球文化传播，让全球用户自由沟通。</p>
                <p style="marginTop: 20px;font-size: 16px;">Our mission is to organize the world's translators and make it universally accessible and useful.Different languages can alse chat.</p>
              </div>
            </div>
            <div></div>
          </div>
					
				</div>
			</div>
		</section>

   <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Nav, Footer
  },
  data() {
    return {
      slide: 0,
      text: 123
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
  padding-bottom: 80px;
  background: url('../assets/图层239.png') no-repeat;
  background-size: cover;
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
}
.img-responsive {
  width: 450px;
}
</style>
