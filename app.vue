<template>
  <div>
    <NuxtPage v-if="firebaseUser" />

    <div v-if="!firebaseUser">
      <Firebase v-if="!log" title="Ro'yxatdan o'tish" @signup="signup" @signin="log = !log" :form="signupForm" />
      <Firebase v-if="log" title="Tizimga kirish" @signin="signin" @signup="log = !log" :form="signinForm" />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
useHead({
  title: 'Axborot Tizimi'
})

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

const log = ref(false)
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
}

.monospace span {
  font-family: monospace;
}
</style>