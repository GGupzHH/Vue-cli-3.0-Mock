<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ admin }}</h1>
    <button @click="fn">请求</button>
    <button @click="fn2">请求2</button>
    <button @click="fn3">请求3</button>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      admin: 'sss'
    }
  },
  methods: {
    async fn () {
      let res = await this.$http.post(`/api/login`, {
        username: 'admin',
        password: 'admin'
      })
      console.log(res)
    },
    async fn2 () {
      let res = await this.$http.post(`/api/users`)
      console.log(res)
    },
    async fn3 () {
      let res = await this.$http.post(`/api/zhh`, {
        name: 'zhh',
        age: 12
      })
      console.log(res)
    }
  },
}
</script>
<style lang="less">
</style>