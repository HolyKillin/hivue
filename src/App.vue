<template>
  <div id="app">
    <div id="nav">
<!--   router-link 即原v-link，如果你拥有这样一个链接：

<a v-link="'/about'">About</a>
你需要把它更新成：

<router-link to="/about">About</router-link>
注意：<router-link>不支持target="_blank"属性，如果你想打开一个新标签页，你必须用<a>标签。   -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/begin">起步</router-link> |
        <router-link to="/shopping-demo">Shopping Demo</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="stylus">
    html,body{
        height: 100%;
    }
    h1{
        font-size: 2em;
        font-weight: bold;
    }
    h2{
        font-size: 1.5em;
        font-weight: bold;
    }
    h3{
        font-size: 1.17em;
        font-weight: bold;
    }
    #app
      font-family 'Avenir', Helvetica, Arial, sans-serif
      -webkit-font-smoothing antialiased
      -moz-osx-font-smoothing grayscale
      text-align center
      color #2c3e50
      width 100%
      height 100%

    #nav
      padding 20px
      position: fixed;
      background: #fff;
      width: 100%;
      a
        font-weight bold
        color #2c3e50
        &.router-link-exact-active
          color #42b983
</style>
