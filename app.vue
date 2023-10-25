<template>
  <div>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
    <pre>
{{ credentials }}
    </pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'
useHead({
  title: 'Images'
})

const credentials = ref()

const login = async () => {
  const email = 'abulkosimkataev@gmail.com'
  const password = '1234567890'

  credentials.value = await signIn(email, password)
}

const logout = async () => {
  credentials.value = await signOut()
}
</script>

<style scoped>
button {
  @apply p-3 m-3 border
}
</style>