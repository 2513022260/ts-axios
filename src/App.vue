<template>
  <div class="page">
    <div class="page-title">
      <h1>使用Typescript重构Axios</h1>
    </div>
    <div class="page-content">
      <MenuList class="page-menu" />
      <router-view class="page-main"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuList from '@/components/MenuList.vue'

export default defineComponent({
  components: { MenuList }
})
</script>

<style lang="stylus">
#app
  height 100%
  min-height 100vh
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  display flex
  flex-direction column

:root
  --themeColor #007fff

*
  margin 0
  padding 0
  box-sizing border-box
body
  background-color #fafafa
nav, ul, li
  list-style none
a
  text-decoration none
  color #2c3e50
button
  margin-bottom 10px
  padding 5px 8px
  background-color #fff
  border 1px solid #ddd
  border-radius 4px
  cursor pointer
  &:hover
    color var(--themeColor)
    border-color var(--themeColor)

.page
  display flex
  flex-direction column
  flex 1
.page-title
  margin-bottom 20px
  padding 0 20px
  height 60px
  line-height 60px
  background-color #fff
  box-shadow 0px 16px 32px rgba(0, 0, 0, 0.04)
  h1
    width 1260px
    margin 0 auto
    font-size 18px
.page-content
  flex 1
  display flex
  margin 0 auto
.page-menu
  width 240px
  margin-right 20px
  padding 20px 0
  flex-shrink 0
  background-color #fff
  border-radius 5px
  overflow hidden
.page-main
  width 1000px
  padding 20px
  background-color #fff
  border-radius 5px
  overflow hidden

.home
  button + button
    margin-left 20px
</style>
