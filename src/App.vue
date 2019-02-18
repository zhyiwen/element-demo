<template>
  <div id="app">
    <el-container class="frame-cont">
      <el-header class="frame-header">
        <a id="leftmenu-trigger" class="pull-left head-float" title="收起/展开导航栏">
          <i class="fa fa-align-left"></i>
        </a>
        <h3 class="pull-left head-logo">ELEMENT 示例</h3>
        <a id="rightmenu-trigger" class="pull-right head-float" title="收起/展开导航栏">
          <i class="fa fa-align-right"></i>
        </a>
        <div class="head-user pull-right">
          <span>抓耗子的猫</span>
          <img src="./assets/user.jpg" alt>
        </div>
        <div class="pull-right head-tool-group">
          <a class="head-tool">
            <i class="fa fa-fw fa-level-down"></i>
          </a>
          <a class="head-tool">
            <i class="fa fa-fw fa-tasks"></i>
          </a>
          <a class="head-tool">
            <i class="fa fa-fw fa-bell"></i>
          </a>
          <a class="head-tool">
            <i class="fa fa-fw fa-envelope"></i>
          </a>
          <a class="head-tool">
            <i class="fa fa-fw fa-search"></i>
          </a>
        </div>
      </el-header>
      <el-container class="frame-body">
        <el-aside width="230px" class="frame-nav">
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <el-menu-item index="1">
              <i class="fa fa-fw fa-home"></i>
              <span slot="title">主页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="fa fa-fw fa-diamond"></i>
                <span>UI 元素</span>
              </template>
              <el-menu-item index="2-1">Buttons</el-menu-item>
              <el-menu-item index="2-2">Grid</el-menu-item>
              <el-menu-item index="2-3">Tree View</el-menu-item>
              <el-menu-item index="2-4">Panel</el-menu-item>
              <el-menu-item index="2-5">Slider</el-menu-item>
              <el-menu-item index="2-6">Tab</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="fa fa-fw fa-wpforms"></i>
                <span>表单</span>
              </template>
              <el-menu-item index="3-1">基础表单</el-menu-item>
              <el-menu-item index="3-2">表单验证</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">
              <i class="fa fa-fw fa-table"></i>
              <span slot="title">表格</span>
            </el-menu-item>
            <el-submenu index="5">
              <template slot="title">
                <i class="fa fa-fw fa-file-text-o"></i>
                <span>其他页面</span>
              </template>
              <el-menu-item index="5-1">404</el-menu-item>
              <el-menu-item index="5-2">500</el-menu-item>
              <el-menu-item index="5-3">Login</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <div class="frame-breadcrumb">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>
                <a href="/">活动管理</a>
              </el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="btn-toolbar">
              <el-button type="default" icon="el-icon-setting" size="small"></el-button>
            </div>
          </div>
          <div class="frame-content">
            <router-view/>
          </div>
          <div class="theme-setting" :class="setshow ? 'active' : ''">
            <div class="setting-icon" @click="setTheme">
              <i class="fa fa-fw fa-spin fa-smile-o"></i>
            </div>
            <div class="setting-head">主题设置</div>
            <div class="set-choose-item">
              <h5>头部颜色设置：</h5>
              <ul class="set-theme">
                <li @click="changeHeadTheme('theme1')"><span class="set-theme-list theme1"></span></li>
                <li @click="changeHeadTheme('theme2')"><span class="set-theme-list theme2"></span></li>
                <li @click="changeHeadTheme('theme3')"><span class="set-theme-list theme3"></span></li>
                <li @click="changeHeadTheme('theme4')"><span class="set-theme-list theme4"></span></li>
                <li @click="changeHeadTheme('theme5')"><span class="set-theme-list theme5"></span></li>
                <li @click="changeHeadTheme('theme6')"><span class="set-theme-list theme6"></span></li>
                <li @click="changeHeadTheme('theme7')"><span class="set-theme-list theme7"></span></li>
                <li @click="changeHeadTheme('theme8')"><span class="set-theme-list theme8"></span></li>
                <li @click="changeHeadTheme('theme9')"><span class="set-theme-list theme9"></span></li>
              </ul>
            </div>
            <div class="set-choose-item">
              <h5>侧边栏颜色设置：</h5>
              <ul class="set-theme">
                <li @click="changeNavTheme('theme1')"><span class="set-theme-list theme1"></span></li>
                <li @click="changeNavTheme('theme2')"><span class="set-theme-list theme2"></span></li>
                <li @click="changeNavTheme('theme3')"><span class="set-theme-list theme3"></span></li>
                <li @click="changeNavTheme('theme4')"><span class="set-theme-list theme4"></span></li>
                <li @click="changeNavTheme('theme5')"><span class="set-theme-list theme5"></span></li>
                <li @click="changeNavTheme('theme6')"><span class="set-theme-list theme6"></span></li>
                <li @click="changeNavTheme('theme7')"><span class="set-theme-list theme7"></span></li>
                <li @click="changeNavTheme('theme8')"><span class="set-theme-list theme8"></span></li>
                <li @click="changeNavTheme('theme9')"><span class="set-theme-list theme9"></span></li>
              </ul>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      setshow:false
    }
  },
  mounted() {
    let storage=window.localStorage;
    let headtheme=storage['head-theme'];
    let navtheme=storage['nav-theme'];
    if (!headtheme){
      headtheme='theme1'
    }
    if (!navtheme){
      navtheme='theme1'
    }
    //页面加载完成之后将loaclStorage中的主题取出来
    this.changeHeadTheme(headtheme);
    this.changeNavTheme(navtheme);
  },
  methods:{
    setTheme(){
      this.setshow = !this.setshow;
    },
    changeHeadTheme(theme){
      window.document.documentElement.setAttribute('head-theme',theme);
      //切换主题时将主题信息存放在localStorage中
      let storage=window.localStorage;
      storage['head-theme']=theme;
    },
    changeNavTheme(theme){
      window.document.documentElement.setAttribute('nav-theme',theme);
      //切换主题时将主题信息存放在localStorage中
      let storage=window.localStorage;
      storage['nav-theme']=theme;
    }
  }
};
</script>

<style lang="scss">
@import "~@/scss/style.scss";
#app {
  height: 100%;
}
</style>
