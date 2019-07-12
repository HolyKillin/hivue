<template>
    <div id="shop">
        <keep-alive>
            <router-view/>
        </keep-alive>
        <shop-nav></shop-nav>
    </div>
</template>

<script>
    import Nav from '../components/shopping/Nav.vue';
    export default {
        name: 'shop',
        components:{
            'shop-nav': Nav,
        },
    }
</script>

<style scoped>
    #shop {
        font-family: "Microsoft YaHei","微软雅黑",'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        height: 100%;
        position: relative;
    }

</style>
