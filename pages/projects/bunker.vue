<template>
  <div class="text-slate-100 font-inter scroll-smooth">
    <ParticlesBackground class=""/>

    <!-- Hero Section -->
    <section class="flex justify-between w-10/12 mx-auto my-32 bg-gradient-to-r from-slate-800 to-slate-900 p-10 rounded-xl shadow-lg bg-cover bg-blend-multiply">
      <div>
          <h1 class="text-5xl font-bold text-white mb-4">Le bunker project</h1>
          <div class="flex space-x-4 mb-4 w-full">
            <span class="bg-slate-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 -mt-0.5" width="24" height="24"
                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                <path d="M18 14v4h4" />
                <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M15 3v4" />
                <path d="M7 3v4" />
                <path d="M3 11h16" />
              </svg>Juin
              2023</span>
            <span class="bg-slate-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 -mt-0.5" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 12l3 -2" />
                <path d="M12 7v5" />
              </svg>
              1 mois
            </span>
            <span class="bg-slate-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="2 mois h-4 w-4 mr-1 -mt-0.5" width="24" height="24"
                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                <path d="M12 12l0 .01" />
                <path d="M3 13a20 20 0 0 0 18 0" />
              </svg>Projet de formation</span>
          </div>
          <p class="text-2xl text-slate-300 mb-6 w-[90%]">
              Un projet de groupe qui n'a pas abouti dans lequel nous voulions réaliser une application de jeux de rôle. J'ai néanmoins pu découvrir Laravel et Vue.
              <br>Scrollez pour en savoir plus !
          </p>
  
          <!-- Technology Stack Icons -->
          <div class="flex justify-between mt-8 w-[85%]">
              <div class="flex items-center px-3 py-1 bg-slate-600 text-white font-semibold rounded-lg">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" class="h-6 mr-2" alt="Vue.js logo" />
                  Vue.js
              </div>
              <div class="flex items-center px-3 py-1 bg-slate-600 text-white font-semibold rounded-lg">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" class="h-6 mr-2" alt="Laravel logo" />
                  Laravel
              </div>
              <div class="flex items-center px-3 py-1 bg-slate-600 text-white font-semibold rounded-lg">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" class="h-6 mr-2" alt="Tailwind CSS logo" />
                  Tailwind
              </div>
          </div>
  
          <!-- GitHub link -->
          <div class="flex gap-8 mt-8">
              <a href="https://github.com/Cy-Bert/Bunker-Project/tree/CRUD-Tables"
                  class="group text-slate-400 underline-offset-2 decoration-2 hover:underline hover:font-bold hover:text-white flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 group-hover:stroke-white group-hover:stroke-2 stroke-slate-400 stroke-1" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>
                  </svg>
                  GitHub
              </a>
          </div>
      </div>
      <img class="w-[800px] rounded-lg shadow-2xl transform transition duration-500 hover:scale-105" :src="bunkerImage">
  </section>
  

    <h2 class="text-5xl text-center my-10">Le Projet en Détail</h2>
    <section class="my-20 mx-auto w-10/12 flex">


      <!-- phases du projet -->
      <div class="border-red flex flex-col">

        <!-- Summary -->
        <div
          class="mb-20 w-full  bg-gray-800 p-6 h-[400px] rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
          <p class="text-3xl font-semibold text-center mb-8">Résumé du projet</p>
          <p class="text-xl">Dans le cadre de ce projet j'ai réalisé un CRUD avec Laravel et Vuejs avec une gestion
            administrateur. Ce fut un premier pas dans la découverte de Laravel
            et de Vuejs. J'ai appris à :
          </p>
          <ul class="mt-8 ml-4 text-xl">
            <li class="list-disc marker:text-sky-400">Créer des fenêtres modales</li>
            <li class="list-disc marker:text-sky-400">Créer des Seeders</li>
            <li class="list-disc marker:text-sky-400">Faire les modèles, controlleurs et gérer les routes d'un modèle MVC
            </li>
            <li class="list-disc marker:text-sky-400">Créer des formulaires, des bouton + - et utiliser des watch</li>
          </ul>
        </div>

        <!-- Create -->
        <div class="mb-20 w-2/3  bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
          <p class="text-3xl font-semibold text-center mb-8">Création de table</p>
          <p class="text-xl">Ma tâche était de gérer la table Table. Pas facile pour apprendre le backend.
            La gestion des tables se fait sur une seule page, voyons tout d'abord la modale de création.
            <br><br>
            Le bouton create ouvre la modale et permet d'entrer les informations
          </p>
          <img class="rounded-lg" :src="bunkerCreateImage">
        </div>

        <!-- Edit -->
        <div
          class="w-2/3 my-20 ml-auto  bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
          <p class="text-3xl font-semibold text-center mb-8">Modification de table</p>
          <p class="text-xl">L'utilisateur peut modifier les tables existantes en cliquant sur le bouton edit
            correspondant.
            Au clique ce dernier ouvre une fenêtre modale différente permettant de modifier les informations générales
            ainsi que de modifier les ressources communes du groupe.
            <br><br>
            Une fonction watch enregistre chaque modification sans action de l'utilisateur et des règles de validation
            vérifies que les valeurs des champs soient correcte.
          </p>
          <img class="rounded-lg" :src="bunkerEditImage">
        </div>

        <!-- Delete & show-->
        <div class="w-2/3 my-20 bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
          <p class="text-3xl font-semibold text-center mb-8">Suppression et affiche de table</p>
          <p class="text-xl">Un bouton delete permet de supprimer une table et un bouton show permet d'afficher les
            détails de la table.</p>
          <img class="rounded-lg" :src="bunkerShowImage">
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-slate-800 text-center p-10 mt-20">
      <h2 class="text-4xl text-white mb-4">Intéressé par un projet similaire ?</h2>
      <a href="https://www.linkedin.com/in/cl%C3%A9ment-e-a48865264/"
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Contactez-moi</a>
    </section>
  </div>
</template>
    
<script>
import bunkerImage from '~/assets/bunker/bunker.png';
import bunkerCreateImage from '~/assets/bunker/create.png';
import bunkerEditImage from '~/assets/bunker/edit.png';
import bunkerShowImage from '~/assets/bunker/show.png';

export default {
  name: "AtelierDuSud",

  data() {
    return {
      bunkerImage,
      bunkerCreateImage,
      bunkerEditImage,
      bunkerShowImage,
    }
  },

  methods: {
  },
}
</script>
    