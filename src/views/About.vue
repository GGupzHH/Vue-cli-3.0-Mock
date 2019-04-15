<template>
  <div class="about">
    <h1>Opens the console</h1>
    <div class="box">
      <button @click="login">request-post</button>
      <button @click="arbitrarily">request-Arbitrarily</button>
      <button @click="fn3">request3</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    async login () {
      let res = await this.$http.post(`/api/login`, {
        username: 'admin',
        password: 'admin'
      })
      console.log(res)
    },
    async arbitrarily () {
      let res = await this.$http.put(`/api/users`)
      console.log(res)
    },
    async fn3 () {
      let res = await this.$http.post(`/api/zhh`, {
        name: 'zhh',
        age: 12
      })
      console.log(res)
    }
  }
}
</script>
<style lang="less">
.box {
  width: 150px;
  position: absolute;
  left: 50%;
  top: 300px;
  transform: translate(-50%, -50%);
  button {
    margin-right: 20px;
    margin-bottom: 20px;
    width: 150px;
    height: 35px;
    display: block;
    border-radius: 4px;
    outline: 0;
    appearance: none;
    -moz-appearance: none;
  }
}
</style>