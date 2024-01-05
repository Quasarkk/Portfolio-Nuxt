<template>
  <div class="text-slate-100 font-inter scroll-smooth">

    <!-- Hero Section -->
    <section
      class="flex justify-between w-10/12 mx-auto my-32 bg-gradient-to-r from-slate-800 to-slate-900 p-10 rounded-xl shadow-lg  bg-cover bg-blend-multiply">
      <p class="text-4xl ">Le bunker project
        <br><br>
        <span class="text-3xl">
          Un projet de groupe qui n'a pas aboutit dans lequel nous voulions réalisé une application de jeux de rôle.
          J'ai néanmoins pu découvrir Laravel et Vue.
        </span>
        <br><br>
        <span class="text-2xl">
          Scrollez pour en savoir plus !
        </span>
      </p>
      <img class="w-[800px] rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
      src="@/assets/bunker/bunker.png">
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
          <img class="rounded-lg" src="@/assets/bunker/create.png">
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
          <img class="rounded-lg" src="@/assets/bunker/edit.png">
        </div>

        <!-- Delete & show-->
        <div class="w-2/3 my-20 bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
          <p class="text-3xl font-semibold text-center mb-8">Suppression et affiche de table</p>
          <p class="text-xl">Un bouton delete permet de supprimer une table et un bouton show permet d'afficher les
            détails de la table.</p>
          <img class="rounded-lg" src="@/assets/bunker/show.png">
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-slate-800 text-center p-10 mt-20">
      <h2 class="text-4xl text-white mb-4">Intéressé par un projet similaire ?</h2>
      <a href="/contact"
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Contactez-moi</a>
    </section>
  </div>
</template>
    
<script>
export default {
  name: "AtelierDuSud",

  data() {
    return {
    }
  },

  methods: {
},
}
</script>
    