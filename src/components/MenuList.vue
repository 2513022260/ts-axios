<template>
  <nav class="left-menu">
    <ul>
      <li :key="item.name" v-for="item in menu">
        <router-link :to="{ name: item.name } ">{{ item.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  setup() {
    const menu = [
      { name: "home", label: "实现基础（一）" },
      { name: "get", label: "处理GET请求的URL参数（二）" },
      { name: "post", label: "处理POST请求参数（三）" },
      { name: "postHeader", label: "处理请求头header（四）" },
    ]

    return {
      menu,
    }
  },
})
</script>

<style lang="stylus" scoped>
ul
  display flex
  flex-direction column
li
  height 40px
  line-height 40px
  border-bottom 1px solid #ddd
  a
    display block
    width 100%
    height 100%
    padding 0 20px
    font-size 12px
    text-align left
    &:hover
      color #fff
      background-color var(--themeColor)
.router-link-active
  color #fff
  background-color var(--themeColor)
</style>
