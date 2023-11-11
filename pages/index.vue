<template>
  <div>
    <p>
      <NuxtLink to="/secret">Secret Page</NuxtLink>
    </p>
    <div v-if="firebaseUser">
      <p>Firebase Auth Current User</p>
      <pre>{{ firebaseUser }}</pre>
    </div>
    <button @click="signOut">Sign out</button>
  </div>
</template>

<script setup>
useHead({
  title: 'Project'
})

definePageMeta({
  middleware: ["auth"]
})

import { signOut } from "../composables/useFirebase";

const firebaseUser = useFirebaseUser();
</script>