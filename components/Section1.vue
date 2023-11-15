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
            <span class="text-lg font-semibold sm:font-normal sm:text-2xl font-sans">BOLALAR BOG'CHASI</span>
            <span class="text-sm sm:text-base">Axborot tizimi</span>
          </div>
        </div>

        <div class="flex items-center gap-6">
          <div class="hidden lg:flex items-center gap-6">
            <a href="#" class="cursor-pointer">Tizim haqida</a>
            <a href="#" class="cursor-pointer">Loyihalar</a>
            <a href="#" class="cursor-pointer">Qo'llanma</a>
            <a href="#" class="cursor-pointer">Aloqa</a>
            <div
              class="cursor-pointer flex items-center justify-center gap-3 bg-[#FF8A00] hover:bg-[#FF8A00dd] rounded-3xl p-3 w-48">
              <ph-user :size="24" />
              <span>Tizimga kirish</span>
            </div>
          </div>
          <div @click.stop class="relative">
            <div @click="showMenu = !showMenu" class="lg:hidden cursor-pointer">
              <ph-list :size="32" />
            </div>
            <Transition>
              <div @click.prevent v-if="showMenu"
                class="lg:hidden absolute top-7 right-7 flex flex-col items-center text-gray-600 rounded-2xl rounded-tr-none shadow-xl bg-white p-5 gap-5">
                <a href="#" class="cursor-pointer">Tizim haqida</a>
                <a href="#" class="cursor-pointer">Loyihalar</a>
                <a href="#" class="cursor-pointer">Qo'llanma</a>
                <a href="#" class="cursor-pointer">Aloqa</a>
                <div
                  class="cursor-pointer flex items-center justify-center gap-3 bg-[#6416C5] hover:bg-[#6416C5ee] text-white rounded-3xl p-3 w-48">
                  <ph-user :size="24" />
                  <span>Tizimga kirish</span>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>

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
            <img src="../assets/images/image 2.png" alt="Image" class="rounded-lg">
          </div>

          <div class="flex flex-col-reverse min-[480px]:flex-row items-center gap-6 mt-2 md:mt-5">
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
          <img src="../assets/images/image 2.png" alt="Image" class="rounded-lg">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { PhUser, PhPlay, PhList } from '@phosphor-icons/vue';
import { ref } from 'vue'

const showMenu = ref(false)

window.addEventListener('click', () => {
  showMenu.value = false;
})
</script> 

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>