<template>
    <div class="text-slate-100 font-inter scroll-smooth">
        <ParticlesBackground class=""/>

        <!-- Hero Section -->
        <section
            class="flex justify-between w-10/12 mx-auto my-32 bg-gradient-to-r from-slate-800 to-slate-900 p-10 rounded-xl shadow-lg  bg-cover bg-blend-multiply">
            <div>
                <p class="text-4xl ">Productivity (en cours)
                    <br><br>
                    <span class="text-3xl">
                        Un projet d'application de productivité innovante
                    </span>
                    <br><br>
                    <span class="text-2xl">
                        Scrollez pour en savoir plus !
                    </span>
                </p>
                <!-- Figma + github -->
                <div class="flex mt-12">
                    <a href="https://www.figma.com/file/SZrLRBWqreeUmez9vtZepx/producitivy?type=design&node-id=1-69&mode=design&t=IhxG0xMHL9vbp1Qc-0"
                        class="hover:text-sky-400"><svg xmlns="http://www.w3.org/2000/svg" class="w-12" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" />
                            <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
                        </svg></a>
                    <a href="https://github.com/Quasarkk/productivity" class="hover:text-sky-400"><svg
                            xmlns="http://www.w3.org/2000/svg" class="w-12" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg></a>
                </div>
                <!-- stack -->
                <div class="flex gap-12 mt-8">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" class="h-16" alt="Vue.js Logo"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" class="h-16" alt="Laravel Logo"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" class="h-16" alt="Tailwind CSS Logo"/>
                </div>
            </div>
            <img class="w-[800px] rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
                src="@/assets/project-productivity.png">
        </section>

        <h2 class="text-5xl text-center my-10">Le Projet en Détail</h2>
        <section class="my-20 mx-auto w-10/12 flex-col flex">
            <!-- phases du projet -->
            <!-- Summary -->
            <div
                class="mb-20 w-full  bg-gray-800 p-6 h-[400px] rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
                <p class="text-3xl font-semibold text-center mb-8">Résumé du projet</p>
                <p class="text-xl">La genèse de ce projet repose sur une philosophie simple : une progression
                    constante nécessite un système robuste. Pour cela, j'ai construis un socle permettant à
                    l'utilisateur de définir des piliers de progression, tels que le développement personnel, les finances
                    ou le sport. Chaque pilier est ensuite décomposé en sous-pilliers, objectifs spécifiques,
                    sous-objectifs, routines et
                    tâches, formant ainsi une hiérarchie claire et actionnable.
                </p>
                <ul class="mt-2 ml-4 text-xl">
                    <li class="list-disc marker:text-sky-400">Gestion de pilliers, objectifs, tâches et routine</li>
                    <li class="list-disc marker:text-sky-400">Vue calendrier Mensuel, hebdomadaire et journalière</li>
                    <li class="list-disc marker:text-sky-400">Tableau de bord avec analyses et statistiques</li>
                </ul>
            </div>

            <img class="w-full rounded-lg" src="@/assets/productivity/diagram.png">
        </section>

        <section class="my-20 mx-auto w-10/12 flex" id="project-details">
            <VerticalNavbarProductivity />
            <!-- phases du projet -->
            <div class="w-2/3 ml-auto flex flex-col">
                <!-- V.0 -->
                <div class="mb-10 w-full bg-gray-800 p-6 rounded-lg shadow-xl transition hover:bg-gray-700" id="needsGathering">
                    <div class="flex justify-between items-center mb-4">
                        <p class="text-3xl font-semibold text-center">V.0 - MVP (En cours)</p>
                        <span class="text-xs bg-white text-green-800 py-1 px-3 rounded-full font-bold">EN COURS</span>
                    </div>
                    <p class="text-xl">La V.0 de ce projet comportera les keys features ainsi qu'une UX/UI simplifié
                    </p>
                    <ul class="mt-8 ml-4 text-xl">
                        <li class="list-disc marker:text-sky-400">Visualiser les tâches et le planning sur différentes
                            échelles de temps (mensuelle, hebdomadaire, journalière)</li>
                        <li class="list-disc marker:text-sky-400">définir des pilliers larges composés de sous pilliers
                            associés à des objectifs
                            concrets</li>
                        <li class="list-disc marker:text-sky-400">Créer des tâches et des routines pour progresser vers ces
                            objectifs</li>
                    </ul>
                </div>

                <!-- Visualisation des Tâches -->
                <div
                    class="mb-20 w-2/3 bg-gray-800 p-6 h-[400px] rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
                    <p class="text-3xl font-semibold text-center mb-8">Visualisation des tâches</p>
                    <p class="text-xl">L'un des points forts de la V.0 est la visualisation claire des tâches au sein des
                        routines établies. En fournissant un aperçu rapide et précis des activités quotidiennes,
                        l'application encourage une planification efficace et une exécution disciplinée des routines.</p>
                    <ul class="mt-8 ml-4 text-xl">
                        <li class="list-disc marker:text-sky-400">Affichage simplifié des tâches quotidiennes</li>
                        <li class="list-disc marker:text-sky-400">Intégration des routines dans le calendrier</li>
                        <li class="list-disc marker:text-sky-400">Suivi en temps réel des progrès</li>
                    </ul>
                </div>

                <!-- Création de Routines et de Tâches -->
                <div
                    class="w-2/3 my-20 ml-auto bg-gray-800 p-6 h-[400px] rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
                    <p class="text-3xl font-semibold text-center mb-8">Création de routines et de tâches</p>
                    <p class="text-xl">La création intuitive de routines et de tâches est au cœur de la V.0, permettant aux
                        utilisateurs de construire et de personnaliser leur système de productivité avec des interactions
                        directes et des interfaces simplifiées.</p>
                    <ul class="mt-8 ml-4 text-xl">
                        <li class="list-disc marker:text-sky-400">Interface de création de routine simplifiée</li>
                        <li class="list-disc marker:text-sky-400">Options de personnalisation flexibles pour les tâches</li>
                        <li class="list-disc marker:text-sky-400">Modales interactives pour une édition facile</li>
                    </ul>
                </div>

                <!-- Création d'Objectifs et de Sous-Objectifs -->
                <div
                    class="w-2/3 my-20 bg-gray-800 p-6 h-[400px] rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
                    <p class="text-3xl font-semibold text-center mb-8">Création d'objectifs et de sous-objectifs</p>
                    <p class="text-xl">Cette version initiale facilite la définition d'objectifs et de sous-objectifs,
                        permettant aux utilisateurs de tracer une feuille de route claire vers leurs ambitions, soutenue par
                        une structure de données cohérente et un affichage organisé.</p>
                    <ul class="mt-8 ml-4 text-xl">
                        <li class="list-disc marker:text-sky-400">Définition aisée d'objectifs à long terme</li>
                        <li class="list-disc marker:text-sky-400">Sous-objectifs pour décomposer les grands buts</li>
                        <li class="list-disc marker:text-sky-400">Liaison des objectifs avec des routines spécifiques</li>
                    </ul>
                </div>
                <div class="my-10 border-t-4 rounded-full border-slate-400"></div>

                <!-- V.1 -->
                <div class="mb-10 w-full bg-gray-800 p-6 rounded-lg shadow-xl transition hover:bg-gray-700" id="functionnalities">
                    <div class="flex justify-between items-center mb-4">
                        <p class="text-3xl font-semibold text-center">V.1 - App Personnalisée</p>
                        <span class="text-xs bg-slate-500 text-white py-1 px-3 rounded-full font-bold">PRÉVU</span>
                    </div>
                    <p class="text-xl">La version 1 étend la V.0 en introduisant des fonctionnalités avancées pour une
                        gestion de productivité plus poussée et personnalisée.</p>
                    <ul class="mt-8 ml-4 text-xl">
                        <li class="list-disc marker:text-sky-400">Tableau de bord pour le suivi des progrès personnels</li>
                        <li class="list-disc marker:text-sky-400">Chronomètre des tâches avec technique Pomodoro intégrée
                        </li>
                        <li class="list-disc marker:text-sky-400">Conseils et ressources générales pour améliorer
                            l'efficacité</li>
                        <li class="list-disc marker:text-sky-400">Analyse de la productivité pour suivre les performances
                        </li>
                        <li class="list-disc marker:text-sky-400">Gamification pour encourager l'engagement et la motivation
                        </li>
                        <li class="list-disc marker:text-sky-400">Stats de motivation, comme le pourcentage de l'année
                            écoulée</li>
                    </ul>
                </div>
                <div class="my-10 border-t-4 rounded-full border-slate-400"></div>


                <!-- V.2 -->
                <div class="mb-20 w-full bg-gray-800 p-6 h-[400px] rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700"
                    id="technicalStack">
                    <div class="flex justify-between items-center mb-4">
                        <p class="text-3xl font-semibold text-center">V.1 - App Personnalisée</p>
                        <span class="text-xs bg-slate-500 text-white py-1 px-3 rounded-full font-bold">PRÉVU</span>
                    </div>
                    <p class="text-xl">La version 2 transforme l'expérience en une plateforme SaaS complète, avec des outils
                        et des intégrations destinés à l'amélioration de la productivité dans un environnement collaboratif.
                    </p>
                    <ul class="mt-8 ml-4 text-xl">
                        <li class="list-disc marker:text-sky-400">Rappels et notifications intégrés pour rester sur la bonne
                            voie</li>
                        <li class="list-disc marker:text-sky-400">Mode focus pour minimiser les distractions</li>
                        <li class="list-disc marker:text-sky-400">Intégration avec des services tiers pour une expérience
                            centralisée</li>
                        <li class="list-disc marker:text-sky-400">Exportation de planning en format PDF pour la portabilité
                        </li>
                        <li class="list-disc marker:text-sky-400">UI/UX avancée pour une expérience utilisateur encore plus
                            riche</li>
                    </ul>
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
    name: "Productivity",

    data() {
        return {
        }
    },

    methods: {
    },
}
</script>
      