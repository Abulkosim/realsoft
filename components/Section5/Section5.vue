<template>
  <div class="bg-[#F5F5F5] py-20">
    <div class="max-w-6xl px-5 mx-auto" v-motion-slide-visible-once-bottom>
      <div class="max-w-xl mx-auto bg-white p-10 rounded-xl shadow-xl mb-8">
        <h2 class="text-2xl sm:text-3xl font-semibold mb-12 text-center">Kredit kalkulyatori</h2>
        <div class="flex flex-col gap-5">
          <div>
            <label for="sum" class="text-lg font-semibold">Kredit miqdori</label>
            <div class="relative border-[1px] border-[#DADADA] rounded-md mt-1">
              <ph-money :size="24" color="#969696" class="absolute top-3.5 left-3 select-none" />
              <input @input="answer = false" v-model="sum" type="number" name="sum" id="sum" min="0" max="100000000"
                placeholder="Kredit miqdorini kiriting"
                class="w-full outline-none pl-12 p-3 rounded-md sm:text-lg text-gray-600">
            </div>
          </div>

          <div>
            <label for="interest" class="text-lg font-semibold">Foiz darajasi</label>
            <div class="relative border-[1px] border-[#DADADA] rounded-md mt-1">
              <ph-percent :size="24" color="#969696" class="absolute top-3.5 left-3 select-none" />
              <input @input="answer = false" v-model="interest" type="number" name="interest" id="interest" min="5" max="40"
                placeholder="Foiz darajasini kiriting"
                class="w-full outline-none pl-12 p-3 rounded-md sm:text-lg text-gray-600">
            </div>
          </div>

          <div>
            <label for="period" class="text-lg font-semibold">Kredit muddati (oy)</label>
            <div class="relative border-[1px] border-[#DADADA] rounded-md mt-1">
              <ph-clock :size="24" color="#969696" class="absolute top-3.5 left-3 select-none" />
              <input @input="answer = false" v-model="period" type="number" name="period" id="period" min="1" max="240"
                placeholder="Kredit muddatini kiriting"
                class="w-full outline-none pl-12 p-3 rounded-md sm:text-lg text-gray-600">
            </div>
          </div>

          <button @click="answer = !answer; calculate()"
            class="bg-[#3C09E5] font-medium sm:font-semibold text-white p-4 rounded-md hover:bg-[#1b09e5e3] outline-none">Hisoblash</button>

        </div>
      </div>
      <Transition>
        <div v-if="answer"
          class="monospace max-w-xl mx-auto border-[1px] text-xl lg:text-2xl border-gray-300 bg-white p-10 rounded-xl tracking-wider font-medium text-center text-gray-600 shadow-sm">
          <div>
            <span>Umumiy to'lov: </span>
            <span v-if="overall">{{ overall }}</span>
            <span v-if="!overall">—</span>
          </div>
          <div>
            <span>Oylik to'lov: </span>
            <span v-if="result">{{ result }}</span>
            <span v-if="!result">—</span>
          </div>
        </div>
      </Transition>
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
const overall = ref()
const answer = ref(false)

function calculate() {
  if (isValid.value) {
    const monthlyPayment = (interest.value / 1200 * sum.value) / (1 - Math.pow(1 + interest.value / 1200, -period.value));
    result.value = Math.floor(monthlyPayment).toLocaleString('en-US');
    overall.value = (period.value * Math.floor(monthlyPayment)).toLocaleString('en-US');
  } else {
    result.value = '—'
    overall.value = '—'
  }
}
</script>

<style scoped>
::-webkit-inner-spin-button {
  appearance: none;
  display: none;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>