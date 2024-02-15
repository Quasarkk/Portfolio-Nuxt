<template>
  <div class="text-slate-100 font-inter">
    <ParticlesBackground class="" />

    <!-- Hero Section -->
    <!-- Hero Section Darkest Dungeon avec le style de Onerep -->
    <section class="flex flex-col md:flex-row justify-between w-11/12 md:w-10/12 mx-auto my-32 bg-gradient-to-r from-slate-800 to-slate-900 md:p-10 p-4 rounded-xl shadow-lg bg-cover bg-blend-multiply">
      <div class="md:w-1/2">
        <div class="flex flex-row flex-wrap items-center mb-4">
          <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">Projet Darkest Dungeon</h1>
        </div>
        <div class="flex justify-between mb-4 gap-4 md:gap-0 md:w-[80%]">
          <span class="bg-slate-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-lg md:rounded flex items-center mb-2 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 md:h-4 mr-2" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
              <path d="M18 14v4h4" />
              <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M15 3v4" />
              <path d="M7 3v4" />
              <path d="M3 11h16" />
            </svg>Mars 2023
          </span>
          <span class="bg-slate-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-lg md:rounded flex items-center mb-2 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 md:h-4 mr-2" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 12l3 -2" />
              <path d="M12 7v5" />
            </svg>3 semaines
          </span>
          <span class="bg-slate-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded flex items-center mb-2 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 md:h-4 mr-2" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              <path d="M12 12l0 .01" />
              <path d="M3 13a20 20 0 0 0 18 0" />
            </svg>Projet de formation
          </span>
        </div>
        <p class="text-xl md:text-2xl text-slate-300 mb-6">
          Un défi initial dans ma formation : reproduire fidèlement le site de "Darkest Dungeon", un projet qui m'a initié à Tailwind CSS et aux structures web complexes.<br>Scrollez pour découvrir les détails du projet !
        </p>
        <div class="flex gap-8 mt-8">
          <div class="flex items-center px-3 py-1 bg-slate-600 text-white font-semibold rounded-lg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" class="h-6 mr-2" alt="Tailwind CSS logo" />Tailwind
          </div>
        </div>
        <div class="flex gap-8 mt-8">
          <a href="https://github.com/Quasarkk/Darkest-Dungeon" class="group text-slate-400 underline-offset-2 decoration-2 hover:underline hover:font-bold hover:text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 group-hover:stroke-white group-hover:stroke-2 stroke-slate-400 stroke-1" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
      <img class="md:w-[800px] w-full mt-4 md:mt-0 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105" :src="projectDarkestDungeonImage" alt="Darkest Dungeon">
    </section>



    <!-- Project Details Section -->
    <section class="my-20 mx-auto w-10/12">
      <h2 class="text-4xl text-center mb-12">Le Projet Darkest Dungeon</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- Autonomy and Proactivity Card -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-xl transition hover:bg-gray-700">
          <h3 class="text-3xl font-semibold text-white mb-4">Autonomie et proactivité</h3>
          <p class="text-xl text-gray-300">
            Le défi de reproduire le site Darkest Dungeon dès le début de ma formation a stimulé mon autonomie et ma
            capacité à apprendre de nouvelles technologies, comme Tailwind CSS, de manière autodidacte.
          </p>
        </div>

        <!-- Detail-Oriented Development Card -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-xl transition hover:bg-gray-700">
          <h3 class="text-3xl font-semibold text-white mb-4">Sens du détail</h3>
          <p class="text-xl text-gray-300">
            Ce projet m'a appris l'importance de l'attention aux détails, essentielle pour reproduire fidèlement
            l'esthétique et la fonctionnalité d'un site web complexe, enrichissant ainsi mes compétences en design web.
          </p>
        </div>

        <!-- Fundamental Understanding Card -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-xl transition hover:bg-gray-700">
          <h3 class="text-3xl font-semibold text-white mb-4">Compréhension des fondamentaux</h3>
          <p class="text-xl text-gray-300">
            À travers ce projet, j'ai consolidé ma compréhension des fondamentaux du développement web, en mettant en
            pratique des principes de conception responsive et en adoptant une approche mobile-first.
          </p>
        </div>

      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-slate-800 text-center p-10 mt-20">
      <h2 class="text-4xl text-white mb-4">Intéressé par ce projet ?</h2>
      <a href="https://www.linkedin.com/in/cl%C3%A9ment-e-a48865264/"
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Parlons-en</a>
    </section>
  </div>
</template>
  
<script>
import projectDarkestDungeonImage from '~/assets/darkestdungeon.jpg';

export default {
  name: "DarkestDungeonProject",
  data() {
    return {
      projectDarkestDungeonImage    };
  },

};
</script>
  