<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="loginPost">post</button>
  </div>
</template>

<script>
import { login } from '@/axios/api/user'

export default {
  name: 'home',
  methods: {
    async loginPost () {
      const params = {
        username: '111'
      }
      await login(params)
    }
  }
}
</script>
