<template>
  <div class="flex flex-col md:flex-row text-center md:text-start gap-6 md:gap-4 items-center justify-between">
    <div class="flex flex-col gap-4">
      <h3 class="text-[#0047FF] font-semibold">TIZIMNIK AFZALLIKLARI</h3>
      <h2 class="text-2xl sm:text-3xl font-semibold">Bu tizim quyidagi afzalliklarga ega</h2>
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
</template>

<script setup>
import { PhArrowRight, PhArrowLeft } from "@phosphor-icons/vue";
</script>