<template>
    <header class="home-header">
        <div class="top-text">哼哼跑腿</div>
        <div class="tap-wrap">
            <div class="tap-menu">

                <cube-tab-bar
                        v-model="goodsType"
                        :data="tabs"
                        show-slider
                        @click="clickHandler"
                        @change="changeHandler">
                    <cube-tab v-for="(item,index) in tabs" :label="item.label"></cube-tab>
                </cube-tab-bar>
    <!--            <cube-scroll-nav @change="changeHandler">-->
    <!--                <cube-scroll-nav-panel-->
    <!--                        v-for="item in tabs"-->
    <!--                        :key="item.label"-->
    <!--                        :label="item.label"-->
    <!--                        show-slider>-->
    <!--                </cube-scroll-nav-panel>-->
    <!--            </cube-scroll-nav>-->

    <!--            <cube-scroll-nav-bar :current="goodsType" :labels="txts" :txts="txts" @change="changeHandler"/>-->
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'home-header',
        data (){
            return {
                // txts: [
                //     '全部',
                //     '水果',
                //     '蔬菜',
                //     '肉蛋',
                //     '速冻',
                //     '酒饮',
                //     '乳品',
                //     '零食'
                // ],
                // labels: ['0','1','2','3','4','5','6','7']
                goodsType: '全部',
                kindToType: new Map([
                    ['全部', 0],
                    ['水果', 1],
                    ['蔬菜', 2],
                    ['肉蛋', 3],
                    ['速冻', 4],
                    ['酒饮', 5],
                    ['乳品', 6],
                    ['零食', 7]
                ]),
                tabs: [{
                    label: '全部',
                    kind: 0
                }, {
                    label: '水果',
                    kind:1
                }, {
                    label: '蔬菜',
                    kind:2
                }, {
                    label: '肉蛋',
                    kind:3
                },{
                    label: '速冻',
                    kind:4
                },{
                    label: '酒饮',
                    kind:5
                },{
                    label: '乳品',
                    kind:6
                },{
                    label: '零食',
                    kind: 7
                }]
            }
        },
        methods: {
            clickHandler (label) {
                // if you clicked home tab, then print 'Home'
                console.log(label)
            },
            changeHandler (kind) {
                // if you clicked different tab, this methods can be emitted
                this.$store.state.GoodsCurrentSelKind = this.kindToType.get(this.goodsType)
                console.log(kind)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../../assets/css/variable.styl';

    .home-header
        position: fixed
        left: 0
        top: 0
        width: 100%
        background-color: #fff
        z-index: 999
        .top-text
            height: $HomeHeaderHeight - 30px
            line-height: $HomeHeaderHeight - 30px
        .tap-wrap
            position: relative
            overflow: hidden
            height: 56px
            box-shadow: 0px 3px 13px -6px black
            text-align: -webkit-center
            .tap-menu
                position: absolute
                top: 0
                right: 0
                bottom: -8px
                left: 0
                overflow-x: auto
                .cube-tab-bar
                    width: max-content;
                    .cube-tab
                        padding: 20px 15px
</style>
