<template>
  <div class="sign-up">
    <cube-input
    ></cube-input>
    <cube-input
    ></cube-input>
    <cube-input
      v-model="value"
      :placeholder="placeholder"
      :type="type"
      :maxlength="maxlength"
      :readonly="readonly"
      :disabled="disabled"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :eye="eye"
    ></cube-input>
    <cube-button>注 册</cube-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      placeholder: '请输入内容',
      type: 'password',
      readonly: false,
      maxlength: 100,
      disabled: false,
      autofocus: true,
      autocomplete: true,
      eye: {
        open: true,
        reverse: false
      }
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
