<template>
  <div>
    <Section1 v-motion-fade />
    <Section2 v-motion-slide-visible-once-bottom />
    <Section3 v-motion-slide-visible-once-bottom />
    <Section4 v-motion-slide-visible-once-bottom />
    <Section5 v-motion-fade/> 
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"]
})
</script>