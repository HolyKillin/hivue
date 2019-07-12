<template>
    <div class="my-input-number">
        <i class="cubeic-remove" @click="minus"></i>
        <span class="inputText">{{ number }}</span>
        <i class="cubeic-add" @click="plus"></i>
    </div>
</template>

<script>
    export default {
        name: 'MyInputNumber',
        props: ['count'],
        data() {
            return{
                operator: ''
            }
        },
        computed: {
            number(){
                return this.count;
            }
        },
        methods: {
            changeNumber(){
                this.$emit('changeNumberEvent',this.operator);
            },
            minus(){
                this.operator = 'minus';
                this.changeNumber();
            },
            plus(){
                this.operator = 'plus';
                this.changeNumber();
            }
        }
    }
</script>

<style scoped>
    .cubeic-remove,
    .cubeic-add{
        font-size: 20px;
        color: #ff65af;
    }
    .my-input-number{
        display: inline-block;
        user-select: none;
    }
    .inputText{
        display: inline-block;
        width: 20px;
        font-size: 16px;
        text-align: center;
    }
</style>
