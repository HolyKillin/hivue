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
            <cube-button type="submit">保存</cube-button>
            <cube-button>重置</cube-button>
        </footer>
    </div>
</template>

<script>
import { provinceList, cityList, areaList } from '../../assets/js/area'
    const cityData = provinceList
    cityData.forEach(province => {
        province.children = cityList[province.value]
        province.children.forEach(city => {
            city.children = areaList[city.value]
        })
    })
    const PCA = {
        props: {
            value: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                selected: []
            }
        },
        render(createElement) {
            return createElement('cube-button', {
                on: {
                    click: this.showPicker

                }
            }, this.selected.length ? this.selected.join(' ') : 'placeholder')
        },
        mounted() {
            this.picker = this.$createCascadePicker({
                title: 'PCA Select',
                data: cityData,
                selectedIndex: this.value,
                onSelect: this.selectHandler
            })
        },
        methods: {
            showPicker() {
                this.picker.show()
            },
            selectHandler(selectedVal, selectedIndex, selectedTxt) {
                this.selected = selectedTxt
                this.$emit('input', selectedVal)
            }
        }
    }

    export default {
        data(){
            return{
                validity: {},
                valid: undefined,
                model: {
                    realName: '',
                    phoneNum: '',
                    city: [],
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
                        component: PCA,
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
                            required: true
                        },
                        messages: {
                            required: '至少输入5个字'
                        }
                    }
                ]
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../../assets/css/variable.styl';
.add-address
        position absolute
        width 100%
        height 100%
        background #f5f5f5
        .add-address-header
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
        .add-address-content
            /*padding-top $HeaderHeight*/
        .add-address-footer
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
