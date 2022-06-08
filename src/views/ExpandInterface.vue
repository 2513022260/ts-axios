<template>
  <div class="home">
    <button @click="clickMethod">通过扩展的接口方法请求</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import axios from "@/axios/index"

export default defineComponent({
  setup() {
    const clickMethod = () => {
      axios({
        url: "/api/base/post",
        method: "post",
        headers: {
          "content-type": "application/json;charset=utf-8"
        },
        data: {
          msg: "hi",
        },
      })

      axios.request({
        url: "/api/base/post",
        method: "post",
        data: {
          msg: "hello",
        },
      })

      axios.get("/api/base/get")
      axios.options("/api/base/options")
      axios.delete("/api/base/delete")
      axios.head("/api/base/head")
      axios.post("/api/base/post")
      axios.put("/api/base/put")
      axios.patch("/api/base/patch")
    }
    return {
      clickMethod,
    }
  },
})
</script>

<style lang="stylus" scoped></style>
