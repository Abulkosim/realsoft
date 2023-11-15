<template>
  <div>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <!-- <p>
      <NuxtLink to="/testing">Testing Page</NuxtLink>
    </p>
    <div v-if="firebaseUser">
      <p>Firebase Auth Current User</p>
      <pre>{{ firebaseUser }}</pre>
    </div>
    <button @click="signOut">Sign out</button> -->
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"]
})

import { signOut } from "../composables/useFirebase";

const firebaseUser = useFirebaseUser();
</script>