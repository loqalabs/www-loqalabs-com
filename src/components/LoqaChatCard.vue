<template>
  <div class="w-full h-full flex flex-col justify-center items-center px-4 text-center space-y-4 transition-all duration-500">
    <div class="flex items-start gap-3 w-full max-w-xs mx-auto">
      <div class="w-10 aspect-square rounded-full bg-white/10 p-0.5 border border-gray-400 flex items-center justify-center shrink-0">
        <img src="/src/assets/avatars/user-avatar.png" alt="User" class="w-8 h-8 rounded-full object-cover" />
      </div>
      <div class="chat-bubble user animate-fade-in-up">“{{ userRequest }}”</div>
    </div>
    <div class="flex items-start gap-3 w-full max-w-xs mx-auto justify-end flex-row-reverse">
      <img src="/src/assets/avatars/loqa-avatar.png" alt="Loqa" class="w-12 h-12 rounded-full" />
      <div class="chat-bubble loqa animate-fade-in-up delay-150">{{ loqaReply }}</div>
    </div>
    <p class="carousel-caption">{{ caption }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  userRequest: string
  loqaReply: string
  caption: string
}>()
</script>