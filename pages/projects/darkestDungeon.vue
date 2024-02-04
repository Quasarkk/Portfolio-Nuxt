<template>
    <div class="text-slate-100 font-inter">
      <!-- Hero Section -->
      <section class="flex justify-between w-10/12 mx-auto my-32 bg-gradient-to-r from-slate-800 to-slate-900 p-10 rounded-xl shadow-lg bg-cover bg-blend-multiply">
        <div>
          <h1 class="text-5xl font-bold">Projet Darkest Dungeon</h1>
          <p class="text-2xl mt-4">
            Un défi initial dans ma formation : reproduire fidèlement le site de "Darkest Dungeon", un projet qui m'a initié à Tailwind CSS et aux structures web complexes.
          </p>
          <p class="text-xl mt-4">
            Scrollez pour découvrir les détails du projet !
          </p>
        </div>
        <img class="w-[800px] rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
             src="" alt="Darkest Dungeon">
      </section>
  
      <!-- Project Details Section -->
      <section class="my-20 mx-auto w-10/12">
        <h2 class="text-4xl text-center mb-12">Le Projet Darkest Dungeon</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    
          <!-- Autonomy and Proactivity Card -->
          <div class="bg-gray-800 p-6 rounded-lg shadow-xl transition hover:bg-gray-700">
            <h3 class="text-3xl font-semibold text-white mb-4">Autonomie et Proactivité</h3>
            <p class="text-xl text-gray-300">
              Le défi de reproduire le site Darkest Dungeon dès le début de ma formation a stimulé mon autonomie et ma capacité à apprendre de nouvelles technologies, comme Tailwind CSS, de manière autodidacte.
            </p>
          </div>
    
          <!-- Detail-Oriented Development Card -->
          <div class="bg-gray-800 p-6 rounded-lg shadow-xl transition hover:bg-gray-700">
            <h3 class="text-3xl font-semibold text-white mb-4">Sens du Détail</h3>
            <p class="text-xl text-gray-300">
              Ce projet m'a appris l'importance de l'attention aux détails, essentielle pour reproduire fidèlement l'esthétique et la fonctionnalité d'un site web complexe, enrichissant ainsi mes compétences en design web.
            </p>
          </div>
    
          <!-- Fundamental Understanding Card -->
          <div class="bg-gray-800 p-6 rounded-lg shadow-xl transition hover:bg-gray-700">
            <h3 class="text-3xl font-semibold text-white mb-4">Compréhension des Fondamentaux</h3>
            <p class="text-xl text-gray-300">
              À travers ce projet, j'ai consolidé ma compréhension des fondamentaux du développement web, en mettant en pratique des principes de conception responsive et en adoptant une approche mobile-first.
            </p>
          </div>
    
        </div>
      </section>
  
      <!-- Call to Action -->
      <section class="bg-slate-800 text-center p-10 mt-20">
        <h2 class="text-4xl text-white mb-4">Intéressé par ce projet ?</h2>
        <a href="/contact" class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Parlons-en</a>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "DarkestDungeonProject",
    data() {
      return {
        // Your data properties here
      };
    },
    methods: {
      // Your methods here
    }
  };
  </script>
  