<template>
  <div>
    <h2>{{ title }}</h2>
    <div>
      <label>Email</label>
      <div>
        <input v-model="form.email" type="email" />
      </div>
    </div>
    <div>
      <div>
        <label>Password</label>
        <div>
          <input v-model="form.password" type="password" />
        </div>
      </div>
    </div>

    <button @click="$emit('submit')">Submit</button>
  </div>
</template>

<script setup>
const props = defineProps({
  form: Object,
  title: String,
});
</script>

<style scoped>
input {
  @apply border-2 p-2 border-gray-700
}
</style>