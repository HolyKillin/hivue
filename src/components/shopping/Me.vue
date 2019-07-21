<template>
    <div class="self">
        <header class="self-header">
            <cube-tab-bar v-model="selectedLabel" show-slider>
                <cube-tab v-for="(item, index) in tabs" :label="item.label" :icon="item.icon" :key="item.label"></cube-tab>
            </cube-tab-bar>
        </header>
        <main class="self-body">
            <cube-tab-panels v-model="selectedLabel">
                <cube-tab-panel v-for="(item, index) in tabs" :label="item.label" :key="item.label">
                    <sign-in v-if="item.label==='登录'"></sign-in>
                    <sign-up v-if="item.label==='注册'"></sign-up>
                </cube-tab-panel>
            </cube-tab-panels>
        </main>
        <footer class="self-footer">

        </footer>
        <!-- <cube-tab-panels v-model="selectedLabel">
            <cube-tab-panel v-for="(item, index) in tabs" :label="item.label" :key="item.label">
            <ul>
                <li class="tab-panel-li" v-for="(hero, index) in item.heroes" :key="index">
                {{hero}}
                </li>
            </ul>
            </cube-tab-panel>
        </cube-tab-panels> -->
    </div>
</template>
<script type="text/ecmascript-6">
import SignIn from './SignIn.vue'
import SignUp from './SignUp.vue'
  export default {
    data() {
      return {
        selectedLabel: '登录',
        tabs: [{
          label: '登录',
          icon: 'cubeic-person',
          heroes: ['敌法师', '卓尔游侠', '主宰', '米拉娜', '变体精灵']
        }, {
          label: '注册',
          icon: 'cubeic-star',
          heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波']
        }]
      }
    },
    components:{
        SignIn: SignIn,
        SignUp: SignUp
    },
    watch: {
      selectedLabel (newV) {
        console.log(newV)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .self-header
        position: fixed
        left: 0
        top: 0
        width: 100%
        background-color: #fff
        z-index: 999
        .cube-tab-bar
            background-color: #fff
    .cube-tab-panels
        background-color: #fff
    .tab-panel-li
      padding: 0 16px
      height: 40px
      line-height: 40px
      border-top: 1px solid #eee
      &:last-child
        border-bottom: 1px solid #eee
</style>
