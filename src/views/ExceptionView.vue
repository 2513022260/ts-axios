<template>
  <div class="home">
    <button @click="clickGetMethod">正常请求</button>
    <button @click="clickUrlError">url错误</button>
    <button @click="clickNetError">网络错误</button>
    <button @click="clickTimeoutError">请求超时</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import axios from "@/axios/index"

export default defineComponent({
  setup() {
    const clickGetMethod = () => {
      axios({
        method: "get",
        url: "/api/base/get",
      })
        .then((res) => {
          console.log(res)
        })
        .catch((e) => {
          console.log("e", e)
        })
    }
    const clickUrlError = () => {
      axios({
        method: "get",
        url: "/api/base/get123",
      })
        .then((res) => {
          console.log(res)
        })
        .catch((e) => {
          console.log("url error", e)
        })
    }
    const clickNetError = () => {
      setTimeout(() => {
        axios({
          method: "get",
          url: "/api/base/get",
        })
          .then((res) => {
            console.log(res)
          })
          .catch((e) => {
            console.log("net error", e)
          })
      }, 5000)
    }
    const clickTimeoutError = () => {
      axios({
        method: "get",
        url: "/api/base/get",
        timeout: 2000,
      })
        .then((res) => {
          console.log(res)
        })
        .catch((e) => {
          console.log("timeout error", e)
        })
    }
    return {
      clickGetMethod,
      clickUrlError,
      clickNetError,
      clickTimeoutError,
    }
  },
})
</script>

<style lang="stylus" scoped></style>
