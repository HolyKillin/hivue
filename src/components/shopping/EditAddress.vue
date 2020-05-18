<template>
    <div class="edit-address">
        <header class="edit-address-header">
            <i class="cubeic-back" @click="goBack"></i>
            <h3>修改收货地址</h3>
        </header>
        <main class="edit-address-content">
            <cube-form :model="newAddForm" ref="newAddForm">
                <cube-form-group>
                    <cube-form-item :field="fields[0]">
                        <cube-input v-model="newAddForm.name"></cube-input>
                    </cube-form-item>
                    <cube-form-item :field="fields[1]">
                        <cube-input v-model="newAddForm.phone"></cube-input>
                    </cube-form-item>
                    <cube-form-item :field="fields[2]">
                        <cube-input v-model="newAddForm.city"></cube-input>
                    </cube-form-item>
                    <cube-form-item :field="fields[3]">
                        <cube-input v-model="newAddForm.detailedAddress"></cube-input>
                    </cube-form-item>
                </cube-form-group>
            </cube-form>
        </main>
        <footer class="edit-address-footer">
            <cube-button type="submit">保存</cube-button>
            <cube-button>删除</cube-button>
        </footer>
    </div>
</template>

<script>
    export default {
        data(){
            let validatePhone = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('手机号不能为空'));
                } else if (!/^1[3-9]{1}[0-9]{9}$/.test(value)) {
                    return callback(new Error('手机号不正确'));
                } else {
                    callback();
                }
            };
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
                        props: {
                            placeholder: '请输入真实姓名'
                        },
                        rules: {
                            required: true
                        },
                        messages: {
                            required: '请先输入真实姓名'
                        }
                    },
                    {
                        type: 'input',
                        modelKey: 'phoneNum',
                        label: '手机号码',
                        props: {
                            placeholder: '请输入手机号码'
                        },
                        rules: {
                            required: true,
                            type: 'tel'
                        },
                        messages: {
                            required: '请输入正确的手机号码'
                        }
                    },
                    {
                        type: 'select',
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
                ],
                // rules: {
                //     name: [
                //         { required: true, message: '请输入名字', trigger: 'blur' }
                //     ],
                //     phone: [
                //         {required: true, validator: validatePhone, trigger: 'blur'}
                //     ],
                //     city: [
                //         { required: true, message: '请输入所在城市', trigger: 'blur' }
                //     ],
                //     detailAddress: [
                //         { required: true, message: '请输入详细地址', trigger: 'blur' }
                //     ],
                // }
            }
        },
        computed: {
            itemIndex () {
                return this.$route.query.index;
            },
            newAddForm() {
                return this.$store.state.address[this.itemIndex];
            }
        },
        methods:{
            goBack() {
                this.$router.go(-1)
            },
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../../assets/css/variable.styl';
.edit-address
        position absolute
        width 100%
        height 100%
        background #f5f5f5
        .edit-address-header
            /*position fixed*/
            /*top 0*/
            /*left 0*/
            /*z-index 999*/
            text-align center
            width 100%
            background-color #fff
            .cubeic-back
                position: fixed;
                left: 19px;
                top: 19px;
                font-size: 130%;
            h3
                letter-spacing 3px
                height: $HomeHeaderHeight - 30px
                line-height: $HomeHeaderHeight - 30px
                border-bottom: 3px solid #ffad7e
        .edit-address-content
            /*padding-top $HeaderHeight*/
        .edit-address-footer
            z-index 9999
            width: 100%;
            height: $NavHeight;
            position: fixed;
            bottom: 0;
            left: 0;
            border-top: 1px solid #eee
            background-color #fff
            display inline-flex
</style>
