<template>
  <div class="max-w-6xl px-5 mx-auto h-24 flex items-center justify-between">
    <div class="flex items-center gap-2 cursor-pointer select-none">
      <img src="../../assets/images/logo.svg" alt="Logo">
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
        <div v-if="!firebaseUser"
          class="cursor-pointer flex items-center justify-center gap-2 bg-[#FF8A00] hover:bg-[#FF8A00dd] rounded-3xl p-3 w-48">
          <ph-user :size="24" />
          <span>Tizimga kirish</span>
        </div>
        <div v-if="firebaseUser" @click="signOut"
          class="cursor-pointer flex items-center justify-center gap-2 bg-[#FF8A00] hover:bg-[#FF8A00dd] rounded-3xl p-3 w-52">
          <ph-user :size="24" />
          <span>Tizimdan chiqish</span>
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
            <div v-if="!firebaseUser"
              class="cursor-pointer flex items-center justify-center gap-2 bg-[#6416C5] hover:bg-[#6416C5ee] text-white rounded-3xl p-3 w-48">
              <ph-user :size="24" />
              <span>Tizimga kirish</span>
            </div>
            <div v-if="firebaseUser" @click="signOut"
              class="cursor-pointer flex items-center justify-center gap-2 bg-[#FF8A00] hover:bg-[#FF8A00dd] rounded-3xl p-3 w-52 text-white">
              <ph-user :size="24" />
              <span>Tizimdan chiqish</span>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
<script setup>
import { PhUser, PhList } from '@phosphor-icons/vue';
import { ref } from 'vue'

const firebaseUser = useFirebaseUser();
import { signOut } from "../composables/useFirebase";

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