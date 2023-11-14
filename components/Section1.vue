<template>
  <div class="relative min-h-screen w-full bg-cover bg-no-repeat bg-center"
    style="background-image: url('https://images.unsplash.com/photo-1502086223501-7ea6ecd79368')">
    <div
      class="absolute top-0 left-0 bottom-0 right-0 h-full w-full overflow-hidden bg-fixed bg-gradient-to-r from-[#3D00FF] to-[#AE13E2] opacity-80 text-white">

      <div class="max-w-6xl mx-auto h-24 flex items-center justify-between">
        <div class="flex items-center gap-2 cursor-pointer select-none">
          <img src="../assets/images/logo.svg" alt="Logo">
          <div class="flex flex-col">
            <span class="text-2xl font-sans">BOLALAR BOG'CHASI</span>
            <span>Axborot tizimi</span>
          </div>
        </div>

        <div class="flex items-center gap-6">
          <span>Tizim haqida</span>
          <span>Loyihalar</span>
          <span>Qo'llanma</span>
          <span>Aloqa</span>
          <div class="flex items-center justify-center gap-3 bg-[#FF8A00] hover:bg-[#FF8A00dd] rounded-3xl p-3 w-48">
            <ph-user :size="24" />
            <span>Tizimga kirish</span>
          </div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto flex items-center gap-14 py-10">
        <div class="basis-1/2 flex flex-col gap-6">
          <h2 class="text-4xl font-semibold">Maktabgacha Ta’lim Tashkilotlari monitoringi</h2>
          <p>Holisticly procrastinate mission-critical convergence with reliable customer service. Assertively underwhelm
            idea-sharing for impactful solutions.</p>

          <div class="flex items-center gap-6">
            <div class="flex items-center justify-center bg-[#FF8A00] hover:bg-[#FF8A00dd] rounded-3xl p-3 w-48">
              <span>Batafsil</span>
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
import { PhUser } from '@phosphor-icons/vue';
</script>