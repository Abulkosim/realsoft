<template>
  <div class="grid place-items-center h-screen bg-[#6416C5] select-none">
    <div class="flex flex-col rounded-lg bg-white shadow-lg gap-4 p-11 px-16 w-[576px]">
      <h2 class="text-3xl font-bold text-center">Tizimga kirish</h2>

      <div>
        <label for="email" class="text-lg font-semibold">Login</label>
        <div class="relative border-[1px] border-[#DADADA] rounded-md mt-2">
          <ph-user :size="24" color="#969696" class="absolute top-3.5 left-3 select-none" />
          <input type="email" name="email" id="email" placeholder="Kiritish"
            class="w-full outline-none pl-11 p-3 rounded-md text-lg text-gray-600">
        </div>
      </div>

      <div>
        <label for="password" class="text-lg font-semibold">Parol</label>
        <div class="relative border-[1px] border-[#DADADA] rounded-md mt-2">
          <ph-lock-key :size="24" color="#969696" class="absolute top-3.5 left-3 select-none" />
          <input :type="showHide" name="password" id="password" placeholder="Parol"
            class="w-full outline-none px-11 p-3 rounded-md text-lg text-gray-600">
          <ph-eye-slash @click="show = !show" :size="24" color="#969696" class="absolute top-3.5 right-3 select-none" />
        </div>
      </div>

      <button class="bg-[#3C09E5] font-semibold text-white p-4 rounded-md hover:bg-[#1b09e5e3]outline-none">Tizimga kirish</button>
      <button class="bg-[#0B0B2C] font-semibold text-white p-4 rounded-md hover:bg-[#0b0b2ce7]outline-none">Ro'yxatdan o'tish</button>

    </div>
    <!-- <button @click="$emit('submit')">Submit</button> -->
  </div>
</template>

<script setup>
import { PhUser, PhLockKey, PhEyeSlash } from "@phosphor-icons/vue";
import { ref, computed } from 'vue'

const props = defineProps({
  form: Object,
  title: String,
});

let show = ref(false)

const showHide = computed(() => {
  return show.value == true ? 'text' : 'password'
})
</script>