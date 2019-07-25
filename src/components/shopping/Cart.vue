<template>
    <div class="cart">
        <header class="cart-header">
            <h3>购物车<i v-if="cartGoods.length > 0" class="cubeic-delete" @click="showDialog"></i></h3>
        </header>
        <main class="cart-body" v-if="cartGoods.length > 0">
            <div class="wrap">
                <ul class="goods-wrap">
                    <li v-for="item in cartGoods" class="cartGoodsItem">
<!--                        cart的商品选定数量加减，与home的有一定区别，如果cart的item直接使用OneCommodity.vue中的数据配置，-->
<!--                        单个商品增减还没有问题，从第二个开始会出现cart的商品数增减没有改变的BUG，报错如下：-->
<!--                          [Vue warn]: Error in v-on handler: "TypeError: Cannot read property 'count' of undefined"-->

        <!--                        found in-->

        <!--                        -&ndash;&gt; <MyInputNumber> at src/components/common/MyInputNumber/MyInputNumber.vue-->
        <!--                        <OneCommodity> at src/components/shopping/OneCommodity.vue-->
        <!--                            <Cart> at src/components/shopping/Cart.vue-->
        <!--                                <Shop> at src/views/shopping-demo.vue-->
        <!--                                    <App> at src/App.vue-->
        <!--                                        <Root>-->
<!--                        我想大概原因是OneCommodity.vue中 getOperator()方法里有一句
                      let count = this.$store.state.cartGoods.filter(val => {
                        return val.id === id;
                    })[0].count; 把id搞乱了-->
                        <one-cart-item
                                :id="item.id"
                                :img="item.img"
                                :title="item.title"
                                :content="item.content"
                                :price="item.price"
                                :count="item.count">
                        </one-cart-item>
                    </li>
                </ul>
            </div>
        </main>
        <footer class="cart-footer" v-show="cartGoods.length > 0">
            <div class="toPay">
                <div class="text-left"><span>全选</span></div>
                <div class="text-right">总计：￥ <span class="cart-amount">{{ amount }}</span><cube-button>结算</cube-button></div>

            </div>
        </footer>
        <div class="cart-empty" v-show="cartGoods.length === 0">购物车里空空的~</div>
    </div>
</template>

<script>
    import OneCartItem from './OneCartItem.vue';
    export default {
        name: "cart",
        computed:{
            cartGoods () {
                return this.$store.state.cartGoods;
            },
            //商品总价
            amount () {
                let cartGoods = this.$store.state.cartGoods;
                let result = 0;
                cartGoods.forEach(good =>{
                    result += good.price * good.count;
                });
                return result;
            }

        },
        methods:{
            showDialog() {
                this.dialog = this.$createDialog({
                    type: 'confirm',
                    icon: 'cubeic-alert',
                    title: '您真的要清空购物车嘛？',
                    content: '可不能后悔哟~',
                    confirmBtn: {
                        text: '是的',
                        active: true,
                        disabled: false,
                        href: 'javascript:;'
                    },
                    cancelBtn: {
                        text: '不了',
                        active: false,
                        disabled: false,
                        href: 'javascript:;'
                    },
                    onConfirm: () => {
                        this.deleteAllFromCart();
                        this.$createToast({
                            type: 'warn',
                            time: 1000,
                            txt: '删除完成'
                        }).show()
                    },
                    onCancel: () => {

                    }
                });
                this.dialog.show()
            },
            deleteAllFromCart() {
                let cartGoods = this.$store.state.cartGoods;
                cartGoods.forEach(good =>{
                    good.count = 0;
                });
                return this.$store.commit('deleteAllFromCart',cartGoods)
            }
        },
        components:{
            OneCartItem: OneCartItem
        }


    }
</script>

<style lang="stylus" scoped>
@import '../../assets/css/variable.styl';
.cart
    width 100%
    height 100%
    .cart-header
        position fixed
        top 0
        left 0
        text-align center
        width 100%
        border-bottom 3px solid #ffad7e
        background-color #fff
        z-index 999
        h3
              letter-spacing 3px
              height: $HomeHeaderHeight - 30px
              line-height: $HomeHeaderHeight - 30px
              .cubeic-delete
                    position fixed
                    right 10px
                    top 2px
                    font-size 130%
    .cart-body
        padding-top: $HeaderHeight;
        padding-bottom: $NavHeight + $cartFooterHeight;
        background-color: #fff
        .wrap
            .price-wrap
                margin-top 10px
                background-color #fff
                padding 15px 10px
                text-align left
                line-height 40px
            >div
                border-bottom 1px solid #eee
            .red-packet .float-right
                color $mainOrange
    .cart-footer
        position: fixed;
        width: 100%;
        height: $cartFooterHeight;
        line-height: $cartFooterHeight;
        bottom: $NavHeight;
        border-top: 1px solid #eee
        left: 0;
        text-align: right;
        .toPay
            background white
            .text-left
                float left
                padding-left 20px
            .text-right
                .cart-amount
                    color: $mainOrange
                    font-size: 18px
                    font-weight: 600
                .cube-btn
                    width 30%
                    float right
                    background #f77b32
                    letter-spacing 2px
                    margin-left: 20px;
    .cart-empty
        position: absolute
        height: 50px
        width: 100%
        top: 50%
        margin-top: -65px;
</style>
