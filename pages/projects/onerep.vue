<template>
    <div class="text-slate-100 font-inter scroll-smooth">
        <ParticlesBackground class="" />

        <!-- Hero Section -->
        <section
            class="flex justify-between w-10/12 mx-auto my-32 bg-gradient-to-r from-slate-800 to-slate-900 p-10 rounded-xl shadow-lg  bg-cover bg-blend-multiply">
            <div class="flex flex-col">
                <p class="text-4xl ">Onerep
                    <br><br>
                    <span class="text-3xl">
                        Un projet qui n'a pas aboutit dans lequel je voulais réalisé une application de musculation.
                    </span>
                    <br><br>
                    <span class="text-2xl">
                        Scrollez pour en savoir plus !
                    </span>
                </p>
                <div class="flex mt-12">
                    <a href="https://www.figma.com/file/ZSo4cG9oF8nnm3xcsPnJTz/Maquette-muscu?type=design&node-id=0-1&mode=design&t=V2ZsD7YAdqfPT3vn-0"
                        class="hover:text-sky-400"><svg xmlns="http://www.w3.org/2000/svg" class="w-12" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" />
                            <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
                        </svg></a>
                    <a href="https://github.com/Quasarkk/Onerep" class="hover:text-sky-400"><svg
                            xmlns="http://www.w3.org/2000/svg" class="w-12" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg></a>
                </div>
                <div class="flex gap-12 mt-8">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" class="h-16" alt="Vue.js Logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
                        class="h-16" alt="Laravel Logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
                        class="h-16" alt="Tailwind CSS Logo" />
                </div>
            </div>
            <img class="w-[300px] rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
            :src="exercisesImage">
        </section>

        <h2 class="text-5xl text-center my-10">Le Projet en Détail</h2>
        <section class="my-20 mx-auto w-10/12 flex">


            <!-- phases du projet -->
            <div class="border-red flex flex-col">

                <!-- Summary -->
                <div
                    class="mb-20 w-full  bg-gray-800 p-6 h-[400px] rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
                    <p class="text-3xl font-semibold text-center mb-8">Résumé du projet</p>
                    <p class="text-xl">Mon objectif initial était de concevoir une application de musculation sur mesure,
                        mettant l'accent sur la surcharge progressive et l'amélioration de la capacité de charge maximale en
                        une répétition (1RM). À cette époque, ma maîtrise des frameworks Laravel et Vue.js était
                        insuffisante, et ma méthode de gestion de projet n'était pas encore affinée, ce qui a entravé
                        l'achèvement du projet avant le début de mon stage de fin d'études. Bien que le produit fini n'ait
                        pas atteint le niveau d'exécution escompté, ce projet s'est révélé être une expérience
                        d'apprentissage précieuse, me permettant d'acquérir une compréhension approfondie de Laravel et
                        Vue.js.
                    </p>
                    <ul class="mt-8 ml-4 text-xl">
                        <li class="list-disc marker:text-sky-400">Développement de composants Vue.js modulaires.</li>
                        <li class="list-disc marker:text-sky-400">Appréhender le design d'une application mobile</li>
                        <li class="list-disc marker:text-sky-400">Gérer les modèles, relations et seeders d'une application
                            complexe</li>
                        <li class="list-disc marker:text-sky-400">Importégration de bibliothèques externe comme ChartJS</li>
                    </ul>
                </div>

                <!-- UI Wireframe and Mockup -->
                <button @click="openModalWireframe()"
                    class="w-2/3 my-20 bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
                    <p class="text-3xl font-semibold text-center mb-8">Maquettage UI et Wireframe</p>
                    <p class="text-xl text-left">
                        Bien que l'approche initiale de conception UI ait été ambitieuse, elle a permis de générer des idées
                        créatives et d'affiner mon sens du design. Explorer les possibilités de l'UI tôt dans le processus a
                        contribué à une meilleure compréhension des éléments visuels qui améliorent l'expérience
                        utilisateur, même si cela a été un détour dans le parcours de développement.
                    </p>

                    <div class="flex justify-center mt-8">
                        <img src="@/assets/onerep/exercises.png" class="h-[10%] w-[20%] mx-auto my-auto rounded-lg">
                        <img src="@/assets/onerep/today.png" class="h-[10%] w-[20%] mx-auto my-auto rounded-lg">
                    </div>
                </button>

                <!-- Interface CRUD Réactive -->
                <button @click="openModalCrud()"
                    class="w-2/3 my-20 ml-auto bg-gray-800 p-6  rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
                    <p class="text-3xl font-semibold text-center mb-8">Élaboration d'une Interface CRUD Réactive</p>
                    <p class="text-xl text-left">
                        Dans le cadre de ce projet, une interface CRUD réactive a été développée, bien que l'application
                        globale n'ait pas atteint son terme. Utilisant Vue.js pour le frontend et Laravel pour le backend,
                        l'interface a été conçue pour gérer les données avec agilité, facilitant la création, la
                        modification, et la suppression d'entrées de manière dynamique et sans rechargement de page.
                    </p>
                    <img class="rounded-lg w-56 mx-auto" src="@/assets/onerep/onerep-modal.png">
                </button>



                <!-- Edit -->
                <button @click="openModalSpa()"
                    class="w-2/3 my-20 bg-gray-800 p-6  rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
                    <p class="text-3xl font-semibold text-center mb-8">Application Monopage</p>
                    <p class="text-xl text-left">
                        Le cœur de l'application réside dans son architecture monopage. Cette approche permet de naviguer
                        entre les différentes fonctionnalités sans chargement de pages supplémentaires, rendant l'expérience
                        utilisateur rapide et réactive, et réduisant le temps d'attente pour l'utilisateur.
                    </p>
                    <img class="rounded-lg w-56 mx-auto" src="@/assets/onerep/homepage.png">
                </button>

            </div>
        </section>
        <!-- Leçons apprises -->
        <section class="my-20 mx-auto w-10/12">
            <h2 class="text-4xl text-center mb-10">Leçons Apprises</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

                <!-- Card 1 -->
                <div class="bg-gray-800 p-6 rounded-lg shadow-xl transition duration-300 hover:bg-gray-700 group">
                    <h3 class="text-xl font-semibold text-white mb-4">Direction artistique vs fonctionnalités</h3>
                    <div class="text-gray-300">
                        <p class="mb-2 flex">
                            <span class="font-bold group-hover:text-red-500 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 mr-1" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18 6l-12 12" />
                                    <path d="M6 6l12 12" />
                                </svg>
                            </span>
                            Concentration sur l'esthétique sans fondation fonctionnelle solide.
                        </p>
                        <p class="mt-4 flex">
                            <span class="font-bold group-hover:text-green-500 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 mr-1" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </span>
                            Prioriser les exigences fonctionnelles et les user stories avant l'aspect visuel.
                        </p>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="bg-gray-800 p-6 rounded-lg shadow-xl transition duration-300 hover:bg-gray-700 group">
                    <h3 class="text-xl font-semibold text-white mb-4">Segmentation du développement</h3>
                    <div class="text-gray-300">
                        <p class="mb-2 flex">
                            <span class="font-bold group-hover:text-red-500 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 mr-1" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18 6l-12 12" />
                                    <path d="M6 6l12 12" />
                                </svg>
                            </span>
                            Manque de prévision et documentation des fonctionnalités.
                        </p>
                        <p class="mt-4 flex">
                            <span class="font-bold group-hover:text-green-500 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 mr-1" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </span>
                            Décomposer le projet en étapes clairement documentées, avec des milestones et des
                            deadlines.
                        </p>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="bg-gray-800 p-6 rounded-lg shadow-xl transition duration-300 hover:bg-gray-700 group">
                    <h3 class="text-xl font-semibold text-white mb-4">Communication et gestion de projet</h3>
                    <div class="text-gray-300">
                        <p class="mb-2 flex">
                            <span class="font-bold group-hover:text-red-500 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 mr-1" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18 6l-12 12" />
                                    <path d="M6 6l12 12" />
                                </svg>
                            </span>
                            Sous-estimation de l'importance de la communication interne et avec le client.
                        </p>
                        <p class="mt-4 flex">
                            <span class="font-bold group-hover:text-green-500 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 mr-1" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </span>
                            Instaurer des canaux de communication efficaces et des réunions régulières pour le suivi
                            et l'ajustement du projet.
                        </p>
                    </div>
                </div>
            </div>
        </section>


        <!-- Modale image CRUD -->
        <button v-if="isOpenCrud" @click="closeModalCrud()"
            class="fixed top-0 bg-black/20 w-full h-full justify-center flex backdrop-blur-md overflow-auto">
            <img :src="crudImage" class="h-5/6 mx-auto mt-24 rounded-lg">
        </button>

        <!-- Modale image SPA -->
        <button v-if="isOpenSpa" @click="closeModalSpa()"
            class="fixed top-0 bg-black/20 w-full h-full justify-center flex backdrop-blur-md overflow-auto">
            <img :src="spaImage" class="h-5/6 mx-auto mt-24 rounded-lg">
        </button>

        <!-- Modale image Wirefreame -->
        <button v-if="isOpenWireframe" @click="closeModalWireframe()"
            class="fixed top-0 bg-black/20 w-full h-full justify-center flex backdrop-blur-md overflow-auto flex-col">
            <div class="flex w-full h-[90%]">
                <img :src="wireframeImage1" class="w-auto h-[80%] mx-auto my-auto rounded-lg">
                <img :src="wireframeImage2" class="w-auto h-[80%] mx-auto my-auto rounded-lg">
            </div>
            <a class="text-slate-100 text-xl mx-auto border-2 border-sky-400 px-4 py-2 rounded-xl flex items-center justify-center transition duration-300 ease-in-out hover:bg-sky-400 hover:text-slate-800"
                href="https://www.figma.com/file/ZSo4cG9oF8nnm3xcsPnJTz/Maquette-muscu?type=design&node-id=0-1&mode=design&t=V2ZsD7YAdqfPT3vn-0">
                Lien vers Figma
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-2" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" />
                    <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
                </svg>
            </a>
        </button>



        <!-- Call to Action -->
        <section class="bg-slate-800 text-center p-10 mt-20">
            <h2 class="text-4xl text-white mb-4">Intéressé par un projet similaire ?</h2>
            <a href="/contact"
                class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Contactez-moi</a>
        </section>
    </div>
</template>
      
<script>
import exercisesImage from '~/assets/onerep/exercises.png';
import crudImage from '~/assets/onerep/onerep-modal.png';
import spaImage from '~/assets/onerep/homepage.png';
import wireframeImage1 from '~/assets/onerep/exercises.png';
import wireframeImage2 from '~/assets/onerep/today.png';

export default {
    name: "AtelierDuSud",

    data() {
        return {
            isOpenCrud: false,
            isOpenSpa: false,
            isOpenWireframe: false,

            exercisesImage,
            crudImage,
            spaImage,
            wireframeImage1,
            wireframeImage2,
        }
    },

    methods: {
        openModalCrud() {
            this.isOpenCrud = true;
        },

        closeModalCrud() {
            this.isOpenCrud = false;
        },

        openModalSpa() {
            this.isOpenSpa = true;
        },

        closeModalSpa() {
            this.isOpenSpa = false;
        },

        openModalWireframe() {
            this.isOpenWireframe = true;
        },

        closeModalWireframe() {
            this.isOpenWireframe = false;
        },

    },
}
</script>
      