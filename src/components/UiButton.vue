<template>
    <div class="ui-button">
      <el-card class="box-card zyw-panel mb">
        <div slot="header" class="clearfix">
          <span>普通按钮</span>
          <div class="panel-tools pull-right">
            <a href=""><i class="fa fa-fw fa-minus"></i></a>
            <a href=""><i class="fa fa-fw fa-edit"></i></a>
            <a href=""><i class="fa fa-fw fa-expand"></i></a>
            <a href=""><i class="fa fa-fw fa-times"></i></a>
          </div>
        </div>
        <div class="text item">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="text-title">默认按钮</div>
              <el-row>
                <el-button>默认按钮</el-button>
                <el-button type="primary">主要按钮</el-button>
                <el-button type="success">成功按钮</el-button>
                <el-button type="info">信息按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
              </el-row>
              <div class="text-desc">禁用状态</div>
              <el-row>
                <el-button disabled>默认按钮</el-button>
                <el-button type="primary" disabled>主要按钮</el-button>
                <el-button type="success" disabled>成功按钮</el-button>
                <el-button type="info" disabled>信息按钮</el-button>
                <el-button type="warning" disabled>警告按钮</el-button>
                <el-button type="danger" disabled>危险按钮</el-button>
              </el-row>
            </el-col>
            <el-col :span="12">
              <div class="text-title">朴素按钮</div>
              <el-row>
                <el-button plain>朴素按钮</el-button>
                <el-button type="primary" plain>主要按钮</el-button>
                <el-button type="success" plain>成功按钮</el-button>
                <el-button type="info" plain>信息按钮</el-button>
                <el-button type="warning" plain>警告按钮</el-button>
                <el-button type="danger" plain>危险按钮</el-button>
              </el-row>
              <div class="text-desc">禁用状态</div>
              <el-row>
                <el-button plain disabled>朴素按钮</el-button>
                <el-button type="primary" plain disabled>主要按钮</el-button>
                <el-button type="success" plain disabled>成功按钮</el-button>
                <el-button type="info" plain disabled>信息按钮</el-button>
                <el-button type="warning" plain disabled>警告按钮</el-button>
                <el-button type="danger" plain disabled>危险按钮</el-button>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-card>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card class="box-card zyw-panel">
            <div slot="header" class="clearfix">
              <span>圆角按钮&图标按钮</span>
              <div class="panel-tools pull-right">
                <a href=""><i class="fa fa-fw fa-minus"></i></a>
                <a href=""><i class="fa fa-fw fa-edit"></i></a>
                <a href=""><i class="fa fa-fw fa-expand"></i></a>
                <a href=""><i class="fa fa-fw fa-times"></i></a>
              </div>
            </div>
            <div class="text item">
              <div class="text-desc">圆角按钮</div>
              <el-row>
                <el-button round>圆角按钮</el-button>
                <el-button type="primary" round>主要按钮</el-button>
                <el-button type="success" round>成功按钮</el-button>
                <el-button type="info" round>信息按钮</el-button>
                <el-button type="warning" round>警告按钮</el-button>
                <el-button type="danger" round>危险按钮</el-button>
              </el-row>

              <el-row>
                <el-button icon="el-icon-search" circle></el-button>
                <el-button type="primary" icon="el-icon-edit" circle></el-button>
                <el-button type="success" icon="el-icon-check" circle></el-button>
                <el-button type="info" icon="el-icon-message" circle></el-button>
                <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                <el-button type="danger" icon="el-icon-delete" circle></el-button>
              </el-row>
              <div class="text-desc">图标按钮</div>
              <el-row>
                <el-button type="primary" icon="el-icon-edit"></el-button>
                <el-button type="primary" icon="el-icon-share"></el-button>
                <el-button type="primary" icon="el-icon-delete"></el-button>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
                <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="box-card zyw-panel">
            <div slot="header" class="clearfix">
              <span>不同尺寸&按钮组</span>
              <div class="panel-tools pull-right">
                <a href=""><i class="fa fa-fw fa-minus"></i></a>
                <a href=""><i class="fa fa-fw fa-edit"></i></a>
                <a href=""><i class="fa fa-fw fa-expand"></i></a>
                <a href=""><i class="fa fa-fw fa-times"></i></a>
              </div>
            </div>
            <div class="text item">
              <div class="text-desc">不同尺寸按钮</div>
              <el-row>
                <el-button>默认按钮</el-button>
                <el-button size="medium">中等按钮</el-button>
                <el-button size="small">小型按钮</el-button>
                <el-button size="mini">超小按钮</el-button>
              </el-row>
              <el-row>
                <el-button round>默认按钮</el-button>
                <el-button size="medium" round>中等按钮</el-button>
                <el-button size="small" round>小型按钮</el-button>
                <el-button size="mini" round>超小按钮</el-button>
              </el-row>
              <div class="text-desc">按钮组</div>
              <el-button-group>
                <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
                <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
              </el-button-group>
              <el-button-group>
                <el-button type="primary" icon="el-icon-edit"></el-button>
                <el-button type="primary" icon="el-icon-share"></el-button>
                <el-button type="primary" icon="el-icon-delete"></el-button>
              </el-button-group>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "ui-button"
    }
</script>

<style scoped lang="scss">
  @import "~@/scss/components/UiButton.scss";
</style>
