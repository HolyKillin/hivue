<template>
    <div class="home">
        <home-header></home-header>
        <div class="home-main">
            <transition-group enter-active-class="slideInRight" tag="div">
                    <ul class="goods animated" :key="animatedCurrentKey">
                        <li v-for="item in goods" class="one-com" v-show="isCurrent(item.kind)">
                            <one-commodity
                                    :id="item.id"
                                    :img="item.img"
                                    :title="item.title"
                                    :content="item.content"
                                    :price="item.price"
                                    :count="0"
                            ></one-commodity>
                        </li>
                    </ul>
            </transition-group>
            <div :key="'0' + animatedCurrentKey">
                <p class="no-more-goods">没有更多商品啦，敬请期待!!!</p>
            </div>
        </div>
    </div>
</template>

<script>
    import HomeHeader from './HomeHeader';
    import OneCommodity from './OneCommodity';
    export default {
        name: 'home',
        data (){
            return {
                goods: [],
            }
        },
        computed: {
            animatedCurrentKey(){
                return this.$store.state.GoodsCurrentSelKind;
            }
        },
        methods: {
            isCurrent(itemKind){
                let currentKind = this.$store.state.GoodsCurrentSelKind;
                if (currentKind === 0) {
                    return true;
                }
                else {
                    return itemKind === currentKind;
                }
            }
        },
        components:{
            HomeHeader: HomeHeader,
            OneCommodity: OneCommodity,
        },
        mounted (){
                this.$axios.get('http://127.0.0.1:9090/data/goods.json').then(res => {
                            this.goods = [...res.data];
                        }).catch((error) => {
                            console.log(error)
                    })
        }
    }

</script>

<style lang="stylus" scoped>
    .home{
        width: 100%;
        padding-bottom: $NavHeight + 5px;
        padding-top: $HomeHeaderHeight;
    }
    .home-main{
        width: 100%;
        margin: 61px 0;
        overflow-x: hidden;
    }
    .goods{
        width: 100%;
        list-style: none;
        padding: 0;
    }
    .goods>li{
        width: 100%;
    }
    .no-more-goods{
        height: 40px;
        line-height: 40px;
        color: #a8a8a8;
    }
    .slideInRight{
        animation-duration: 0.25s;
    }
</style>
