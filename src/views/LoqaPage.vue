<template>
  <div class="min-h-screen py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1
          class="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Loqa
        </h1>
        <p class="text-xl md:text-2xl text-neutral-300 mb-8">
          A local-first voice assistant that runs entirely offline
        </p>
      </div>

      <div class="bg-neutral-800/50 rounded-2xl p-12 text-center border border-neutral-700">
        <div class="text-6xl mb-8">🚧</div>
        <h2 class="text-3xl font-bold mb-6 text-neutral-300">Coming Soon</h2>
        <p class="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
          We're crafting the perfect introduction to our flagship voice platform. This page will
          showcase Loqa's architecture, features, and capabilities.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://loqalabs.github.io/loqa/"
            target="_blank"
            class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            View Documentation
          </a>
          <RouterLink
            to="/use-cases"
            class="border border-neutral-600 hover:border-neutral-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 hover:bg-neutral-800"
          >
            Explore Use Cases
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
