<template>
  <div class="text-slate-100 font-inter scroll-smooth">
    <ParticlesBackground class="" />

    <!-- Hero Section -->
    <section
      class="flex flex-col md:flex-row justify-between w-11/12 md:w-10/12 mx-auto my-32 bg-gradient-to-r from-slate-800 to-slate-900 md:p-10 p-4 rounded-xl shadow-lg bg-cover bg-blend-multiply">
      <div class="md:w-1/2">
        <div class="flex flex-row flex-wrap items-center mb-4">
          <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">Le bunker project</h1>
        </div>
        <div class="flex justify-between mb-4 gap-4 md:gap-0 md:w-[80%]">
          <span
            class="bg-slate-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-lg md:rounded flex items-center mb-2 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 md:h-4 mr-2" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="4" width="18" height="12" rx="1" />
              <line x1="7" y1="20" x2="17" y2="20" />
              <line x1="9" y1="16" x2="9" y2="20" />
              <line x1="15" y1="16" x2="15" y2="20" />
              <path d="M8 12l3-3l2 2l3 -3" />
            </svg>Juin 2023
          </span>
          <span
            class="bg-slate-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-lg md:rounded flex items-center mb-2 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 md:h-4 mr-2" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 7 12 12 15 15" />
            </svg>1 mois
          </span>
          <span
            class="bg-slate-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded flex items-center mb-2 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 md:h-4 mr-2" width="24" height="24" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
              <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
              <path d="M9.7 17l4.6 0" />
            </svg>Projet de formation
          </span>
        </div>
        <p class="text-xl md:text-2xl text-slate-300 mb-6">
          Un projet de groupe qui n'a pas abouti dans lequel nous voulions réaliser une application de jeux de rôle. J'ai
          néanmoins pu découvrir Laravel et Vue.<br>Scrollez pour en savoir plus !
        </p>
        <div class="flex justify-between mb-4 gap-0 md:gap-0 md:w-[80%]">
          <div
            class="flex items-center px-2 py-1 bg-slate-600 text-white font-semibold rounded-lg m-1 text-xs md:text-base">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" class="h-4 mr-1"
              alt="Vue.js logo" />Vue.js
          </div>
          <div
            class="flex items-center px-2 py-1 bg-slate-600 text-white font-semibold rounded-lg m-1 text-xs md:text-base">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
              class="h-4 mr-1" alt="Laravel logo" />Laravel
          </div>
          <div
            class="flex items-center px-2 py-1 bg-slate-600 text-white font-semibold rounded-lg m-1 text-xs md:text-base">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
              class="h-4 mr-1" alt="Tailwind CSS logo" />Tailwind
          </div>
        </div>
        <div class="flex gap-8 mt-8">
          <a href="https://github.com/Cy-Bert/Bunker-Project/tree/CRUD-Tables"
            class="group text-slate-400 underline-offset-2 decoration-2 hover:underline hover:font-bold hover:text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="w-8 group-hover:stroke-white group-hover:stroke-2 stroke-slate-400 stroke-1" viewBox="0 0 24 24"
              fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
      <img class="w-[800px] rounded-lg shadow-2xl transform transition duration-500 hover:scale-105" :src="bunkerImage">
    </section>

    <section class="my-20 mx-auto w-10/12 flex">
      <!-- phases du projet -->
      <div class="border-red flex flex-col">
        <!-- Summary -->
        <div class="mb-10 md:mb-20 md:w-2/3 bg-gray-800 p-6 rounded-lg shadow-xl transition hover:bg-gray-700">
          <p class="text-2xl md:text-3xl font-semibold text-center mb-4">Résumé du projet</p>
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
        <button @click="openModalCreate()"
          class="mb-10 md:mb-20 md:w-2/3 ml-auto bg-gray-800 p-6 rounded-lg shadow-xl transition hover:bg-gray-700">
          <p class="text-2xl md:text-3xl font-semibold text-center mb-">Création de table</p>
          <p class="text-xl text-left">Ma tâche était de gérer la table Table. Pas facile pour apprendre le backend.
            La gestion des tables se fait sur une seule page, voyons tout d'abord la modale de création.
            <br><br>
            Le bouton create ouvre la modale et permet d'entrer les informations
          </p>
          <img class="rounded-lg" :src="bunkerCreateImage">
        </button>

        <!-- Edit -->
        <button @click="openModalEdit()"
          class="mb-10 md:mb-20 bg-gray-800 md:w-2/3 p-6 rounded-lg shadow-xl transition hover:bg-gray-700">
          <p class="text-2xl md:text-3xl font-semibold text-center mb-4">Modification de table</p>
          <p class="text-xl text-left">L'utilisateur peut modifier les tables existantes en cliquant sur le bouton edit
            correspondant.
            Au clique ce dernier ouvre une fenêtre modale différente permettant de modifier les informations générales
            ainsi que de modifier les ressources communes du groupe.
            <br><br>
            Une fonction watch enregistre chaque modification sans action de l'utilisateur et des règles de validation
            vérifies que les valeurs des champs soient correcte.
          </p>
          <img class="rounded-lg" :src="bunkerEditImage">
        </button>

        <!-- Delete & show-->
        <button @click="openModalShow()"
          class="mb-10 md:mb-20 bg-gray-800 p-6  md:w-2/3 ml-auto rounded-lg shadow-xl transition hover:bg-gray-700">
          <p class="text-3xl font-semibold text-center mb-8">Suppression et affiche de table</p>
          <p class="text-xl">Un bouton delete permet de supprimer une table et un bouton show permet d'afficher les
            détails de la table.</p>
          <img class="rounded-lg" :src="bunkerShowImage">
        </button>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-slate-800 text-center p-10 mt-20">
      <h2 class="text-4xl text-white mb-4">Intéressé par un projet similaire ?</h2>
      <a href="https://www.linkedin.com/in/cl%C3%A9ment-e-a48865264/"
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Contactez-moi</a>
    </section>

    <!-- Create modal -->
    <div v-if="isOpenCreate" @click="isOpenCreate = false"
      class="fixed inset-0 bg-black/50 backdrop-blur-md overflow-auto z-50 flex justify-center items-center">
      <div @click.stop class="p-4 rounded-lg shadow-lg max-w-xl w-full mx-4">
        <img :src="bunkerCreateImage" class="max-w-full h-auto rounded-lg">
      </div>
    </div>

    <!-- Edit modal -->
    <div v-if="isOpenEdit" @click="isOpenEdit = false"
      class="fixed inset-0 bg-black/50 backdrop-blur-md overflow-auto z-50 flex justify-center items-center">
      <div @click.stop class="p-4 rounded-lg shadow-lg max-w-xl w-full mx-4">
        <img :src="bunkerEditImage" class="max-w-full h-auto rounded-lg">
      </div>
    </div>

    <!-- Show modal -->
    <div v-if="isOpenShow" @click="isOpenShow = false"
      class="fixed inset-0 bg-black/50 backdrop-blur-md overflow-auto z-50 flex justify-center items-center">
      <div @click.stop class="p-4 rounded-lg shadow-lg max-w-xl w-full mx-4">
        <img :src="bunkerShowImage" class="max-w-full h-auto rounded-lg">
      </div>
    </div>

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

      isOpenCreate: false,
      isOpenEdit: false,
      isOpenShow: false,
    }
  },

  methods: {
    openModalCreate() {
      this.isOpenCreate = true;
    },
    closeModalCreate() {
      this.isOpenCreate = false;
    },
    openModalEdit() {
      this.isOpenEdit = true;
    },
    closeModalEdit() {
      this.isOpenEdit = false;
    },
    openModalShow() {
      this.isOpenShow = true;
    },
    closeModalShow() {
      this.isOpenShow = false;
    },
  },
}
</script>
    