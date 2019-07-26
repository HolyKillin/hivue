<template>
    <div class="self">
        <div class="self-home">
            <header class="self-header">
                <cube-tab-bar v-model="selectedLabel" v-if="isLogin === false" show-slider>
                    <cube-tab v-for="(item, index) in tabs" :label="item.label" :icon="item.icon" :key="item.label"></cube-tab>
                </cube-tab-bar>
                <h3 class="self-user-header" v-else>我的</h3>
            </header>
            <main class="self-body">
                <cube-tab-panels v-model="selectedLabel" v-if="isLogin === false">
                    <cube-tab-panel v-for="(item, index) in tabs" :label="item.label" :key="item.label">
                        <sign-in v-if="item.label==='登录'"></sign-in>
                        <sign-up v-if="item.label==='注册'"></sign-up>
                    </cube-tab-panel>
                </cube-tab-panels>
                <div class="self-user-main" v-else>
                    <div class="self-user-card">
                        <img src="" alt="头像"/><span>{{ username }}</span>
                        <cube-button :inline="true" @click="logout">退出登录</cube-button>
                    </div>
                    <div class="self-content-card">
                        <cube-button :light="true" @click.stop="toAddressManage">管理地址</cube-button>
                    </div>
                </div>
            </main>
            <footer class="self-footer">

            </footer>
        </div>
        <transition enter-active-class="slideInRight">
            <router-view></router-view>
        </transition>
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
        }, {
          label: '注册',
          icon: 'cubeic-star',
        }]
      }
    },
      /*    https://cn.vuejs.org/v2/guide/computed.html
            computed和methods看似作用一样，其实有区别：
                computed 会缓存，只有message发生改变时才会重新渲染，
                methods 不会缓存，每一次触发它都会重新渲染*/
    computed:{
        username(){
            return this.$store.state.username;
        },
        isLogin(){
            return this.$store.state.isLogin;
        },

    },
      methods:{
          logout () {
              this.$store.commit('logout');
          },
          toAddressManage(){
              this.$router.push({
                  path: '/ShopMe/AddressManage'
              });
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
    @import "../../assets/css/variable.styl";
    .self-home
        position absolute
        width 100%
        height:100%
        .self-header
            /*position: fixed*/
            /*left: 0*/
            /*top: 0*/
            /*z-index: 999*/
            width: 100%
            background-color: #fff
            .cube-tab-bar
                background-color: #fff
                .cube-tab
                    height $HeaderHeight - 14
            .self-user-header
                height $HeaderHeight - 3
                background-color: #fff
                border-bottom: 3px solid #ffad7e
                letter-spacing: 3px;
                line-height: $HeaderHeight - 3
        .self-body
            /*padding-top $HeaderHeight*/
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
