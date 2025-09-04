<template>
  <div class="min-h-screen py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
          Where Voice Meets Privacy
        </h1>
        <p class="text-xl md:text-2xl text-neutral-300 mb-4">
          Offline voice control for homes, clinics, storefronts, and more.
        </p>
        <p class="text-lg text-blue-400 font-medium">
          If you can imagine it, Loqa can help you build it.
        </p>
      </div>

      <div class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-green-400">🏠 Personal / Home Use Cases</h2>
        </div>
        
        <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="bg-neutral-800 rounded-xl p-8 hover:bg-neutral-750 transition-all duration-300 transform hover:scale-105">
            <div class="text-4xl mb-4">🗣️</div>
            <h3 class="text-2xl font-bold mb-4 text-white">Smart Home Control</h3>
            <p class="text-lg text-neutral-300 mb-4 italic">
              "Lights, climate, music — all locally routed. Your home, your rules."
            </p>
            <p class="text-neutral-400">
              Control your home devices via voice without ever touching the cloud.
            </p>
          </div>

          <div class="bg-neutral-800 rounded-xl p-8 hover:bg-neutral-750 transition-all duration-300 transform hover:scale-105">
            <div class="text-4xl mb-4">⏰</div>
            <h3 class="text-2xl font-bold mb-4 text-white">Media & Reminders</h3>
            <p class="text-lg text-neutral-300 mb-4 italic">
              "Set a timer, queue a playlist, or add to your grocery list — no cloud involved."
            </p>
            <p class="text-neutral-400">
              Keep everyday convenience — minus the surveillance.
            </p>
          </div>

          <div class="bg-neutral-800 rounded-xl p-8 hover:bg-neutral-750 transition-all duration-300 transform hover:scale-105">
            <div class="text-4xl mb-4">🧠</div>
            <h3 class="text-2xl font-bold mb-4 text-white">Custom Skills for You</h3>
            <p class="text-lg text-neutral-300 mb-4 italic">
              "Write your own automations in plain language or code. Loqa speaks your dialect."
            </p>
            <p class="text-neutral-400">
              Perfect for tinkerers, developers, and accessibility advocates.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-blue-400">💼 Business / Professional Use Cases</h2>
        </div>
        
        <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="bg-neutral-800 rounded-xl p-8 hover:bg-neutral-750 transition-all duration-300">
            <div class="text-4xl mb-4">🧑‍⚕️</div>
            <h3 class="text-2xl font-bold mb-4 text-white">Therapist or Clinic Tools</h3>
            <p class="text-lg text-neutral-300 mb-4 italic">
              "Voice-to-text notes without cloud risk — ideal for HIPAA-conscious practices."
            </p>
            <p class="text-neutral-400 mb-4">
              Dictate session summaries or navigate client workflows entirely offline.
            </p>
            <div class="bg-neutral-900 rounded-lg p-4 border border-neutral-700">
              <div class="text-sm text-neutral-400 mb-2">Example Commands:</div>
              <div class="text-green-300 text-sm space-y-1">
                <div>• "Start session notes for Sarah"</div>
                <div>• "Patient reports improvement in anxiety levels"</div>
                <div>• "Schedule follow-up in two weeks"</div>
              </div>
            </div>
          </div>

          <div class="bg-neutral-800 rounded-xl p-8 hover:bg-neutral-750 transition-all duration-300">
            <div class="text-4xl mb-4">🛍️</div>
            <h3 class="text-2xl font-bold mb-4 text-white">Storefronts & Retail</h3>
            <p class="text-lg text-neutral-300 mb-4 italic">
              "'What aisle is the almond milk in?' — Loqa answers using your private inventory data."
            </p>
            <p class="text-neutral-400 mb-4">
              A voice assistant that respects your customer and protects your business context.
            </p>
            <div class="bg-neutral-900 rounded-lg p-4 border border-neutral-700">
              <div class="text-sm text-neutral-400 mb-2">Customer Interactions:</div>
              <div class="text-green-300 text-sm space-y-1">
                <div>• "Where can I find organic produce?"</div>
                <div>• "Do you have this item in stock?"</div>
                <div>• "What are your store hours?"</div>
              </div>
            </div>
          </div>

          <div class="bg-neutral-800 rounded-xl p-8 hover:bg-neutral-750 transition-all duration-300">
            <div class="text-4xl mb-4">🍽️</div>
            <h3 class="text-2xl font-bold mb-4 text-white">Restaurants & Cafés</h3>
            <p class="text-lg text-neutral-300 mb-4 italic">
              "What's in the chicken salad?"
            </p>
            <p class="text-neutral-400 mb-4">
              Let customers or staff ask about allergens, wait times, or hours — with data pulled from a local menu config or POS.
            </p>
            <div class="bg-neutral-900 rounded-lg p-4 border border-neutral-700">
              <div class="text-sm text-neutral-400 mb-2">Menu Queries:</div>
              <div class="text-green-300 text-sm space-y-1">
                <div>• "Does the pasta contain gluten?"</div>
                <div>• "What's today's soup special?"</div>
                <div>• "How long is the wait for a table?"</div>
              </div>
            </div>
          </div>

          <div class="bg-neutral-800 rounded-xl p-8 hover:bg-neutral-750 transition-all duration-300">
            <div class="text-4xl mb-4">🏨</div>
            <h3 class="text-2xl font-bold mb-4 text-white">Hotels & Kiosks</h3>
            <p class="text-lg text-neutral-300 mb-4 italic">
              "Where's the airport shuttle pickup?"
            </p>
            <p class="text-neutral-400 mb-4">
              Provide guest answers about check-in times, Wi-Fi, or room service — all served from local docs or YAML configs.
            </p>
            <div class="bg-neutral-900 rounded-lg p-4 border border-neutral-700">
              <div class="text-sm text-neutral-400 mb-2">Guest Services:</div>
              <div class="text-green-300 text-sm space-y-1">
                <div>• "What time does the pool close?"</div>
                <div>• "How do I connect to Wi-Fi?"</div>
                <div>• "Can I get extra towels?"</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-8">
          <div class="bg-neutral-800 rounded-xl p-8 hover:bg-neutral-750 transition-all duration-300">
            <div class="text-4xl mb-4">🏭</div>
            <h3 class="text-2xl font-bold mb-4 text-white">Warehouses & Factories</h3>
            <p class="text-lg text-neutral-300 mb-4 italic">
              "Loqa, begin scan mode."
            </p>
            <p class="text-neutral-400 mb-4">
              Offline voice control for rugged industrial workflows — integrate with scanners, equipment, or scripts.
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-neutral-900 rounded-lg p-4 border border-neutral-700">
                <div class="text-sm text-neutral-400 mb-2">Warehouse Commands:</div>
                <div class="text-green-300 text-sm space-y-1">
                  <div>• "Log inventory for station 5"</div>
                  <div>• "Start quality check protocol"</div>
                  <div>• "Mark pallet as complete"</div>
                </div>
              </div>
              <div class="bg-neutral-900 rounded-lg p-4 border border-neutral-700">
                <div class="text-sm text-neutral-400 mb-2">Safety Features:</div>
                <div class="text-orange-300 text-sm space-y-1">
                  <div>• Hands-free operation</div>
                  <div>• No network dependency</div>
                  <div>• Industrial-grade processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 text-center border border-blue-500/30">
        <div class="text-4xl mb-6">🧩</div>
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Need something specific?</h2>
        <p class="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          We offer <strong>custom development and deployment</strong> for teams and businesses.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <RouterLink 
            to="/contact" 
            class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
          >
            Contact Us
          </RouterLink>
          <a 
            href="mailto:info@loqalabs.com" 
            class="border border-blue-400 hover:border-blue-300 text-blue-400 hover:text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-blue-600/10"
          >
            info@loqalabs.com
          </a>
        </div>
      </div>

      <div class="mt-16 text-center">
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <RouterLink 
            to="/loqa" 
            class="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
          >
            Explore Loqa Platform
          </RouterLink>
          <a 
            href="https://loqalabs.github.io/loqa/" 
            target="_blank"
            class="border border-neutral-600 hover:border-neutral-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-neutral-800"
          >
            Technical Documentation
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// UseCasesPage component logic
</script>