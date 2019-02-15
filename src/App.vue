<template>
  <div id="app">
    <el-container class="frame-cont">
      <el-header class="frame-header">
        <a id="leftmenu-trigger" class="pull-left head-logo" title="收起/展开导航栏">
          <i class="fa fa-align-left"></i>
        </a>
        <h3 class="pull-left head-logo">ELEMENT 示例</h3>
        <a id="rightmenu-trigger" class="pull-right head-logo" title="收起/展开导航栏">
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
              <el-menu-item index="2-3">Panel</el-menu-item>
              <el-menu-item index="2-3">Slider</el-menu-item>
              <el-menu-item index="2-3">Tab</el-menu-item>
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
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "~@/scss/style.scss";
#app {
  height: 100%;
}
</style>
