<template>
  <div class="bg-[#F5F5F5] py-20">
    <div class="max-w-6xl px-5 mx-auto">
      <div class="max-w-xl mx-auto bg-white p-10 rounded-t-xl shadow-xl">
        <h2 class="text-3xl font-semibold mb-12 text-center">Kredit kalkulyatori</h2>
        <div class="flex flex-col gap-5">
          <div>
            <label for="sum" class="text-lg font-semibold">Kredit miqdori</label>
            <div class="relative border-[1px] border-[#DADADA] rounded-md mt-1">
              <ph-money :size="24" color="#969696" class="absolute top-3.5 left-3 select-none" />
              <input v-model="sum" type="number" name="sum" id="sum" min="0" max="100000000"
                placeholder="Kredit miqdorini kiriting"
                class="w-full outline-none pl-12 p-3 rounded-md text-lg text-gray-600">
            </div>
          </div>

          <div>
            <label for="interest" class="text-lg font-semibold">Foiz darajasi</label>
            <div class="relative border-[1px] border-[#DADADA] rounded-md mt-1">
              <ph-percent :size="24" color="#969696" class="absolute top-3.5 left-3 select-none" />
              <input v-model="interest" type="number" name="interest" id="interest" min="5" max="40"
                placeholder="Foiz darajasini kiriting"
                class="w-full outline-none pl-12 p-3 rounded-md text-lg text-gray-600">
            </div>
          </div>

          <div>
            <label for="period" class="text-lg font-semibold">Kredit muddati (oy)</label>
            <div class="relative border-[1px] border-[#DADADA] rounded-md mt-1">
              <ph-clock :size="24" color="#969696" class="absolute top-3.5 left-3 select-none" />
              <input v-model="period" type="number" name="period" id="period" min="1" max="240"
                placeholder="Kredit muddatini kiriting"
                class="w-full outline-none pl-12 p-3 rounded-md text-lg text-gray-600">
            </div>
          </div>

          <button @click="calculate"
            class="bg-[#3C09E5] font-medium sm:font-semibold text-white p-4 rounded-md hover:bg-[#1b09e5e3] outline-none">Hisoblash</button>

        </div>


      </div>
      <div
        class="max-w-xl mx-auto text-center rounded-b-xl select-none text-xl bg-gray-800 shadow-xl text-white font-semibold py-8 tracking-widest">
        <span>Oylik to'lov: </span>
        <span v-if="result">{{ result }}</span>
        <span v-if="!result">—</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { PhMoney, PhPercent, PhClock } from "@phosphor-icons/vue"
import { ref, computed } from 'vue'

const sum = ref()
const interest = ref()
const period = ref()

const isValid = computed(() => {
  return sum.value > 0 && interest.value > 0 && period.value > 0;
})

const result = ref()

function calculate() {
  if (isValid.value) {
    const monthlyPayment = (interest.value / 1200 * sum.value) / (1 - Math.pow(1 + interest.value / 1200, -period.value));
    result.value = Math.floor(monthlyPayment).toLocaleString('en-US');
  } else {
    result.value = '—'
  }
}
</script>

<style scoped>
::-webkit-inner-spin-button {
  appearance: none;
  display: none;
}
</style>