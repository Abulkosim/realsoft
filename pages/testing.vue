<template>
  <div>
    <div>
      <p>Testing</p>
    </div>
    <div v-if="firebaseUser">
    </div>
    <div v-else>
      <p>You have signed out!</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
})

const firebaseUser = useFirebaseUser();

</script>