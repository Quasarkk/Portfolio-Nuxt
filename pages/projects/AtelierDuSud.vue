<template>
  <div class="text-slate-100 font-inter scroll-smooth">
    <ParticlesBackground class="" />

    <!-- Hero Section -->
    <section
      class="flex flex-col md:flex-row justify-between w-11/12 md:w-10/12 mx-auto my-32 bg-gradient-to-r from-slate-800 to-slate-900 md:p-10 p-4 rounded-xl shadow-lg bg-cover bg-blend-multiply">
      <div class="md:w-1/2">
        <div class="flex flex-row flex-wrap items-center mb-4">
          <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">L'atelier du sud</h1>
        </div>
        <div class="flex justify-between mb-4 gap-4 md:gap-0 md:w-[80%]">
          <span
            class="bg-slate-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-lg md:rounded flex items-center mb-2 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 md:h-4 mr-2" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
              <path d="M18 14v4h4" />
              <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M15 3v4" />
              <path d="M7 3v4" />
              <path d="M3 11h16" />
            </svg>Sept - Oct 2023
          </span>
          <span
            class="bg-slate-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-lg md:rounded flex items-center mb-2 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 md:h-4 mr-2" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 12l3 -2" />
              <path d="M12 7v5" />
            </svg>2 mois
          </span>

          <span
            class="bg-slate-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded flex items-center mb-2 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 md:h-4 mr-2" width="24" height="24" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              <path d="M12 12l0 .01" />
              <path d="M3 13a20 20 0 0 0 18 0" />
            </svg>Stage final</span>
        </div>

        <p class="text-xl md:text-2xl text-slate-300 mb-6">
          Une application web et un site vitrine destiné à un lieu associatif réalisé dans le cadre de mon stage de fin de
          parcours.<br>Scrollez pour en savoir plus !
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
          <a href="https://www.figma.com/file/nSYyc7EKrQNqf4HmBGQfkI/Caf%C3%A9-du-sud?type=design&node-id=0%3A1&mode=design&t=iYz7aysE54GQdaKZ-1"
            class="group text-slate-400 underline-offset-2 decoration-2 hover:underline hover:font-bold hover:text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="w-8 group-hover:stroke-white group-hover:stroke-2 stroke-slate-400 stroke-1" viewBox="0 0 24 24"
              fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" />
              <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
            </svg>
            Figma
          </a>
          <a href="https://github.com/Quasarkk/CafeDuSud"
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
      <img
        class="md:w-[800px] w-full mt-4 md:mt-0 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
        src="https://www.macommune.info/wp-content/uploads/2021/02/atelier-du-sud-jeanne-carasso-poitevin-002-1200x766.jpg" alt="image d'illustration de l'atelier du sud">
    </section>

    <h2 class="text-5xl text-center my-10">Le Projet en Détail</h2>
    <section class="mt-20 mx-auto w-10/12 flex" id="project-details">
      <VerticalNavbar />
      <!-- phases du projet -->
      <div class="md:w-2/3 w-full ml-auto flex flex-col">
        <!-- Needs Gathering -->
        <div class="mb-10 md:mb-20 md:w-2/3 bg-gray-800 p-6 rounded-lg shadow-xl transition hover:bg-gray-700"
          id="needsGathering">
          <p class="text-2xl md:text-3xl font-semibold text-center mb-4">Recueil des besoins</p>
          <p class="text-xl">Durant cette phase très importante j'ai échangé avec les dirigeants du lieu associatif afin
            de les aider à comprendre leurs besoins.
            Nous en avons déduit 3 besoins majeurs
          </p>
          <ul class="mt-8 ml-4 text-xl">
            <li class="list-disc marker:text-sky-400">Organiser les évènements à venir</li>
            <li class="list-disc marker:text-sky-400">Partager leurs reflexions et communiquer</li>
            <li class="list-disc marker:text-sky-400">Présenter les associations</li>
          </ul>
        </div>

        <!-- Fonctionalities -->
        <div class="mb-10 md:mb-20 md:w-2/3 ml-auto bg-gray-800 p-6 rounded-lg shadow-xl transition hover:bg-gray-700"
          id="functionnalities">
          <p class="text-2xl md:text-3xl font-semibold text-center mb-4">Fonctionnalités</p>
          <p class="text-xl">En s'appuyant sur les besoins identifiés et sur les fonctionnalités des sites de troupes de
            théatres nous avons pu traduire ces besoins en fonctionnalités</p>
          <ul class="mt-8 ml-4 text-xl">
            <li class="list-disc marker:text-sky-400">Un calendrier dynamique</li>
            <li class="list-disc marker:text-sky-400">Un blog</li>
            <li class="list-disc marker:text-sky-400">Des sections de présentation</li>
          </ul>
        </div>

        <!-- Technical Stack -->
        <div class="mb-10 md:mb-20 md:w-2/3 bg-gray-800 p-6 rounded-lg shadow-xl transition hover:bg-gray-700"
          id="technicalStack">
          <p class="text-2xl md:text-3xl font-semibold text-center mb-4">Stack technique</p>
          <p class="text-xl">Afin d'être plus à l'aise sur les frameworks que j'avais découvert précédement j'ai décidé de
            continuer à
            travailler avec Laravel, Vue et CSS</p>
          <div class="flex justify-around mt-12">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" class="md:h-20 h-16  mx-3" alt="Vuejs logo" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" alt="Laravel logo"
              class="md:h-20 h-16 mx-3" />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
              alt="Tailwind logo"
              class="md:h-20 h-16 mx-3" />
          </div>
        </div>

        <!-- Ldm -->
        <button @click="openModalLdm()"
          class="mb-10 md:mb-20 md:w-2/3 ml-auto bg-gray-800 p-6 rounded-lg shadow-xl transition hover:bg-gray-700"
          id="MCD">
          <p class="text-2xl md:text-3xl font-semibold text-center mb-4">MLD</p>
          <p class="text-xl text-left">Élaboration d'un Modèle Conceptuel de Données avec Drawio pour structurer la base
            de données.
          </p>
          <img class="rounded-lg mt-8" src="@/assets/atelierdusud/ldm.png" alt="Capture d'écran du modèle logique de données">
        </button>

        <!-- Wireframing and Mockups -->
        <button @click="openModalMockup()"
          class="mb-10 md:mb-20 bg-gray-800 md:w-2/3 p-6 rounded-lg shadow-xl transition hover:bg-gray-700"
          id="wireframesMockups">
          <p class="text-2xl md:text-3xl font-semibold text-center mb-4">Wireframing et maquettage</p>
          <p class="text-xl ">Création de wireframes et application d'un design system pour une interface
            utilisateur cohérente.</p>
          <div class="flex w-full">
            <img src="@/assets/atelierdusud/wireframe.png" class="w-[40%] h-2/3 mx-auto my-auto rounded-lg" alt="capture d'écran du wireframe">
            <img src="@/assets/atelierdusud/mockup.png" class="w-[40%] h-2/3 mx-auto my-auto rounded-lg" alt="capture d'écran de la maquette">
          </div>
        </button>

        <!-- Backoffice -->
        <button @click="openModalBackoffice()"
          class="mb-10 md:mb-20 bg-gray-800 p-6  md:w-2/3 ml-auto rounded-lg shadow-xl transition hover:bg-gray-700"
          id="backoffice">
          <p class="text-2xl md:text-3xl font-semibold text-center mb-4">Backoffice</p>
          <p class="text-xl text-left">Conception d'un backoffice sécurisé pour la gestion d'articles, de tags, et des
            messages utilisateurs.</p>
          <img src="@/assets/atelierdusud/backoffice.png" class="w-8/12 mt-8 mx-auto rounded-lg" alt="capture d'écran du backoffice">
        </button>

        <!-- User Interface Part -->
        <button @click="openModalUserinterface()"
          class="mb-10 md:mb-20 bg-gray-800 p-6 md:w-2/3 rounded-lg shadow-xl transition hover:bg-gray-700"
          id="userInterface">
          <p class="text-2xl md:text-3xl font-semibold text-center mb-4">Interface utilisateur</p>
          <p class="text-xl text-left">Présentation des associations, événements à venir, et mise en place d'une
            newsletter fonctionnelle.</p>
          <div class="flex">
            <img src="@/assets/atelierdusud/contact.png" class="w-[40%] h-2/3 mx-auto my-auto rounded-lg" alt="capture d'écran du formulaire de contact">
            <img src="@/assets/atelierdusud/3nextevents.png" class="w-[40%] h-2/3 mx-auto my-auto rounded-lg" alt="capture de la section affichant les 3 prochains évènements">
          </div>

        </button>
      </div>
    </section>

    <!-- Gallery -->
    <h2 class="text-4xl my-10 text-center">Galerie du Projet</h2>
    <section class="flex w-full md:w-8/12 mx-auto">
      <!-- Première colonne pour les 3 premiers projets -->
      <div class="flex-col w-1/2 mx-2">
        <img class="md:rounded-xl rounded-lg  my-2" src="@/assets/atelierdusud/galery/doc.png" alt="capture d'écran du texte de documentation du backoffice">
        <img class="md:rounded-xl rounded-lg my-2" src="@/assets/atelierdusud/galery/message.png" alt="capture d'écran des messages affichés sur le backoffice">
        <img class="md:rounded-xl rounded-lg my-2" src="@/assets/atelierdusud/galery/newsletter.png" alt="capture d'écran des adresses emails des utilisateurs inscrit à la newsletter sur le backoffice">
        <img class="md:rounded-xl rounded-lg my-2" src="@/assets/atelierdusud/galery/tags.png" alt="capture d'écran de l'interface de gestion de tags sur le backoffice">
        <img class="md:rounded-xl rounded-lg my-2" src="@/assets/atelierdusud/galery/blog.png" alt="capture d'écran de la section blog de l'interface utilisateur">
      </div>

      <!-- Seconde colonne pour les 3 projets suivants -->
      <div class="flex-col w-1/2">
        <img class="md:rounded-xl my-2 rounded-lg" src="@/assets/atelierdusud/galery/associations.png" alt="capture d'écran de la section de présentation du lieu associatif">
        <img class="md:rounded-xl my-2 rounded-lg" src="@/assets/atelierdusud/galery/calendar.png" alt="capture d'écran de la section des prochains évènements sur l'interface utilisateur">
        <img class="md:rounded-xl my-2 rounded-lg" src="@/assets/atelierdusud/galery/presentation.png" alt="capture d'écran de la section de présentation des associations sur l'interface utilisateur">
      </div>
    </section>
    <!-- Call to Action -->
    <section class="bg-slate-800 text-center p-10 mt-20">
      <h2 class="text-4xl text-white mb-4">Intéressé par un projet similaire ?</h2>
      <a href="https://www.linkedin.com/in/cl%C3%A9ment-e-a48865264/"
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Contactez-moi</a>
    </section>

    <!-- Modale pour LDM -->
    <div v-if="isOpenLdm" @click="isOpenLdm = false"
      class="fixed inset-0 bg-black/50 backdrop-blur-md overflow-auto z-50 flex justify-center items-center">
      <div @click.stop class=" p-4 rounded max-w-4xl w-full mx-auto">
        <img src="@/assets/atelierdusud/ldm.png" class="w-full h-auto max-w-4xl rounded-lg" alt="Capture d'écran du modèle logique de données"/>
        <button @click="isOpenLdm = false" class="absolute top-0 right-0 m-2 text-black">&times;</button>
      </div>
    </div>

    <!-- Mockup modal -->
    <div v-if="isOpenMockup" @click="isOpenMockup = false"
      class="fixed inset-0 bg-black/50 backdrop-blur-md overflow-auto z-50 flex justify-center items-center">
      <div @click.stop class="rounded-lg mx-4 my-8 overflow-hidden w-full md:w-8/12">
        <div class="flex flex-col md:flex-row justify-around items-center space-x-0 md:space-x-2 mx-auto md:gap-8">
          <img src="@/assets/atelierdusud/wireframe.png" class="w-4/6 md:w-2/3 my-2 md:my-auto rounded-lg" alt="capture d'écran du wireframe">
          <img src="@/assets/atelierdusud/mockup.png" class="w-4/6 md:w-2/3 my-2 md:my-auto rounded-lg" alt="capture d'écran de la maquette">
        </div>

        <a class="text-slate-100 text-lg md:text-xl mx-auto mt-4 mb-8 md:mb-4 border-2 border-sky-400 px-3 md:px-4 py-1 md:py-2 rounded-xl flex items-center justify-center transition duration-300 ease-in-out hover:bg-sky-400 hover:text-slate-800 w-max"
          href="https://www.figma.com/file/nSYyc7EKrQNqf4HmBGQfkI/Caf%C3%A9-du-sud?type=design&node-id=0%3A1&mode=design&t=oPg9zfnbGZkTvZqS-1">
          Lien vers Figma
          <svg xmlns="http://www.w3.org/2000/svg" class="ml-2" width="20" height="20" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" />
            <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Backoffice modal -->
    <div v-if="isOpenBackoffice" @click="isOpenBackoffice = false"
      class="fixed inset-0 bg-black/50 backdrop-blur-md overflow-auto z-50 flex justify-center items-center">
      <div @click.stop class="p-4 rounded-lg max-w-xl w-full mx-4">
        <img src="@/assets/atelierdusud/backoffice.png" class="max-w-full h-auto rounded-lg" alt="capture d'écran du backoffice">
      </div>
    </div>

    <!-- User Interface modal -->
    <div v-if="isOpenUserinterface" @click="isOpenUserinterface = false"
      class="fixed inset-0 bg-black/50 backdrop-blur-md overflow-auto z-50 flex justify-center items-center">
      <div @click.stop class="rounded-lg mx-4 my-8 overflow-hidden w-8/12">
        <div class="flex flex-col md:flex-row justify-around items-center md:items-start md:gap-8">
          <img src="@/assets/atelierdusud/3nextevents.png" class="max-w-full md:w-2/3 mx-auto my-4 rounded-lg" alt="capture de la section affichant les 3 prochains évènements">
          <img src="@/assets/atelierdusud/contact.png" class="max-w-full md:w-2/3 mx-auto my-4 rounded-lg" alt="capture d'écran du formulaire de contact">
        </div>
      </div>
    </div>

  </div>
</template>
  
<script>
export default {
  name: "AtelierDuSud",

  data() {
    return {
      isOpenLdm: false,
      isOpenMockup: false,
      isOpenBackoffice: false,
      isOpenUserinterface: false,
    }
  },

  methods: {
    openModalLdm() {
      this.isOpenLdm = true;
    },

    closeModalLdm() {
      this.isOpenLdm = false;
    },

    openModalBackoffice() {
      this.isOpenBackoffice = true;
    },

    closeModalBackoffice() {
      this.isOpenBackoffice = false;
    },

    openModalMockup() {
      this.isOpenMockup = true;
    },

    closeModalMockup() {
      this.isOpenMockup = false;
    },

    openModalUserinterface() {
      this.isOpenUserinterface = true;
    },

    closeModalUserinterface() {
      this.isOpenUserinterface = false;
    }
  },

};
</script>