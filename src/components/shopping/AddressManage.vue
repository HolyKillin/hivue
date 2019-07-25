<template>
    <div class="address-page">
        <header class="address-page-header">
            <i class="cubeic-back" @click="goBack"></i>
            <h3>我的收货地址</h3>
        </header>
        <main class="address-page-content">
            <ul class="all-address" v-if="allAddress.length > 0">
                <li v-for="item in allAddress">
                    <p>{{ item.name }}</p>
                    <p>{{ item.phone }}</p>
                    <p>{{ item.city + item.detailedAddress }}</p>
                    <a>编辑</a>
                </li>
            </ul>
        </main>
        <footer class="address-page-footer">
            <cube-button>新增收货地址</cube-button>
        </footer>
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
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../../assets/css/variable.styl';
    .address-page
        width 100%
        height 100%
        .address-page-header
            position fixed
            top 0
            left 0
            text-align center
            width 100%
            border-bottom 1px solid #eee
            background-color #fff
            z-index 999
            .cubeic-back
                position: fixed;
                left: 19px;
                top: 19px;
                font-size: 130%;
            h3
                letter-spacing 3px
                height: $HomeHeaderHeight - 30px
                line-height: $HomeHeaderHeight - 30px
        .address-page-content
            padding-top $HeaderHeight

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
