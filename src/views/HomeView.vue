<template>
  <div class="home">
    <button @click="methodGet">Method Get</button>
    <button @click="methodPost">Method Post</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from '@/axios/index'

export default defineComponent({
  setup() {
    // GET
    const methodGet = () => {
      axios({
        method: 'get',
        url: '/api/base/get',
        params: {
          a: 1,
          b: 2
        }
      })
    }
    // POST
    const methodPost = () => {
      axios({
        method: 'post',
        url: '/api/base/post',
        data: {
          a: 1,
          b: 2
        }
      })
    }

    return {
      methodGet,
      methodPost
    }
  }
});
</script>

<style lang="stylus" scoped>
.home
  button + button
    margin-left 20px
</style>
