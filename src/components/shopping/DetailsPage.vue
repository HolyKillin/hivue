<template>
<div class="detail">
    <header class="detail-header">
          <i class="cubeic-back" @click="goBack"></i>
        <h3>详情</h3>
    </header>
    <main class="detail-body">
        <div class="img-wrap"><img src="goods.img"/></div>
        <div class="detail-card">
            <h3>{{ goods.title }}</h3>
            <div class="detail-content">
                <p v-for="item in 30">
                    这是{{ goods.content }} 的商品详细介绍
                </p>
            </div>
        </div>
    </main>
    <footer class="detail-footer">
        <span class="price">￥ <span>{{ goods.price }}</span></span>
        <router-link to="/ShopCart">
            <div class="go-to-cart">
                <span class="cart-counter" v-show="cartCounter > 0">{{ cartCounter }}</span>
            </div>
        </router-link>
        <i class="cubeic-add" :inline="true" @click="addGoodsToCart"></i>
    </footer>
</div>
</template>

<script>
    export default {
        name: "detail",
        data(){
            return{
            }
        },
        computed: {
            goods(){
                return this.$route.query;
            },
            cartCounter(){
                return this.$store.state.cartCounter;
            }
        },
        methods:{
            addGoodsToCart(){
                let isInCart = this.goods.isInCart;
                if (isInCart) {
                    this.$store.commit('addGoods', this.goods.id);
                } else {
                    this.$store.commit('addGoodsToCart', this.goods);
                }
            },
            updatedNavImg () {
                //解决主页与详情页切换时，菜单栏无法更新获取当前路由的问题
                this.$store.state.cartCounter++;
                this.$store.state.cartCounter--;
            },
            goBack(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '../../assets/css/variable.styl';
.detail
    width 100%
    height 100%
    .detail-header
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
              .cubeic-delete
                    position fixed
                    right 10px
                    top 2px
                    font-size 130%
    .detail-body
        padding-top $HeaderHeight
        .img-wrap
            border-bottom 1px solid #eee
            padding 10px
        .detail-card
            h3
                padding 10px
            .detail-content
                margin: 10px;
                border: 1px solid #ddd;
                padding: 10px;

    .detail-footer
        z-index 9999
        width: 100%;
        height: $NavHeight;
        position: fixed;
        bottom: 0;
        left: 0;
        border-top: 1px solid #eee;
        background-color: #fff;
        .price
            font-size: 150%;
            position: absolute;
            left: 10px;
            top: 19px;
            span
                color $mainOrange
        .go-to-cart
            background-image url(../../assets/icon/cart.png)
            position: absolute;
            right: 60px;
            font-size: 150%;
            top: 19px;
            color: transparent;
            background-repeat: no-repeat;
            background-position: -80px 0;
            background-size: 135px 45px;
            width: 60px;
            height: 25px;
            .cart-counter
                position: absolute;
                width: 20px;
                height: 20px;
                top: -7px;
                right: 7px;
                line-height: 20px;
                border-radius: 50%;
                background-color: $mainOrange;
                color: #fff;
                font-size: 10px;
        .cubeic-add
            font-size: 180%;
            position: absolute;
            right: 10px;
            top: 19px;
</style>
