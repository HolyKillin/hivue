<template>
    <div class="address-page">
        <div class="address-page-home">
            <header class="address-page-header">
                <i class="cubeic-back" @click="goBack"></i>
                <h3>我的收货地址</h3>
            </header>
            <main class="address-page-content">
                <ul class="all-address" v-if="allAddress.length > 0">
                    <li class="one-address" v-for="item in allAddress">
                        <div class="one-address-left">
                            王
                        </div>
                        <div class="one-address-right"><a href="javascript:void(0);" @click.stop="EditAddress">| 编 辑</a></div>
                        <div class="one-address-center">
                            <span class="one-address-name">{{ item.name }}</span>
                            <span class="one-address-phone">{{ item.phone }}</span>
                            <p class="one-address-location">{{ item.city + item.detailedAddress }}</p>
                        </div>

                    </li>
                </ul>
            </main>
            <footer class="address-page-footer">
                <cube-button @click.stop="toAddAddress">新增收货地址</cube-button>
            </footer>
        </div>
        <transition enter-active-class="slideInRight">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        computed:{
            allAddress(){
                return this.$store.state.address;
            }
        },
        methods:{
            goBack() {
                this.$router.go(-1)
            },
            toAddAddress(){
                return this.$router.push({
                    path: '/ShopMe/AddressManage/AddAddress'
                });
            },
            toEditAddress(){
                return this.$router.push({
                    path: '/ShopMe/AddressManage/EditAddress'
                });
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../../assets/css/variable.styl';
    .address-page
        position absolute
        width 100%
        height 100%
        background #f5f5f5
        z-index 9999
        .address-page-home
            position absolute
            width 100%
            height 100%
            .address-page-header
                /*position fixed*/
                /*top 0*/
                /*left 0*/
                /*z-index 999*/
                text-align center
                width 100%
                background-color #fff
                .cubeic-back
                    position: fixed;
                    left: 19px;
                    top: 19px;
                    font-size: 130%;
                h3
                    letter-spacing 3px
                    height: $HomeHeaderHeight - 30px
                    line-height: $HomeHeaderHeight - 30px
                    border-bottom: 3px solid #ffad7e
            .address-page-content
                .all-address
                    .one-address
                        background #fff
                        text-align left
                        padding 10px
                        border-bottom 1px solid #f5f5f5
                        height 50px
                        .one-address-left
                            width: 48px;
                            height: 48px;
                            text-align: center;
                            background: antiquewhite;
                            border-radius: 50%;
                            line-height: 48px;
                            float left
                        .one-address-right
                            float: right;
                            width: 48px;
                            height: 48px;
                            text-align: center;
                            line-height: 48px;
                        .one-address-center
                            padding 0 58px
                            .one-address-phone
                                margin-left 10px
                                font-size 95%
                                color #bbb
                            .one-address-location{letter-spacing: 0.5px;position: relative; line-height: 14px; max-height: 27px;overflow: hidden;padding-top: 6px;font-size: 80%;}
                            .one-address-location:after{
                                content: "..."; position: absolute; bottom: 0; right: 0; padding-left: 40px;
                                background: -webkit-linear-gradient(left, transparent, #fff 55%);
                                background: -o-linear-gradient(right, transparent, #fff 55%);
                                background: -moz-linear-gradient(right, transparent, #fff 55%);
                                background: linear-gradient(to right, transparent, #fff 55%);
                            }

            .address-page-footer
                z-index 9999
                width: 100%;
                height: $NavHeight;
                position: fixed;
                bottom: 0;
                left: 0;
                border-top: 1px solid #eee
                background-color #fff
</style>
