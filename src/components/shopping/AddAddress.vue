<template>
    <div class="add-address">
        <header class="add-address-header">
            <i class="cubeic-back" @click="goBack"></i>
            <h3>新增收货地址</h3>
        </header>
        <main class="add-address-content">
            <cube-form>
                <cube-form-group>
                    <cube-form-item :field="fields[0]"></cube-form-item>
                    <cube-form-item :field="fields[1]"></cube-form-item>
                    <cube-form-item :field="fields[2]"></cube-form-item>
                    <cube-form-item :field="fields[3]"></cube-form-item>
                </cube-form-group>
            </cube-form>
        </main>
        <footer class="add-address-footer">
            <cube-button :inline="true">保存</cube-button>
            <cube-button :inline="true">重置</cube-button>
        </footer>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                validity: {},
                valid: undefined,
                model: {
                    realName: '',
                    phoneNum: '',
                    city: '',
                    street: ''
                },
                fields:[
                    {
                        type: 'input',
                        modelKey: 'realName',
                        label: '真实姓名',
                        rules: {
                            required: true
                        },
                        messages: {
                            required: '请输入真实姓名'
                        }
                    },
                    {
                        type: 'input',
                        modelKey: 'phoneNum',
                        label: '手机号码',
                        rules: {
                            required: true,
                            type: 'tel'
                        },
                        messages: {
                            required: '请输入正确的手机号码'
                        }
                    },
                    {
                        type: 'input',
                        modelKey: 'city',
                        label: '城市',
                        rules: {
                            required: true
                        },
                        messages: {
                            required: '请选择城市'
                        }
                    },
                    {
                        type: 'textarea',
                        modelKey: 'street',
                        label: '详细地址',
                        props:{
                            placeholder: '街道门牌号'
                        },
                        rules: {
                            required: true,
                            len: 5
                        },
                        messages: {
                            required: '至少输入5个字'
                        }
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
