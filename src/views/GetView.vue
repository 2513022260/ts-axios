<template>
  <div class="home">
    <button @click="clickGetMethod(1)">普通参数</button>
    <button @click="clickGetMethod(2)">参数为数组</button>
    <button @click="clickGetMethod(3)">参数为对象</button>
    <button @click="clickGetMethod(4)">参数为日期</button>
    <button @click="clickGetMethod(5)">参数为特殊字符</button>
    <button @click="clickGetMethod(6)">参数为null或者undefined</button>
    <button @click="methodGetHash">URL含hash#</button>
    <button @click="methodGetParams">URL已存在参数</button>
    <button @click="methodALlParams">全部参数</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import axios from "@/axios/index"

export default defineComponent({
  setup() {
    const clickGetMethod = (type: number) => {
      let params = {}
      if (type === 1) {
        // 普通参数
        params = { a: 1, b: 1 }
      } else if (type === 2) {
        // 对象参数
        params = { foo: ["bar", "baz"] }
      } else if (type === 3) {
        // 数组参数
        params = {
          foo: {
            bar: "baz",
          },
        }
      } else if (type === 4) {
        // 日期参数
        params = {
          date: new Date(),
        }
      } else if (type === 5) {
        // 特殊字符参数
        params = {
          foo: "@:$, ",
        }
      } else if (type === 6) {
        // null、undefined
        params = {
          foo: "123",
          bar: null,
          baz: undefined,
        }
      } else {
        params = {}
      }

      methodGet(params)
    }
    // GET
    const methodGet = (params: object) => {
      axios({
        method: "get",
        url: "/api/base/get",
        params,
      })
    }
    // GET hash
    const methodGetHash = () => {
      axios({
        method: "get",
        url: "/api/base/get#hash?foo=123",
        params: {
          bar: "123",
        },
      })
    }
    // GET params
    const methodGetParams = () => {
      axios({
        method: "get",
        url: "/api/base/get?foo=123",
        params: {
          bar: "123",
        },
      })
    }
    // GET 所有类型
    const methodALlParams = () => {
      axios({
        method: "get",
        url: "/api/base/get?foo=123",
        params: {
          bar: "123",
          arr: ['a', 'b'],
          date: new Date(),
          obj: { c: 1 },
          isNull: null,
          isUndefined: undefined
        },
      })
    }

    return {
      methodGet,
      clickGetMethod,
      methodGetHash,
      methodGetParams,
      methodALlParams
    }
  },
})
</script>

<style lang="stylus" scoped></style>
