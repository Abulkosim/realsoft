<template>
  <div>
    <div>
      <p>Secret</p>
    </div>
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
definePageMeta({
  middleware: ["auth"],
})

const firebaseUser = useFirebaseUser();

</script>