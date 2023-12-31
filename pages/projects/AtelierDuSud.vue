<template>
    <div class="text-slate-100 font-inter">
        <!-- Hero Section -->
        <section
            class="flex justify-between w-10/12 mx-auto my-32 bg-gradient-to-r from-slate-800 to-slate-900  p-10 rounded-xl shadow-lg  bg-cover bg-blend-multiply">
            <p class="text-3xl ">L'atelier du sud
                <br><br>
                <span class="text-3xl">
                    Une application web et un site vitrine destiné à un lieu associatif.
                </span>
                <br><br>
                <span class="text-2xl">
                    Scrollez pour en savoir plus !
                </span>
            </p>
            <img class="w-[800px] rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
                src="https://www.macommune.info/wp-content/uploads/2021/02/atelier-du-sud-jeanne-carasso-poitevin-002-1200x766.jpg">
        </section>

        <section class="my-20 mx-auto w-10/12">
            <h2 class="text-5xl text-center my-10">Le Projet en Détail</h2>
            <div class="w-full">
              <!-- Needs Gathering -->
              <div class="w-2/3 my-20 bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
                <p class="text-3xl font-semibold">Recueil des besoins</p>
                <p>Discussions approfondies avec le client et analyse sectorielle pour identifier et prioriser les besoins.</p>
              </div>
        
              <!-- Fonctionalities -->
              <div class="w-2/3 ml-auto text-right my-20 bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
                <p class="text-3xl font-semibold">Fonctionnalités</p>
                <p>Calendrier d'événements, sections de présentation, et espace contact inspirés de compagnies de théâtre.</p>
              </div>
        
              <!-- Technical Stack -->
              <div class="w-2/3 my-20 bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
                <p class="text-3xl font-semibold">Stack technique</p>
                <p>Utilisation de Laravel 10 pour le backend, Vue.js pour le front-end, et Tailwind CSS pour le design.</p>
              </div>
        
              <!-- MCD -->
              <div class="w-2/3 ml-auto text-right my-20 bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
                <p class="text-3xl font-semibold">MCD</p>
                <p>Élaboration d'un Modèle Conceptuel de Données avec Drawio pour structurer la base de données.</p>
              </div>
        
              <!-- Wireframing and Mockups -->
              <div class="w-2/3 my-20 bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
                <p class="text-3xl font-semibold">Wireframing et maquettage</p>
                <p>Création de wireframes et application d'un design system pour une interface utilisateur cohérente.</p>
              </div>
        
              <!-- Backoffice -->
              <div class="w-2/3 ml-auto text-right my-20 bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
                <p class="text-3xl font-semibold">Backoffice</p>
                <p>Conception d'un backoffice sécurisé pour la gestion d'articles, de tags, et des messages utilisateurs.</p>
              </div>
        
              <!-- Showcase Part -->
              <div class="w-2/3 my-20 bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
                <p class="text-3xl font-semibold">Partie vitrine</p>
                <p>Présentation des associations, événements à venir, et mise en place d'une newsletter fonctionnelle.</p>
              </div>
            </div>
          </section>

        <!-- Gallery -->
        <section class="my-20 mx-auto w-10/12">
            <h2 class="text-5xl text-center my-10">Galerie du Projet</h2>
            <div class="grid grid-cols-3 gap-4">
                <!-- Add images or carousel here -->
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
};
</script>
  