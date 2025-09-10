<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      <div
        class="absolute inset-0 bg-linear-to-br from-loqa-blue/5 via-transparent to-loqa-gold/5"
      ></div>
      <div class="max-w-4xl mx-auto text-center relative z-10">
        <!-- Loqa Labs Logo -->
        <div class="mb-8">
          <img
            src="/src/assets/logos/loqalabs_logo-transparent.png"
            alt="Loqa Labs"
            class="h-48 w-auto mx-auto rounded-lg border-2 border-loqa-blue/30 p-3 bg-dark-slate/20 shadow-2xl"
          />
        </div>

        <h1
          class="text-3xl md:text-5xl font-bold mb-6 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent"
        >
          Voice tech that listens — but never listens in.
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          All the magic. None of the strings.
        </p>

        <!-- Hero CTA Buttons -->
        <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://loqalabs.github.io/loqa/"
            target="_blank"
            class="bg-loqa-blue text-black font-semibold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Get Started in 5 Minutes
          </a>
          <RouterLink
            to="/loqa"
            class="border border-gray-600 text-gray-300 font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200"
          >
            Learn About Loqa
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Loqa Section -->
    <section class="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div class="max-w-6xl mx-auto">
        <div
          class="bg-gray-900/50 rounded-xl p-8 hover:bg-gray-900/70 transition-colors duration-300"
        >
          <div class="flex flex-col md:flex-row items-center">
            <div class="flex-1 md:pr-8 mb-6 md:mb-0">
              <div class="flex items-center mb-4">
                <img
                  src="/src/assets/logos/loqa_logo-transparent.png"
                  alt="Loqa"
                  class="h-48 w-auto mr-3"
                />
              </div>
              <p class="text-lg text-gray-300 mb-6 leading-relaxed">
                A local-first voice assistant that runs entirely offline. Control your smart home,
                manage your tasks, and interact with your devices — all while keeping your privacy
                intact.
              </p>
              <div class="flex flex-wrap gap-3 mb-6">
                <span class="bg-loqa-blue/20 text-loqa-blue px-3 py-1 rounded-full text-sm"
                  >Offline-First</span
                >
                <span class="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm"
                  >Privacy-Focused</span
                >
                <span class="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                  >Open Source</span
                >
                <span class="bg-loqa-gold/20 text-loqa-gold px-3 py-1 rounded-full text-sm"
                  >Customizable</span
                >
              </div>
              <RouterLink
                to="/loqa"
                class="inline-flex items-center text-loqa-blue hover:text-cyan-400 font-semibold transition-colors duration-200"
              >
                Learn More
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </RouterLink>
            </div>
            <div class="flex-1 max-w-md">
              <div class="bg-black/30 rounded-lg p-6 border border-gray-700">
                <div class="text-sm text-gray-400 mb-2">$ loqa</div>
                <div class="text-green-400 mb-2">Loqa is listening...</div>
                <div class="text-loqa-blue mb-1">&gt; "Turn on the living room lights"</div>
                <div class="text-gray-300 mb-2">✓ Living room lights turned on</div>
                <div class="text-loqa-blue mb-1">&gt; "What's the weather?"</div>
                <div class="text-gray-300">⛅ Currently 72°F, partly cloudy</div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <RouterLink
              to="/loqa"
              class="bg-loqa-gold hover:bg-amber-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Try It Now
            </RouterLink>
            <a
              href="https://loqalabs.github.io/loqa/"
              target="_blank"
              class="border border-loqa-blue hover:border-loqa-gold text-loqa-blue hover:text-loqa-gold px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-loqa-blue/10"
            >
              View Documentation
            </a>
            <a
              href="#"
              class="border border-loqa-blue hover:border-loqa-gold text-loqa-blue hover:text-loqa-gold px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-loqa-blue/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- What Makes Loqa Different -->
    <section class="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div class="max-w-(--breakpoint-lg) mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-loqa-gold">
            What Makes Loqa Different
          </h2>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">
            Privacy-first voice assistance with the power you expect, but none of the surveillance.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Card 1: 100% Private -->
          <div
            class="bg-gray-900/50 rounded-lg p-6 shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
          >
            <div class="w-12 h-12 bg-loqa-blue rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-white">100% Private</h3>
            <p class="text-gray-300">All voice data stays on your network</p>
          </div>

          <!-- Card 2: Natural Commands -->
          <div
            class="bg-gray-900/50 rounded-lg p-6 shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
          >
            <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-white">Natural Commands</h3>
            <p class="text-gray-300">Speak like a human, not a robot</p>
          </div>

          <!-- Card 3: Fully Hackable -->
          <div
            class="bg-gray-900/50 rounded-lg p-6 shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
          >
            <div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-white">Fully Hackable</h3>
            <p class="text-gray-300">Tweak everything. Extend anything.</p>
          </div>

          <!-- Card 4: Lightning Fast -->
          <div
            class="bg-gray-900/50 rounded-lg p-6 shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
          >
            <div class="w-12 h-12 bg-loqa-gold rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-white">Lightning Fast</h3>
            <p class="text-gray-300">Local-first means no lag</p>
          </div>

          <!-- Card 5: Real-time Timeline -->
          <div
            class="bg-gray-900/50 rounded-lg p-6 shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
          >
            <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-white">Real-time Timeline</h3>
            <p class="text-gray-300">Debug voice interactions visually</p>
          </div>

          <!-- Card 6: Community Driven -->
          <div
            class="bg-gray-900/50 rounded-lg p-6 shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
          >
            <div class="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-white">Community Driven</h3>
            <p class="text-gray-300">Built in public with transparent values</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-loqa-gold">Our Values</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Value 1: Local-First -->
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4 text-loqa-blue">Local-First</h3>
            <p class="text-gray-300 leading-relaxed">
              Everything runs on your own hardware. No cloud dependency.
            </p>
          </div>

          <!-- Value 2: Values-First -->
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4 text-loqa-gold">Values-First</h3>
            <p class="text-gray-300 leading-relaxed">
              Privacy, consent, and control are non-negotiables — not optional extras.
            </p>
          </div>

          <!-- Value 3: Community-First -->
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4 text-loqa-blue">Community-First</h3>
            <p class="text-gray-300 leading-relaxed">
              We welcome tinkerers, open-source contributors, and voices that don't fit the mold.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Preview -->
    <section class="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div class="max-w-(--breakpoint-lg) mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Use Cases</h2>
          <p class="text-lg text-gray-300">Discover how Loqa can transform your daily workflows</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div
            class="bg-gray-900/50 rounded-lg p-6 shadow-md hover:shadow-xl transform hover:scale-[1.02] hover:bg-gray-900/70 transition-all duration-300"
          >
            <div class="text-4xl mb-4">🏠</div>
            <h3 class="text-xl font-semibold mb-3 text-white">Smart Home Control</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Voice control for lights, thermostats, and IoT devices. Everything stays local—no data
              leaves your network.
            </p>
          </div>

          <div
            class="bg-gray-900/50 rounded-lg p-6 shadow-md hover:shadow-xl transform hover:scale-[1.02] hover:bg-gray-900/70 transition-all duration-300"
          >
            <div class="text-4xl mb-4">🧑‍⚕️</div>
            <h3 class="text-xl font-semibold mb-3 text-white">Therapists & Coaches</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Dictate secure session notes without the cloud. Ideal for HIPAA-conscious practices
              who need privacy and speed.
            </p>
          </div>

          <div
            class="bg-gray-900/50 rounded-lg p-6 shadow-md hover:shadow-xl transform hover:scale-[1.02] hover:bg-gray-900/70 transition-all duration-300"
          >
            <div class="text-4xl mb-4">🛍️</div>
            <h3 class="text-xl font-semibold mb-3 text-white">Retail & Hospitality</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Customer assistance powered by your private inventory data. Answer questions about
              products, hours, and services.
            </p>
          </div>

          <div
            class="bg-gray-900/50 rounded-lg p-6 shadow-md hover:shadow-xl transform hover:scale-[1.02] hover:bg-gray-900/70 transition-all duration-300"
          >
            <div class="text-4xl mb-4">🏭</div>
            <h3 class="text-xl font-semibold mb-3 text-white">Industrial & Warehouse</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Hands-free operations for inventory management, quality control, and equipment
              monitoring in rugged environments.
            </p>
          </div>

          <div
            class="bg-gray-900/50 rounded-lg p-6 shadow-md hover:shadow-xl transform hover:scale-[1.02] hover:bg-gray-900/70 transition-all duration-300"
          >
            <div class="text-4xl mb-4">🧩</div>
            <h3 class="text-xl font-semibold mb-3 text-white">Custom Development</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Build domain-specific voice assistants. Integrate with your existing tools and
              workflows using our open APIs.
            </p>
          </div>

          <div
            class="bg-gray-900/50 rounded-lg p-6 shadow-md hover:shadow-xl transform hover:scale-[1.02] hover:bg-gray-900/70 transition-all duration-300"
          >
            <div class="text-4xl mb-4">🏡</div>
            <h3 class="text-xl font-semibold mb-3 text-white">Accessibility Tools</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Voice interfaces for users with mobility challenges or visual impairments. Private,
              reliable, and fully customizable.
            </p>
          </div>
        </div>

        <div class="text-center">
          <RouterLink
            to="/use-cases"
            class="inline-flex items-center bg-loqa-gold text-black hover:bg-amber-600 px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            Explore All Use Cases
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Ready to Speak Freely CTA -->
    <section
      class="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-loqa-blue to-cyan-600 relative overflow-hidden"
    >
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="max-w-4xl mx-auto text-center relative z-10">
        <h2 class="text-4xl md:text-6xl font-bold mb-6 text-black">Ready to speak freely?</h2>
        <p class="text-xl md:text-2xl text-black/80 mb-8 max-w-2xl mx-auto">
          Deploy your own voice assistant today — no cloud required.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://loqalabs.github.io/loqa/"
            target="_blank"
            class="bg-black text-white font-semibold px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 shadow-xl"
          >
            Get Started
          </a>
          <RouterLink
            to="/use-cases"
            class="border-2 border-black text-black font-semibold px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-all duration-200"
          >
            See Use Cases
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black/50 border-t border-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <!-- Column 1: Brand -->
          <div class="pt-1">
            <img
              src="/src/assets/logos/loqalabs_logo-transparent.png"
              alt="Loqa Labs"
              class="h-12 w-auto mb-4"
            />
            <p class="text-gray-300 text-sm leading-relaxed">
              Privacy-first voice tech that listens — but never listens in.
            </p>
          </div>

          <!-- Column 2: Product -->
          <div class="pt-1">
            <h4 class="text-white font-semibold mb-4">Product</h4>
            <ul class="space-y-2">
              <li>
                <RouterLink
                  to="/loqa"
                  class="text-sm text-gray-400 hover:text-loqa-blue transition-colors duration-150"
                  >Loqa</RouterLink
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm text-gray-400 hover:text-loqa-blue transition-colors duration-150"
                  >Features</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm text-gray-400 hover:text-loqa-blue transition-colors duration-150"
                  >Hardware</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm text-gray-400 hover:text-loqa-blue transition-colors duration-150"
                  >Skills</a
                >
              </li>
            </ul>
          </div>

          <!-- Column 3: Community -->
          <div class="pt-1">
            <h4 class="text-white font-semibold mb-4">Community</h4>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="text-sm text-gray-400 hover:text-loqa-blue transition-colors duration-150"
                  >GitHub</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm text-gray-400 hover:text-loqa-blue transition-colors duration-150"
                  >Contributing</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm text-gray-400 hover:text-loqa-blue transition-colors duration-150"
                  >Code of Conduct</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm text-gray-400 hover:text-loqa-blue transition-colors duration-150"
                  >Security</a
                >
              </li>
            </ul>
          </div>

          <!-- Column 4: Support -->
          <div class="pt-1">
            <h4 class="text-white font-semibold mb-4">Support</h4>
            <ul class="space-y-2">
              <li>
                <a
                  href="https://loqalabs.github.io/loqa/"
                  target="_blank"
                  class="text-sm text-gray-400 hover:text-loqa-blue transition-colors duration-150"
                  >Docs</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm text-gray-400 hover:text-loqa-blue transition-colors duration-150"
                  >Troubleshooting</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm text-gray-400 hover:text-loqa-blue transition-colors duration-150"
                  >FAQ</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm text-gray-400 hover:text-loqa-blue transition-colors duration-150"
                  >Sponsor</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="border-t border-gray-800 pt-8 text-center">
          <p class="text-gray-400 text-sm mb-2">© 2025 Loqa Labs. AGPLv3 Licensed.</p>
          <p class="text-gray-400 text-sm">
            Created with 🧠 + ❤️ because voice assistants should serve you, not surveillance
            capitalism.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// HomePage component with new Loqa design
</script>
