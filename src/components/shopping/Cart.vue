<template>
    <div class="cart">
        <header class="cart-header">
            <h3>购物车</h3>
        </header>
        <main class="cart-body" v-if="cartGoods.length > 0">

        </main>
        <footer class="cart-footer">

        </footer>
        <div class="cart-empty">购物车里空空的~</div>
    </div>
</template>

<script>
    export default {
        name: "cart",
        data (){
            return {
                msg: 'this is cart page'
            }
        },
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
            },
            //合计

        },


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
        border-bottom 1px solid #eee
        background-color #fff
        z-index 999
        h3
              letter-spacing 3px
              height: $HomeHeaderHeight - 30px
              line-height: $HomeHeaderHeight - 30px
    .cart-body
        padding-top: $cartHeaderHeight;
        padding-bottom: $NavHeight + $cartFooterHeight;
        background-color: #f5f5f5
    .cart-footer
        position: fixed;
        width: 100%;
        height: $cartFooterHeight;
        line-height: $cartFooterHeight;
        bottom: $NavHeight;
        border-top: 1px solid #eee
        left: 0;
        text-align: right;
    .cart-empty
        position: absolute
        height: 50px
        width: 100%
        top: 50%
</style>
