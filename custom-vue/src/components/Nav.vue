<template>
   <b-navbar toggleable="lg" type="light" fixed>
    <div class="container">
        <b-navbar-brand href="#">
            <img src="../assets/logo.png" style="width: 130px;"/>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav >
            <b-nav-item href="#" class="header-font">首页</b-nav-item>
            <b-nav-item href="#" class="header-font">翻译服务</b-nav-item>
            <b-nav-item href="#" class="header-font active">搜索译者</b-nav-item>
            <b-nav-item href="#" class="header-font">网文出海</b-nav-item>
            <b-nav-item href="#" class="header-font">联系我们</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" class="header-font">用户注册</b-nav-item>
            <b-nav-item href="#" class="header-font">译者注册</b-nav-item>
            <b-nav-item href="#" class="header-font" style="margin-right: 15px;">登录</b-nav-item>
            <b-nav-item-dropdown text="CH" right>
                <b-dropdown-item href="#">CH</b-dropdown-item>
            </b-nav-item-dropdown>

        </b-navbar-nav>
        </b-collapse>
    </div>
  </b-navbar>
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

.header-font {
    margin-left: 25px;
    a {
        font-size: 13px; 
        padding-left: 0px;
        padding-top: 10px;
        padding-right: 0px;
    }
}
.header-font.active {
    a {
        color: #16AB8E!important;   
        border-bottom: 1px solid #16AB8E;
    }
}
</style>
