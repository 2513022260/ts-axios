<template>
  <div class="home">
    <button @click="clickPostMethod">普通对象参数</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import axios from "@/axios/index"

export default defineComponent({
  setup() {
    const clickPostMethod = () => {
      axios({
        method: "post",
        url: "/api/base/post",
        data: {
          a: 1,
          b: 2,
        },
      })
    }
    return {
      clickPostMethod,
    }
  },
})
</script>

<style lang="stylus" scoped>
</style>
