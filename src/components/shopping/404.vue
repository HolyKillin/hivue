<template>
    <div class="page-not-found">
        <header>
            <i class="cubeic-back" @click="goBack"></i>
            <h1>404</h1>
        </header>
        <main><h3>页面不见啦</h3></main>

    </div>
</template>

<script>
    export default {
        methods:{
            goBack() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
.page-not-found{
    width: 100%;
    height: 100%;
}
    header{
        position: absolute;
        top: 0;
        width: 100%;
        background: #fff;
        text-align: center;
    }
    header .cubeic-back{
        position: fixed;
        left: 19px;
        top: 19px;
        font-size: 130%;
    }
    header h1{
        line-height: 56px;
        height: 56px;
        border-bottom: 3px solid;
    }
    main{height: 100%;text-align: center;padding-top:59px;}
    main h3{
        position: absolute;
        top:50%;
        left: 10%;
        right: 10%;
    }
</style>
