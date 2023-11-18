<template>
  <div class="grid grid-cols-1 min-[520px]:grid-cols-2 justify-center lg:justify-start lg:grid-cols-4 gap-5 mt-14">
    <div v-for="item in 4"
      class="hidden lg:flex flex-col items-center text-center p-7 gap-6 shadow-[0_10px_40px_0_rgba(0,0,0,0.05)] rounded-lg border-gray-100 border-[1px]">
      <div class="w-24 h-24 bg-[#3C09E5] rounded-full"></div>
      <span class="text-2xl font-semibold text-[#424E79]">Afzallik nomi</span>
      <p class="text-[#8F939D]">Bu yerda o’sha afzallik haqida anniq faktlar keltiriladi</p>
    </div>
    <div v-for="item in 4"
      class="flex lg:hidden flex-col items-center text-center p-7 gap-6 shadow-[0_10px_40px_0_rgba(0,0,0,0.05)] rounded-lg border-gray-100 border-[1px]">
      <div class="w-24 h-24 bg-[#3C09E5] rounded-full"></div>
      <span class="text-2xl font-semibold text-[#424E79]">Afzallik nomi</span>
      <p class="text-[#8F939D]">Bu yerda o’sha afzallik haqida anniq faktlar keltiriladi</p>
    </div>
  </div>
</template>