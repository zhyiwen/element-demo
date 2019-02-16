<template>
    <div class="index">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="data-info">
            <div class="data-hd">
              <h6 class="hd-title">总销售额</h6>
              <span class="hd-range"><i class="fa fa-level-up"></i> 5.61%</span>
            </div>
            <div class="data-bd">
              <strong>￥234502</strong>
              <span class="data-ico"><i class="fa fa-fw fa-shopping-cart"></i></span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="data-info bg-green">
            <div class="data-hd">
              <h6 class="hd-title">每日访客</h6>
              <span class="hd-range"><i class="fa fa-level-up"></i> 30.93%</span>
            </div>
            <div class="data-bd">
              <strong>234</strong>
              <span class="data-ico"><i class="fa fa-fw fa-group"></i></span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="data-info bg-blue">
            <div class="data-hd">
              <h6 class="hd-title">总收益</h6>
              <span class="hd-range"><i class="fa fa-level-up"></i> 1.25%</span>
            </div>
            <div class="data-bd">
              <strong>￥24363</strong>
              <span class="data-ico"><i class="fa fa-fw fa-bitcoin"></i></span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="data-info bg-midnightblue">
            <div class="data-hd">
              <h6 class="hd-title">未决订单</h6>
              <span class="hd-range"><i class="fa fa-level-down"></i> 46.23%</span>
            </div>
            <div class="data-bd">
              <strong>12</strong>
              <span class="data-ico"><i class="fa fa-fw fa-file-text-o"></i></span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card class="box-card zyw-panel">
            <div slot="header" class="clearfix">
              <span>来访记录</span>
              <div class="panel-tools pull-right">
                <a href=""><i class="fa fa-fw fa-minus"></i></a>
                <a href=""><i class="fa fa-fw fa-edit"></i></a>
                <a href=""><i class="fa fa-fw fa-expand"></i></a>
                <a href=""><i class="fa fa-fw fa-times"></i></a>
              </div>
            </div>
            <div class="text item">
              <el-table
                ref="multipleTable"
                :data="tableData3"
                height="250"
                size="mini"
                tooltip-effect="dark"
                style="width: 100%">
                <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>
                <el-table-column
                  label="日期"
                  width="100">
                  <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址"
                  show-overflow-tooltip>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="box-card zyw-panel">
            <div slot="header" class="clearfix">
              <span>访客转化状态</span>
              <div class="panel-tools pull-right">
                <a href=""><i class="fa fa-fw fa-minus"></i></a>
                <a href=""><i class="fa fa-fw fa-edit"></i></a>
                <a href=""><i class="fa fa-fw fa-expand"></i></a>
                <a href=""><i class="fa fa-fw fa-times"></i></a>
              </div>
            </div>
            <div class="text item">
              <div id="chart1" style="width: 100%; height: 250px;"></div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "index",
      data() {
        return {
          tableData3: [{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '赵本山',
            address: '辽宁省铁岭市'
          }, {
            date: '2016-05-04',
            name: '赵丽颖',
            address: '河北省廊坊市'
          }, {
            date: '2016-05-01',
            name: '张娜拉',
            address: '韩国首尔'
          }, {
            date: '2016-05-08',
            name: '宋小宝',
            address: '吉林省通化市'
          }, {
            date: '2016-05-06',
            name: '贾玲',
            address: '湖北省襄阳市'
          }, {
            date: '2016-05-07',
            name: '沈腾',
            address: '黑龙江省齐齐哈尔市'
          }],
          multipleSelection: []
        }
      },
      mounted(){
        this.chart1();
      },
      methods: {
        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        chart1(){
          var echarts = require('echarts');
          // 基于准备好的dom，初始化echarts实例
          var myChart = echarts.init(document.getElementById('chart1'));
          // 绘制图表
          myChart.setOption({
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              left:'20',
              y: 'center',
              data:['已签约','已交定','未转化']
            },
            color:['#00c191','#fec105','#8fa5a5'],
            series: [
              {
                name:'访客转化状态',
                type:'pie',
                radius: '70%',
                center: ['60%', '50%'],
                data:[
                  {value:335, name:'已签约'},
                  {value:310, name:'已交定'},
                  {value:234, name:'未转化'}
                ]
              }
            ]
          });
        }
      }
    }

</script>

<style scoped lang="scss">
  @import "~@/scss/components/Index.scss";
</style>
