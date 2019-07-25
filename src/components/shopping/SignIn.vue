<template>
  <div class="sign-in">
    <cube-input
      v-model="uname.value"
      :placeholder="uname.placeholder"
      :type="uname.type"
      :maxlength="uname.maxlength"
      :readonly="uname.readonly"
      :disabled="uname.disabled"
      :clearable="uname.clearable"
    ></cube-input>
    <cube-input
      v-model="psd.value"
      :placeholder="psd.placeholder"
      :type="psd.type"
      :maxlength="psd.maxlength"
      :readonly="psd.readonly"
      :disabled="psd.disabled"
      :clearable="psd.clearable"
      :eye="psd.eye"
    ></cube-input>
    <cube-button @click="login">登 录</cube-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname:{
        value: '王小明',
        placeholder: '请输入用户名',
        type: 'text',
        readonly: false,
        maxlength: 100,
        disabled: false,
        autofocus: true,
        autocomplete: true,
        clearable: true
      },
      psd:{
        value: '123456',
        placeholder: '请输入密码',
        type: 'password',
        maxlength: 100,
        eye: {
          open: false
        },
        clearable: true
      },
    }
  },
  methods: {
    login () {
      this.$store.commit('login', this.uname.value);
    },
  },
  components: {

  }
}
</script>

<style>

</style>
