<template>
  <div class="relative min-h-screen w-full bg-cover bg-no-repeat bg-center z-0"
    style="background-image: url('https://images.unsplash.com/photo-1502086223501-7ea6ecd79368')">
    <div
      class="-z-10 absolute top-0 left-0 bottom-0 right-0 h-full w-full overflow-hidden bg-fixed bg-gradient-to-r from-[#3D00FF] to-[#AE13E2] opacity-70">
    </div>
    <div class="z-10 text-white">
      <div class="max-w-6xl px-5 mx-auto h-24 flex items-center justify-between">
        <div class="flex items-center gap-2 cursor-pointer select-none">
          <img src="../assets/images/logo.svg" alt="Logo">
          <div class="flex flex-col">
            <span class="text-2xl font-sans">BOLALAR BOG'CHASI</span>
            <span>Axborot tizimi</span>
          </div>
        </div>

        <div class="flex items-center gap-6">
          <span class="cursor-pointer">Tizim haqida</span>
          <span class="cursor-pointer">Loyihalar</span>
          <span class="cursor-pointer">Qo'llanma</span>
          <span class="cursor-pointer">Aloqa</span>
          <div
            class="cursor-pointer flex items-center justify-center gap-3 bg-[#FF8A00] hover:bg-[#FF8A00dd] rounded-3xl p-3 w-48">
            <ph-user :size="24" />
            <span>Tizimga kirish</span>
          </div>
        </div>
      </div>

      <div class="max-w-6xl px-5 mx-auto flex items-center gap-14 py-10">
        <div class="basis-1/2 flex flex-col gap-4">
          <h2 class="text-[38px] leading-[44px] font-semibold">Maktabgacha Ta’lim Tashkilotlari monitoringi</h2>
          <p class="mb-4 lg:pr-6">Holisticly procrastinate mission-critical convergence with reliable customer service.
            Assertively underwhelm
            idea-sharing for impactful solutions.</p>

          <div class="flex items-center gap-6">
            <div class="flex items-center gap-6 cursor-pointer">
              <div class="flex items-center justify-center bg-[#FF8A00] hover:bg-[#FF8A00dd] rounded-3xl p-3 w-48">
                <span>Batafsil</span>
              </div>
            </div>

            <div class="flex items-center gap-2 cursor-pointer">
              <div
                class="w-12 h-12 rounded-full bg-white text-[#AE13E2] flex items-center justify-center hover:opacity-90">
                <ph-play :size="16" weight="fill" />
              </div>
              <span>Qo'llanma</span>
            </div>
          </div>

          <div class="flex items-center gap-12 mt-8">
            <div class="flex flex-col gap-1">
              <h3 class="text-3xl font-semibold">91,256</h3>
              <span class="text-sm">Foydalanuvchi</span>
            </div>
            <div class="flex flex-col gap-1">
              <h3 class="text-3xl font-semibold">48,576</h3>
              <span class="text-sm">Mijozlar</span>
            </div>
            <div class="flex flex-col gap-1">
              <h3 class="text-3xl font-semibold">58,578</h3>
              <span class="text-sm">Faol mijozlar</span>
            </div>
          </div>

        </div>
        <div class="basis-1/2 rounded-lg shadow-md">
          <img src="../assets/images/image 2.png" alt="Image" class="rounded-lg">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { PhUser, PhPlay } from '@phosphor-icons/vue';
</script>