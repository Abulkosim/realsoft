<template>
  <div class="max-w-6xl px-5 mx-auto py-14 lg:pt-20 lg:pb-32 flex flex-col lg:flex-row items-center gap-8 lg:gap-14 bg-white">

    <div class="basis-1/2 flex flex-col gap-4 max-w-xl">
      <h3 class="text-[#0047FF] font-semibold text-center md:text-start">TIZIMNIK AFZALLIKLARI</h3>
      <h2 class="text-2xl sm:text-3xl font-semibold  text-center md:text-start">Bu tizim quyidagi afzalliklarga ega</h2>
      <p v-for="item in 2" class="text-[#8F939D] text-sm lg:text-base">
        Est cillum officia magna Lorem sunt officia elit in mollit enim nostrud minim. Et anim cillum ea exercitation
        adipisicing consectetur enim proident tempor pariatur velit voluptate sunt. Minim laboris qui ullamco consequat
        mollit consectetur adipisicing sint cupidatat anim ex aute. Laborum Lorem nostrud anim magna aute enim ullamco
        nulla tempor anim tempor pariatur nulla commodo.
      </p>
    </div>
    <div class="basis-1/2 grid grid-cols-1 min-[500px]:grid-cols-2 gap-4 lg:gap-6 max-w-xl">
      <div
        class="border-[1px] border-gray-100 shadow-lg rounded-xl p-11 flex items-center flex-col gap-4 font-bold text-center">
        <div class="w-20 h-20 bg-[#FF8A00] rounded-full"></div>
        <span>Elektron shaklda ariza to’ldirish</span>
      </div>
      <div
        class="lg:relative top-10 border-[1px] border-gray-100 shadow-lg rounded-xl p-11 flex items-center flex-col gap-4 font-bold text-center">
        <div class="w-20 h-20 bg-[#FF8A00] rounded-full"></div>
        <span>Elektron shaklda ariza to’ldirish</span>
      </div>
      <div
        class="border-[1px] border-gray-100 shadow-lg rounded-xl p-11 flex items-center flex-col gap-4 font-bold text-center">
        <div class="w-20 h-20 bg-[#FF8A00] rounded-full"></div>
        <span>Elektron shaklda ariza to’ldirish</span>
      </div>
      <div
        class="lg:relative top-10 border-[1px] border-gray-100 shadow-lg rounded-xl p-11 flex items-center flex-col gap-4 font-bold text-center">
        <div class="w-20 h-20 bg-[#FF8A00] rounded-full"></div>
        <span>Elektron shaklda ariza to’ldirish</span>
      </div>
    </div>

  </div>
</template> 
<script setup>
</script>