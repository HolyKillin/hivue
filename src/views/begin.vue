<template>
    <div id="begin">
        <h1>site : {{site}}</h1>
        <h1>url : {{url}}</h1>
        <h1>Alexa : {{alexa}}</h1>
        <h1>details : {{details()}}</h1>
        <slide-show :slides="slides" :inv="invTime"></slide-show>
    </div>


</template>

<script>
    import slideShow from '../components/slideShow'
    export default {
        components: {
            slideShow
        },
        data () {
            return{
                site:"菜鸟教程",
                url:"www.runoob.com",
                alexa:10000,
                invTime: 2000,
                slides:[
                    {
                        src: require('../assets/slideShow/pic1.jpg'),
                        title: 'xxx1',
                        href: 'detail/analysis'
                    },
                    {
                        src: require('../assets/slideShow/pic2.jpg'),
                        title: 'xxx2',
                        href: 'detail/count'
                    },
                    {
                        src: require('../assets/slideShow/pic3.jpg'),
                        title: 'xxx3',
                        href: 'http://xxx.xxx.com'
                    },
                    {
                        src: require('../assets/slideShow/pic4.jpg'),
                        title: 'xxx4',
                        href: 'detail/forecast'
                    }
                ],
            }
        },
        methods: {
            details: function() {
                return  this.site + " - 学的不仅是技术，更是梦想！";
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import "../assets/css/variable.styl";
    #begin{padding-top:$HeaderHeight;}
    .index-left-block .hr {
        margin-bottom: 20px;
    }
    .index-left-block h2 {
        background: #4fc08d;
        color: #fff;
        padding: 10px 15px;
        margin-bottom: 20px;
    }
    .index-left-block h3 {
        padding: 0 15px 5px 15px;
        font-weight: bold;
        color: #222;
    }
    .index-left-block ul {
        padding: 10px 15px;
    }
    .index-left-block li {
        padding: 5px;
    }


    .index-board-item h2 {
        font-size: 18px;
        font-weight: bold;
        color: #000;
        margin-bottom: 15px;
    }

</style>
