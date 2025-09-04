<template>
  <div class="min-h-screen py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          About Loqa Labs
        </h1>
        <p class="text-xl md:text-2xl text-neutral-300">
          Letter from the Lab
        </p>
      </div>

      <div class="bg-neutral-800/50 rounded-2xl p-12 text-center border border-neutral-700">
        <div class="text-6xl mb-8">📝</div>
        <h2 class="text-3xl font-bold mb-6 text-neutral-300">Coming Soon</h2>
        <p class="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
          We're preparing our full story — our mission, values, founding journey, 
          and commitment to building inclusive, privacy-first technology.
        </p>
        
        <div class="bg-neutral-800 rounded-xl p-6 mb-8 text-left max-w-2xl mx-auto">
          <h3 class="text-xl font-semibold mb-4 text-green-400">Preview: Our Values</h3>
          <ul class="space-y-2 text-neutral-300">
            <li>• Built for voices that don't fit the mold</li>
            <li>• Queer/trans/disabled/BIPOC inclusion first</li>
            <li>• Privacy is a right, not a luxury</li>
            <li>• Open source, community-powered</li>
            <li>• Technology should serve people, not platforms</li>
          </ul>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <RouterLink 
            to="/contact" 
            class="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            Get in Touch
          </RouterLink>
          <RouterLink 
            to="/" 
            class="border border-neutral-600 hover:border-neutral-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 hover:bg-neutral-800"
          >
            Back to Home
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>