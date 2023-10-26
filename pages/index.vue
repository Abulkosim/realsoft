<template>
  <div>
    <p>
      <NuxtLink to="/secret">Secret Page</NuxtLink>
    </p>
    <button @click="login" v-if="!firebaseUser">Login</button>
    <button @click="logout" v-if="firebaseUser">Logout</button>
    <div v-if="firebaseUser">
      <pre>
{{ firebaseUser }}
    </pre>
    </div>
    <div v-else>
      <p>You have signed out!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
useHead({
  title: 'Images'
})

definePageMeta({
  middleware: ["auth"]
})

const credentials = ref()
const firebaseUser = useFirebaseUser();

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