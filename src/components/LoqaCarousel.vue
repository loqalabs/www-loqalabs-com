<template>
  <div
    ref="swipeTarget"
    class="relative h-[280px] sm:h-[300px] md:h-[320px] flex items-center justify-center overflow-hidden"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
  >
    <transition-group name="slide" tag="div" class="absolute inset-0 w-full h-full">
      <div
        v-for="(child, index) in $slots.default?.()"
        :key="index"
        v-show="currentExample === index"
        class="absolute inset-0"
      >
        <component :is="child" />
      </div>
    </transition-group>

    <!-- Navigation dots -->
    <div class="absolute bottom-4 w-full flex justify-center space-x-3 mt-4 z-10">
      <button
        v-for="(_, index) in $slots.default?.().length || 0"
        :key="index"
        class="w-3 h-3 rounded-full border border-white/20 shadow transition-all duration-300"
        :class="{
          'bg-loqa-blue scale-110': currentExample === index,
          'bg-gray-500 opacity-60 hover:opacity-100': currentExample !== index,
        }"
        @click="currentExample = index"
      />
    </div>

    <!-- Swipe hint -->
    <div
      class="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 sm:hidden"
    >
      Swipe left or right →
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, useSlots, watchEffect } from 'vue'
import { useSwipe } from '@vueuse/core'

const slots = useSlots()
const currentExample = ref(0)
const isPaused = ref(false)
const swipeTarget = ref(null)
let interval: ReturnType<typeof setInterval>

const { direction } = useSwipe(swipeTarget)

// Watch for swipe direction changes
watchEffect(() => {
  if (direction.value === 'left') {
    currentExample.value = (currentExample.value + 1) % (slots.default?.().length || 1)
  } else if (direction.value === 'right') {
    currentExample.value =
      (currentExample.value - 1 + (slots.default?.().length || 1)) % (slots.default?.().length || 1)
  }
})

onMounted(() => {
  interval = setInterval(() => {
    if (!isPaused.value && slots.default?.().length)
      currentExample.value = (currentExample.value + 1) % slots.default().length
  }, 7000)
})

onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
