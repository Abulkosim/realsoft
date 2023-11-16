<template>
  <div class="relative sm:flex sm:items-center sm:justify-center px-4 py-8 min-h-screen select-none sm:bg-[rgb(100,22,197)]">
    <div v-motion-fade
      class="flex flex-col rounded-lg bg-white sm:shadow-lg gap-4 p-6 sm:p-11 sm:px-16 max-w-xl mx-auto sm:w-[576px] z-10">
      <h2 class="text-2xl font-bold text-start min-[400px]:text-3xl min-[400px]:text-center mb-2">{{ title }}
      </h2>

      <div>
        <label for="email" class="text-lg font-semibold">Email</label>
        <div class="relative border-[1px] border-[#DADADA] rounded-md mt-1">
          <ph-user :size="24" color="#969696" class="absolute top-3.5 left-3 select-none" />
          <input v-model="form.email" type="email" name="email" id="email" placeholder="Kiritish"
            class="w-full outline-none pl-11 p-3 rounded-md text-lg text-gray-600">
        </div>
      </div>

      <div>
        <label for="password" class="text-lg font-semibold">Parol</label>
        <div class="relative border-[1px] border-[#DADADA] rounded-md mt-1">
          <ph-lock-key :size="24" color="#969696" class="absolute top-3.5 left-3 select-none" />
          <input v-model="form.password" :type="showHide" name="password" id="password" placeholder="Parol"
            class="w-full outline-none px-11 p-3 rounded-md text-lg text-gray-600">
          <ph-eye-slash @click="show = !show" :size="24" color="#969696"
            class="absolute top-3.5 right-3 select-none cursor-pointer" />
        </div>
      </div>

      <div class="flex flex-col gap-4 mt-2 mb-4" :class="type">
        <button
          class="bg-[#3C09E5] font-medium sm:font-semibold text-white p-4 rounded-md hover:bg-[#1b09e5e3] outline-none"
          @click="$emit('signin')">Tizimga kirish</button>
        <button
          class="bg-[#0B0B2C] font-medium sm:font-semibold text-white p-4 rounded-md hover:bg-[#0b0b2ce7] outline-none"
          @click="$emit('signup')">Ro'yxatdan
          o'tish</button>
      </div>

      <span class="text-center">© REALSOFT 2023</span>
    </div>
    <div class="hidden sm:block absolute bg-[#6d24c8] w-52 h-52 -top-6 -left-2 rotate-12 rounded-2xl"></div>
    <div class="hidden sm:block absolute bg-[#6d24c8] w-52 h-52 bottom-8 -right-12 rotate-12 rounded-2xl"></div>
  </div>
</template>

<script setup>
import { PhUser, PhLockKey, PhEyeSlash } from "@phosphor-icons/vue";
import { ref, computed } from 'vue'

const props = defineProps({
  form: Object,
  title: String,
});

const type = computed(() => {
  return props.title == 'Tizimga kirish' ? 'flex-col' : 'flex-col-reverse'
})

let show = ref(false)

const showHide = computed(() => {
  return show.value == true ? 'text' : 'password'
})
</script>