<template>
  <div class="cursor-none focus:cursor-none hover:cursor-none max-w-screen">
    <NuxtLayout>
      <header
        class="w-full top-0 fixed mx-auto bg-slate-900/60 backdrop-blur-md text-slate-100 border-b-2 border-slate-600 z-50">
        <nav class="md:w-10/12 w-11/12 flex justify-between items-center h-16 mx-auto font-inter font-semibold relative">
          <NuxtLink to="/" class="text-4xl font-audiowide">Quasark</NuxtLink>
          <button @click="toggleNavbar" class="md:hidden z-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <ul :class="isNavbarOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'"
            class="fixed md:relative top-0 left-0 w-full md:w-auto bg-slate-900 md:bg-transparent text-xl md:text-base md:space-x-8 space-y-2 md:space-y-0 py-5 md:py-0 flex flex-col md:flex-row md:items-center transition-transform transition-opacity ease-in-out duration-300 overflow-hidden md:overflow-visible md:transform-none md:opacity-100"
            style="transition-property: transform, opacity;">
            <li>
              <NuxtLink to="/" @click="closeNavbar" class="hover:underline block text-center md:text-left py-2">Accueil
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#projects" @click="closeNavbar" class="hover:underline block text-center md:text-left py-2">
                Projets</NuxtLink>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/cl%C3%A9ment-e-a48865264/" @click="closeNavbar"
                class="hover:underline block text-center md:text-left py-2">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <CustomCursor />
      <NuxtPage class="pt-16" />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import type { Container } from 'tsparticles-engine'

import { ref } from 'vue'
const isNavbarOpen = ref(false)

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value
}

const closeNavbar = () => {
  isNavbarOpen.value = false
}

// See tsParticles documentation for all available options
const options = {
  fullScreen: {
    enable: true,
    zIndex: 10
  },
  background: {
    color: {
      value: '#0f172a'
    }
  },
  particles: {
    color: {
      value: "#fff"
    },
    links: {
      color: "#fff",
      enable: true
    },
    move: {
      enable: true
    },
    number: {
      value: 100
    }
  }
}
const onLoad = (container: Container) => {
  // Do something with the container
  container.pause()
  setTimeout(() => container.play(), 2000)
}
</script>
