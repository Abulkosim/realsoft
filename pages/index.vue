<template>
  <div>

    <div class="relative min-h-screen w-full bg-cover bg-no-repeat bg-center"
      style="background-image: url('https://images.unsplash.com/photo-1502086223501-7ea6ecd79368')">
      <div
        class="absolute top-0 left-0 bottom-0 right-0 h-full w-full overflow-hidden bg-fixed bg-gradient-to-r from-[#3D00FF] to-[#AE13E2] opacity-80">
      </div>
    </div>

    <div class="max-w-6xl mx-auto py-20">

      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-4">
          <h3 class="text-[#0047FF] font-semibold">TIZIMNIK AFZALLIKLARI</h3>
          <h2 class="text-3xl font-semibold">Bu tizim quyidagi afzalliklarga ega</h2>
        </div>
        <div class="text-gray-300 flex gap-2">
          <div
            class="w-11 h-11 rounded-md flex items-center justify-center border-[1px] border-gray-300 hover:text-[#775EC6] transition delay-200 ease-linear shadow-sm">
            <ph-arrow-left :size="24" />
          </div>
          <div
            class="w-11 h-11 rounded-md flex items-center justify-center border-[1px] border-gray-300 hover:text-[#775EC6] transition delay-200 ease-linear shadow-sm">
            <ph-arrow-right :size="24" />
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-10 mt-14">
        <div v-for="item in 4" class="flex flex-col items-center text-center p-7 gap-6 shadow-[0_10px_40px_0_rgba(0,0,0,0.05)] rounded-lg border-gray-100 border-[1px]">
          <div class="w-24 h-24 bg-[#3C09E5] rounded-full"></div>
          <span class="text-2xl font-semibold text-[#424E79]">Afzallik nomi</span>
          <p class="text-[#8F939D]">Bu yerda o’sha afzallik haqida anniq faktlar keltiriladi</p>
        </div>
      </div>

    </div>

    <!-- <p>
      <NuxtLink to=" /secret">Secret Page</NuxtLink>
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

import { PhArrowRight, PhArrowLeft } from "@phosphor-icons/vue";
import { signOut } from "../composables/useFirebase";

const firebaseUser = useFirebaseUser();
</script>