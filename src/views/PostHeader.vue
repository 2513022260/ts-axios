<template>
  <div class="home">
    <button @click="clickPostMethod">添加请求头</button>
    <button @click="clickURLSearchParamsPostMethod">请求data类型为URLSearchParams</button>
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
        headers: {
          "content-type": "application/json;charset=utf-8",
          Accept: "application/json,text/plain,*/*",
        },
        data: {
          a: 1,
          b: 2,
        },
      })
    }

    // 请求type URLSearchParams
    const paramsString = "q=URLUtils.searchParams&topic=api"
    const searchParams = new URLSearchParams(paramsString)
    const clickURLSearchParamsPostMethod = () => {
      axios({
        method: "post",
        url: "/api/base/post",
        data: searchParams,
      })
    }

    return {
      clickPostMethod,
      clickURLSearchParamsPostMethod,
    }
  },
})
</script>

<style lang="stylus" scoped></style>
