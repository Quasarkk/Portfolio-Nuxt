<template>
  <div class=" cursor-none focus:cursor-none hover:cursor-none ">
    <NuxtLayout>
      <header
        class="w-full top-0 fixed mx-auto bg-slate-900/60 backdrop-blur-md text-slate-100 border-b-2 border-slate-600 z-50">
        <nav class="w-10/12 flex justify-between h-16 mx-auto font-inter font-semibold">
          <NuxtLink to="/" class="text-4xl my-auto font-audiowide">Quasark</NuxtLink>
          <ul class="flex justify-between w-6/12 my-auto">
            <li>
              <NuxtLink to="/" class="cursor-none hover:underline">Accueil</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#projects" class="cursor-none hover:underline">Projets</NuxtLink>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/cl%C3%A9ment-e-a48865264/" class="cursor-none hover:underline">Contact</a>
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