<template>
  <div>
    <NuxtPage v-if="firebaseUser" />

    <div v-if="!firebaseUser">
      <!-- <Firebase title="Sign up" @submit="signup" :form="signupForm" /> -->
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
}
</style>