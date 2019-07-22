<template>
    <div class="one-commodity">
        <div class="left" v-loading="loadingImg">
            <img :src="img" @click="goToDetailsPage"/>
        </div>
        <div class="right">
            <div class="text">
                <h3 class="title" @click="goToDetailsPage">{{title}}</h3>
                <p class="content">{{content}}</p>
                <span class="price">￥
                    <span class="price-number">{{price}}</span>
                </span>
            </div>
            <div class="cart-btn">
                <cube-button @click.stop.native="addGoodsToCart" v-show="counter === 0">+</cube-button>
                <my-input-number :count="counter" v-show="counter > 0" @changeNumberEvent="getOperator"></my-input-number>
            </div>
        </div>
    </div>
</template>

<script>
    import "../../assets/js/loading.js";
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
        computed: {
            counter (){
                let that = this;
                let result = 0;
                let cartGoods = this.$store.state.cartGoods;

/*Array对象的 some()方法用于检测数组中的元素是否满足指定条件（函数提供）。
some() 方法会依次执行数组的每个元素：
    如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
    如果没有满足条件的元素，则返回false。
注意： some() 不会对空数组进行检测。
注意： some() 不会改变原始数组。*/

                cartGoods.some(good => {
                    if (good.id === that.id) {
                        /*this指向的是调用此方法的对象，而箭头函数能很好的解决这个回调地狱，所以这句话其实可以直接用this，
                        但是如果是用function()，在里面用this指向的就是这个function了，
                        这样的话则务必先在前面赋值，保存this当前指向对象再做使用*/
                        result = good.count;
                    }
                });
                return result;
            }
        },
        methods: {
            addGoodsToCart () {
                this.$store.commit('addGoodsToCart', this.oneCommodity);
            },
            getOperator (op) {
                let id = this.oneCommodity.id;
                if (op === 'plus') {
                    this.$store.commit('addGoods', id);
                } else {
                    let count = this.$store.state.cartGoods.filter(val => {
                        return val.id === id;
                    })[0].count;
                    if (count === 1) {
                        this.$store.commit('deleteGoodsFromCart', id);
                    } else {
                        this.$store.commit('reduceGoods', id);
                    }
                }
            },
            goToDetailsPage () {
                this.$router.push({
                    path: '/DetailsPage',
                    query: this.oneCommodity
                });
                //解决主页与详情页切换时，菜单栏无法更新获取当前路由的问题
                this.$store.state.cartCounter++;
                this.$store.state.cartCounter--;
            },
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
                    color: $mainOrange
                    font-size: 18px
                    font-weight: 600
            .cart-btn
                position: absolute
                bottom: 5px
                right: 10px
                .cube-btn
                    background-color: $mainOrange
                    border-color: $mainOrange
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
