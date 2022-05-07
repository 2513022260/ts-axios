<template>
  <div class="home">
    <button @click="clickResponseMethod">处理响应数据</button>
    <button @click="clickResponseTypeMethod">responseType</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import axios from "@/axios/index"

export default defineComponent({
  setup() {
    const clickResponseMethod = () => {
      axios({
        method: "post",
        url: "/api/base/postResponse",
        data: {
          a: 1,
          b: 2,
        },
      }).then((res) => {
        console.log(res)
      })
    }

    const clickResponseTypeMethod = () => {
      axios({
        method: "post",
        url: "/api/base/postResponse",
        responseType: "json",
        data: {
          a: 1,
          b: 2,
        },
      }).then((res) => {
        console.log(res)
      })
    }

    return {
      clickResponseMethod,
      clickResponseTypeMethod,
    }
  },
})
</script>

<style lang="stylus" scoped></style>
