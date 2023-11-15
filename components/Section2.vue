<template>
  <div class="max-w-6xl px-5 mx-auto py-20">

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
      <div v-for="item in 4"
        class="flex flex-col items-center text-center p-7 gap-6 shadow-[0_10px_40px_0_rgba(0,0,0,0.05)] rounded-lg border-gray-100 border-[1px]">
        <div class="w-24 h-24 bg-[#3C09E5] rounded-full"></div>
        <span class="text-2xl font-semibold text-[#424E79]">Afzallik nomi</span>
        <p class="text-[#8F939D]">Bu yerda o’sha afzallik haqida anniq faktlar keltiriladi</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { PhArrowRight, PhArrowLeft } from "@phosphor-icons/vue";

</script>