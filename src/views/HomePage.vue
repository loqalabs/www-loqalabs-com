<template>
  <div class="min-h-screen">
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
          Voice tech that listens — but never listens in.
        </h1>
        <p class="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto">
          Open by design. Powered by community. Built for you.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <RouterLink 
            to="/loqa" 
            class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
          >
            Get Started
          </RouterLink>
          <a 
            href="https://loqalabs.github.io/loqa/" 
            target="_blank"
            class="border border-neutral-600 hover:border-neutral-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-neutral-800"
          >
            View Docs
          </a>
          <RouterLink 
            to="/contact" 
            class="text-neutral-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            Contact Us
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-800/50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Featured Project</h2>
        </div>
        
        <div class="bg-neutral-800 rounded-xl p-8 hover:bg-neutral-750 transition-colors duration-300">
          <div class="flex flex-col md:flex-row items-center">
            <div class="flex-1 md:pr-8 mb-6 md:mb-0">
              <h3 class="text-2xl md:text-3xl font-bold mb-4 text-blue-400">Loqa</h3>
              <p class="text-lg text-neutral-300 mb-6 leading-relaxed">
                A local-first voice assistant that runs entirely offline. Control your smart home, 
                manage your tasks, and interact with your devices — all while keeping your privacy intact.
              </p>
              <div class="flex flex-wrap gap-3 mb-6">
                <span class="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">Offline-First</span>
                <span class="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">Privacy-Focused</span>
                <span class="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">Open Source</span>
                <span class="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-sm">Customizable</span>
              </div>
              <RouterLink 
                to="/loqa" 
                class="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
              >
                Learn More 
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </RouterLink>
            </div>
            <div class="flex-1 max-w-md">
              <div class="bg-neutral-900 rounded-lg p-6 border border-neutral-700">
                <div class="text-sm text-neutral-400 mb-2">$ loqa</div>
                <div class="text-green-400 mb-2">Loqa is listening...</div>
                <div class="text-blue-300 mb-1">&gt; "Turn on the living room lights"</div>
                <div class="text-neutral-300 mb-2">✓ Living room lights turned on</div>
                <div class="text-blue-300 mb-1">&gt; "What's the weather?"</div>
                <div class="text-neutral-300">⛅ Currently 72°F, partly cloudy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Use Cases</h2>
          <p class="text-lg text-neutral-300">Discover how Loqa can transform your daily workflows</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div class="bg-neutral-800 rounded-lg p-6 hover:bg-neutral-750 transition-colors duration-300">
            <div class="text-3xl mb-3">🏠</div>
            <h3 class="text-xl font-semibold mb-3">Smart Home</h3>
            <p class="text-neutral-300 text-sm">Control lights, climate, and devices with voice commands that never leave your home.</p>
          </div>
          
          <div class="bg-neutral-800 rounded-lg p-6 hover:bg-neutral-750 transition-colors duration-300">
            <div class="text-3xl mb-3">🧑‍⚕️</div>
            <h3 class="text-xl font-semibold mb-3">Healthcare</h3>
            <p class="text-neutral-300 text-sm">HIPAA-compliant voice notes and patient workflow automation for clinics and practices.</p>
          </div>
          
          <div class="bg-neutral-800 rounded-lg p-6 hover:bg-neutral-750 transition-colors duration-300">
            <div class="text-3xl mb-3">🛍️</div>
            <h3 class="text-xl font-semibold mb-3">Retail</h3>
            <p class="text-neutral-300 text-sm">Customer assistance and inventory queries powered by your private business data.</p>
          </div>
          
          <div class="bg-neutral-800 rounded-lg p-6 hover:bg-neutral-750 transition-colors duration-300">
            <div class="text-3xl mb-3">🧩</div>
            <h3 class="text-xl font-semibold mb-3">Custom Dev</h3>
            <p class="text-neutral-300 text-sm">Build your own voice-powered automations with our flexible platform.</p>
          </div>
        </div>
        
        <div class="text-center">
          <RouterLink 
            to="/use-cases" 
            class="inline-flex items-center bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Explore All Use Cases
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-800/30">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Letter from the Lab</h2>
        </div>
        
        <div class="prose prose-lg prose-invert max-w-none">
          <div class="text-neutral-300 leading-relaxed space-y-4">
            <p>
              We're building voice technology for everyone — especially voices that don't fit the mold. 
              As a queer-led, community-powered organization, we believe privacy isn't a luxury, it's a right.
            </p>
            <p>
              Our tools are designed for people who've been marginalized by mainstream tech: 
              LGBTQ+ individuals, people with disabilities, BIPOC communities, and anyone who values 
              digital autonomy over corporate surveillance.
            </p>
            <p>
              Every line of code we write is open source. Every decision we make prioritizes 
              your agency over our profit. Because technology should serve people, not platforms.
            </p>
          </div>
          
          <div class="text-center mt-8">
            <RouterLink 
              to="/about" 
              class="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-lg transition-colors duration-200"
            >
              Read the Full Story
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// HomePage component logic can be added here
</script>