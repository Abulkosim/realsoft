<template>
  <div>
    <NuxtPage v-if="firebaseUser" />

    <div v-if="!firebaseUser">
      <Firebase title="Sign up" @submit="signup" :form="signupForm" />
      <Firebase title="Sign in" @submit="signin" :form="signinForm" />
    </div>

  </div>
</template>

<script setup>

const signupForm = ref({ email: "", password: "" });
const signinForm = ref({ email: "", password: "" });

const firebaseUser = useFirebaseUser();

const signin = () => {
  signIn(signinForm.value.email, signinForm.value.password);
  signinForm.value = { email: "", password: "" };
};

const signup = async () => {
  signUp(signupForm.value.email, signupForm.value.password);
  signupForm.value = { email: "", password: "" };
};
</script>

<style scoped> button {
   @apply border-2 p-2 border-gray-700
 }
</style>