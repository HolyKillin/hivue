<template>
    <div class="one-commodity">
        <div class="left" v-loading="loadingImg">
            <img :src="img"/>
        </div>
        <div class="right">
            <div class="text">
                <h3 class="title">{{title}}</h3>
                <p class="content">{{content}}</p>
                <span class="price">￥
                    <span class="price-number">{{price}}</span>
                </span>
            </div>
            <div class="cart-btn">
                <cube-button>+</cube-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'one-commodity',
        props: ['id','img', 'title', 'content', 'price', 'count'],
        data (){
            return {
                loadingImg: true,
                oneCommodity: {
                    id: this.id,
                    img: this.img,
                    title: this.title,
                    content: this.content,
                    price: this.price,
                    count: this.count,
                    isInCart: false,
                }
            }
        },
        created () {
            let img = new Image();
            img.src = this.img;
            img.onload = () => {
                this.loadingImg = false;
            }
        }

    }
</script>

<style lang="stylus" scoped>
    @import '../../assets/css/variable.styl';
    .one-commodity
        height: $OneCommodityWrapHeight
        width: 100%
        font-size: 0
        border-bottom: 1px solid #e4e7ed
        background-color: #fff
        .left
            width: 40%
            height: 100%
        .left>img
            height: 80%
            transform: translateY(10%)
        .right
            box-sizing: border-box
            position: relative
            height: 100%
            width: 60%
            text-align: left
            padding-left: 10px
            .text
                position: absolute
                line-height: 30px
                top: 50%
                transform: translateY(-50%)
            .price
                .price-number
                    color: #ff65af
                    font-size: 18px
                    font-weight: 600
            .cart-btn
                position: absolute
                bottom: 5px
                right: 10px
                .cube-btn
                    background-color: #ff65af
                    border-color: #ff65af
                    border-radius: 50%
                    padding: 12px 16px;
    .one-commodity>div
        font-size: $GobalFontSize
        display: inline-block
        vertical-align: middle
    @media screen and (min-width: 600px) {
        .one-commodity{
            height: $OneCommodityWrapHeight600;
        }
    }
    @media screen and (min-width: 800px) {
        .one-commodity{
            height: $OneCommodityWrapHeight800;
        }
    }
    @media screen and (min-width: 1025px) {
        .one-commodity{
            height: $OneCommodityWrapHeight1025;
        }
    }
</style>
