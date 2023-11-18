<template>
  <div class="max-w-6xl px-5 mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-14 py-8 md:py-16">
    <div class="lg:basis-1/2 flex flex-col items-center text-center lg:text-start lg:items-start gap-4">
      <h2 class="text-2xl sm:text-3xl md:text-[38px] md:leading-[44px] font-semibold">Maktabgacha Ta’lim Tashkilotlari
        monitoringi
      </h2>
      <p class="mb-4 md:px-20 md:text-lg lg:text-base lg:px-0 lg:pr-6">Holisticly procrastinate mission-critical
        convergence with reliable customer service.
        Assertively underwhelm
        idea-sharing for impactful solutions.</p>

      <div class="lg:hidden rounded-lg shadow-md">
        <img src="../../assets/images/image 2.png" alt="Image" class="rounded-lg">
      </div>

      <div class="flex flex-col-reverse min-[480px]:flex-row items-center gap-6 mt-2 md:mt-5">
        <div class="flex items-center gap-6 cursor-pointer">
          <div class="flex items-center justify-center bg-[#FF8A00] hover:bg-[#FF8A00dd] rounded-3xl p-3 w-48">
            <span>Batafsil</span>
          </div>
        </div>

        <div class="flex items-center gap-2 cursor-pointer">
          <div class="w-12 h-12 rounded-full bg-white text-[#AE13E2] flex items-center justify-center hover:opacity-90">
            <ph-play :size="16" weight="fill" />
          </div>
          <span>Qo'llanma</span>
        </div>
      </div>

      <div class="hidden min-[420px]:flex items-center gap-8 text-center my-2 lg:text-start sm:gap-12 sm:mt-8">
        <div class="flex flex-col">
          <h3 class="text-xl sm:text-3xl font-semibold">91,256</h3>
          <span class="text-sm">Foydalanuvchi</span>
        </div>
        <div class="flex flex-col">
          <h3 class="text-xl sm:text-3xl font-semibold">48,576</h3>
          <span class="text-sm">Mijozlar</span>
        </div>
        <div class="flex flex-col">
          <h3 class="text-xl sm:text-3xl font-semibold">58,578</h3>
          <span class="text-sm">Faol mijozlar</span>
        </div>
      </div>

    </div>
    <div class="hidden lg:block lg:basis-1/2 rounded-lg shadow-md">
      <img src="../../assets/images/image 2.png" alt="Image" class="rounded-lg">
    </div>
  </div>
</template>
<script setup>
import { PhPlay } from '@phosphor-icons/vue';
</script>