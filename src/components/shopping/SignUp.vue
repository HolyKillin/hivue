<template>
  <div class="sign-up">
    <cube-form>
      <cube-form-group>
        <cube-form-item :field="fields[0]"></cube-form-item>
        <cube-form-item :field="fields[1]"></cube-form-item>
        <cube-form-item :field="fields[2]"></cube-form-item>
      </cube-form-group>
      <cube-form-group>
        <cube-button type="submit">注 册</cube-button>
      </cube-form-group>
    </cube-form>
  </div>
</template>

<script>
export default {

  data() {
    return {
      validity: {},
      valid: undefined,
      model: {
        uName: '',
        psd: '',
        confirmPsd: ''
      },
      fields: [
        {
          type: 'input',
          modelKey: 'uName',
          label: '用户名',
          props: {
            placeholder: '请输入用户名'
          },
          rules: {
            required: true
          }
        },
        {
          type: 'input',
          modelKey: 'psd',
          label: '密码',
          props: {//form包含了所有表单元素，在<cube-form>中可以使用<cube-input>、<cube-checkbox>等的配置项
            placeholder: '请输入密码',
            type: 'password',
            eye: {
              open: false,
              reverse: false
            },
            clearable: true
          },
          rules: {
            // required: true
          }
        },
        {
          type: 'input',
          modelKey: 'confirmPsd',
          label: '确认密码',
          props: {
            placeholder: '请再次输入密码',
            type: 'password',
            eye: {
              open: false
            },
            clearable: true
          },
          rules: {
            // required: true
          }
        },
      ]
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style>

</style>
