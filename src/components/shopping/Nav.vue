<template>
    <nav class="shop-nav">
        <router-link to="/ShopHome">
            <div class="nav-item">
                <div class="homeImg"></div>
            </div>
        </router-link>
        <router-link to="/ShopCart">
            <div class="nav-item">
                <div class="cartImg">
                    <span class="cart-counter" v-show="cartCounter > 0">{{ cartCounter }}</span>
                </div>
            </div>
        </router-link>
        <router-link to="/ShopMe">
            <div class="nav-item">
                <div class="selfImg"></div>
            </div>
        </router-link>
    </nav>
</template>

<script>
    export default {
        name: 'shop',
        computed:{
            cartCounter(){
                return this.$store.state.cartCounter
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../../assets/css/variable.styl';
    .shop-nav{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        border-top: 1px solid #eee;
        font-size: 0;
        background-color: #fff;
        height: $NavHeight;
        z-index: 999;
    }
    .nav-item{
        height: 100%;
        display: inline-block;
        width: 33.33%;
        text-align: center;
    }
    .nav-item>div{
        display: inline-block;
        width: $NavHeight * 0.75;
        height: $NavHeight * 0.75;
        margin-top: $NavHeight * 0.125;
    }
    .homeImg{
        background-image: url('../../assets/icon/home.png');
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: $NavHeight * 0.75 * 3  $NavHeight * 0.75;
    }
    .homeImgOn{
        background-position: 100% 100%;
    }
    .cartImg{
        background-image: url('../../assets/icon/cart.png');
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: $NavHeight * 0.75 * 3  $NavHeight * 0.75;
    }
    .cartImgOn{
        background-position: 100% 100%;
    }
    .selfImg{
        background-image: url('../../assets/icon/profile.png');
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: $NavHeight * 0.75 * 3  $NavHeight * 0.75;
    }
    .selfImgOn{
        background-position: 100% 100%;
    }

    .cart-counter{
        position: absolute;
        width: 20px;
        height: 20px;
        top: 5px;
        line-height: 20px;
        border-radius: 50%;
        background-color: $mainOrange;
        color: #fff;
        font-size: 10px;
    }
</style>
