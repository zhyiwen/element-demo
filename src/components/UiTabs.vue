<template>
    <div class="ui-tabs">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="text-title">基础样式</div>
          <el-tabs v-model="activeName" @tab-click="handleClick" class="tab-style">
            <el-tab-pane label="用户管理" name="first">别人怎么对待我，这是我的因果。我怎么对待别人，这是我的修行。</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">罗曼·罗兰说：世上只有一种英雄主义，就是在认清生活的真相之后，依然热爱生活。“见见世面”，所谓见世面，其实就是见见真实的生活。见到这个世界不同的样子，见过优秀的，就会知道人外有人，懂得谦逊，知道进取；见过苦的，就会懂得珍惜，知道怜悯。很多时候，我们只有经历过苦，才能不惧怕苦。</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">当你厌恶你身边的人，你表达厌恶最好的方式不是和他们争吵，而是自己勤快点儿，加把劲离开他们。那样，他们就永远从你的生活中消失，和死了差不多。</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">不论你对此生的决定为何，一定要真诚地对待自己。</el-tab-pane>
          </el-tabs>
          <div class="text-title">卡片化</div>
          <el-tabs v-model="activeName3" @tab-click="handleClick" type="border-card" class="tab-style">
            <el-tab-pane label="用户管理" name="first">别人怎么对待我，这是我的因果。我怎么对待别人，这是我的修行。</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">罗曼·罗兰说：世上只有一种英雄主义，就是在认清生活的真相之后，依然热爱生活。“见见世面”，所谓见世面，其实就是见见真实的生活。见到这个世界不同的样子，见过优秀的，就会知道人外有人，懂得谦逊，知道进取；见过苦的，就会懂得珍惜，知道怜悯。很多时候，我们只有经历过苦，才能不惧怕苦。</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">当你厌恶你身边的人，你表达厌恶最好的方式不是和他们争吵，而是自己勤快点儿，加把劲离开他们。那样，他们就永远从你的生活中消失，和死了差不多。</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">不论你对此生的决定为何，一定要真诚地对待自己。</el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="12">
          <div class="text-title">选项卡样式</div>
          <el-tabs v-model="activeName2" type="card" @tab-click="handleClick" class="tab-style">
            <el-tab-pane label="用户管理" name="first">别人怎么对待我，这是我的因果。我怎么对待别人，这是我的修行。</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">罗曼·罗兰说：世上只有一种英雄主义，就是在认清生活的真相之后，依然热爱生活。“见见世面”，所谓见世面，其实就是见见真实的生活。见到这个世界不同的样子，见过优秀的，就会知道人外有人，懂得谦逊，知道进取；见过苦的，就会懂得珍惜，知道怜悯。很多时候，我们只有经历过苦，才能不惧怕苦。</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">当你厌恶你身边的人，你表达厌恶最好的方式不是和他们争吵，而是自己勤快点儿，加把劲离开他们。那样，他们就永远从你的生活中消失，和死了差不多。</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">不论你对此生的决定为何，一定要真诚地对待自己。</el-tab-pane>
          </el-tabs>
          <div class="text-title">自定义标签页</div>
          <el-tabs v-model="activeName4" type="border-card" @tab-click="handleClick" class="tab-style">
            <el-tab-pane name="first"><span slot="label"><i class="el-icon-date"></i> 我的行程</span>别人怎么对待我，这是我的因果。我怎么对待别人，这是我的修行。</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">罗曼·罗兰说：世上只有一种英雄主义，就是在认清生活的真相之后，依然热爱生活。“见见世面”，所谓见世面，其实就是见见真实的生活。见到这个世界不同的样子，见过优秀的，就会知道人外有人，懂得谦逊，知道进取；见过苦的，就会懂得珍惜，知道怜悯。很多时候，我们只有经历过苦，才能不惧怕苦。</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">当你厌恶你身边的人，你表达厌恶最好的方式不是和他们争吵，而是自己勤快点儿，加把劲离开他们。那样，他们就永远从你的生活中消失，和死了差不多。</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">不论你对此生的决定为何，一定要真诚地对待自己。</el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="24">
          <div class="text-title">位置</div>
          <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
            <el-radio-button label="top">top</el-radio-button>
            <el-radio-button label="right">right</el-radio-button>
            <el-radio-button label="bottom">bottom</el-radio-button>
            <el-radio-button label="left">left</el-radio-button>
          </el-radio-group>

          <el-tabs :tab-position="tabPosition" style="height: 200px;" v-model="activeName5">
            <el-tab-pane label="用户管理" name="first">别人怎么对待我，这是我的因果。我怎么对待别人，这是我的修行。</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">罗曼·罗兰说：世上只有一种英雄主义，就是在认清生活的真相之后，依然热爱生活。“见见世面”，所谓见世面，其实就是见见真实的生活。见到这个世界不同的样子，见过优秀的，就会知道人外有人，懂得谦逊，知道进取；见过苦的，就会懂得珍惜，知道怜悯。很多时候，我们只有经历过苦，才能不惧怕苦。</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">当你厌恶你身边的人，你表达厌恶最好的方式不是和他们争吵，而是自己勤快点儿，加把劲离开他们。那样，他们就永远从你的生活中消失，和死了差不多。</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">不论你对此生的决定为何，一定要真诚地对待自己。</el-tab-pane>
          </el-tabs>
          <div class="text-title">动态增减标签页</div>
          <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit" class="tab-style">
            <el-tab-pane
              :key="item.name"
              v-for="(item, index) in editableTabs"
              :label="item.title"
              :name="item.name"
            >
              {{item.content}}
            </el-tab-pane>
          </el-tabs>
          <div class="text-title">自定义增加标签页触发器</div>
          <div style="margin-bottom: 20px;">
            <el-button
              size="small"
              @click="addTab(editableTabsValue2)"
            >
              add tab
            </el-button>
          </div>
          <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab" class="tab-style">
            <el-tab-pane
              v-for="(item, index) in editableTabs2"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >
              {{item.content}}
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "UiTabs",
      data() {
        return {
          activeName: 'second',
          activeName2: 'first',
          activeName3: 'third',
          activeName4: 'first',
          activeName5: 'first',
          tabPosition: 'top',
          editableTabsValue: '2',
          editableTabs: [{
            title: 'Tab 1',
            name: '1',
            content: 'Tab 1 content'
          }, {
            title: 'Tab 2',
            name: '2',
            content: 'Tab 2 content'
          }],
          editableTabsValue2: '2',
          editableTabs2: [{
            title: 'Tab 1',
            name: '1',
            content: 'Tab 1 content'
          }, {
            title: 'Tab 2',
            name: '2',
            content: 'Tab 2 content'
          }],
          tabIndex: 2
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        handleTabsEdit(targetName, action) {
          if (action === 'add') {
            let newTabName = ++this.tabIndex + '';
            this.editableTabs.push({
              title: 'New Tab',
              name: newTabName,
              content: 'New Tab content'
            });
            this.editableTabsValue = newTabName;
          }
          if (action === 'remove') {
            let tabs = this.editableTabs;
            let activeName = this.editableTabsValue;
            if (activeName === targetName) {
              tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                  let nextTab = tabs[index + 1] || tabs[index - 1];
                  if (nextTab) {
                    activeName = nextTab.name;
                  }
                }
              });
            }

            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.name !== targetName);
          }
        },
        addTab(targetName) {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs2.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue2 = newTabName;
        },
        removeTab(targetName) {
          let tabs = this.editableTabs2;
          let activeName = this.editableTabsValue2;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }

          this.editableTabsValue2 = activeName;
          this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "~@/scss/components/UiTabs.scss";
</style>
