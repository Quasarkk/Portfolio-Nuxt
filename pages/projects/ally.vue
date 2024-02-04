<template>
    <div class="text-slate-100 font-inter scroll-smooth">
        <ParticlesBackground class=""/>

        <!-- Hero Section -->
        <section
            class="flex justify-between w-10/12 mx-auto my-32 bg-gradient-to-r from-slate-800 to-slate-900 p-10 rounded-xl shadow-lg  bg-cover bg-blend-multiply">
            <div class="flex flex-col">
                <p class="text-4xl ">Ally
                    <br><br>
                    <span class="text-3xl">
                        Un projet de 3 semaine en simulation d'agence durant lequel j'ai été chef de projet.
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
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" class="h-16" alt="Tailwind CSS Logo"/>
                </div>
            </div>
            <img class="w-[800px] rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
            :src="allyLandingImage">
        </section>

        <h2 class="text-5xl text-center my-10">Le Projet en Détail</h2>
        <section class="my-20 mx-auto w-10/12 flex">
            <!-- phases du projet -->
            <div class="border-red flex flex-col">
                <!-- Summary -->
                <div
                    class="mb-20 w-full  bg-gray-800 p-6 h-[400px] rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
                    <p class="text-3xl font-semibold text-center mb-8">Résumé du projet</p>
                    <p class="text-xl">Dans le cadre de ce projet nous avons réalisé dans un groupe de 5 un site vitrine
                        pour une association fictive en simulation d'agence dans laquelle mon
                        formateur jouer le rôle d'un client compliqué.
                        <br> J'ai supervisé et participer sur :
                    </p>
                    <ul class="mt-8 ml-4 text-xl">
                        <li class="list-disc marker:text-sky-400">Le wireframing, la charte graphique, le logo et le
                            maquettage</li>
                        <li class="list-disc marker:text-sky-400">l'intégration</li>
                        <li class="list-disc marker:text-sky-400">les rendez-vous client</li>
                    </ul>
                </div>

                <!-- Wireframing and Mockups Card -->
                <button @click="openModalWireframe()"
                    class="w-2/3 my-20 bg-gray-800 p-6  rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
                    <p class="text-3xl font-semibold text-white mb-4">Wireframing et Maquettage</p>
                    <p class="text-gray-300 text-xl">
                        En tant que chef de projet, j'ai supervisé la création des wireframes et la conception des
                        maquettes. Cela a impliqué l'application d'un système de design pour assurer une interface
                        utilisateur cohérente et intuitive, préparant le terrain pour une intégration fluide.
                    </p>
                    <div class="flex justify-center items-center mt-4">
                        <img src="@/assets/ally/wireframe.png" alt="Wireframe"
                            class="h-[10%] w-[15%] mx-auto my-auto rounded-lg">
                        <img src="@/assets/ally/maquette.png" alt="Maquette"
                            class="h-[10%] w-[13%] mx-auto my-auto rounded-lg">
                    </div>
                </button>

                <!-- Integration Card -->
                <div
                    class="w-2/3 my-20 ml-auto bg-gray-800 p-6 h-[400px] rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
                    <p class="text-3xl font-semibold text-white mb-4">Intégration Front-end</p>
                    <p class="text-gray-300 text-xl">
                        La phase d'intégration a été cruciale dans le projet Ally. J'ai assuré l'implémentation fidèle des
                        designs en étroite collaboration avec l'équipe de développement, en veillant à la réactivité et à la
                        performance de l'interface sur tous les appareils.
                    </p>
                </div>

                <!-- Client Meetings Card -->
                <div
                    class="w-2/3 my-20 bg-gray-800 p-6 h-[400px] rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-gray-700">
                    <p class="text-3xl font-semibold text-white mb-4">Réunions avec le Client</p>
                    <p class="text-gray-300 text-xl">
                        Les réunions régulières avec le client ont été essentielles pour aligner les objectifs du projet
                        Ally. En tant que chef de projet, j'ai facilité ces échanges pour assurer une compréhension mutuelle
                        des attentes, ajuster le développement en conséquence et renforcer la confiance.
                    </p>
                </div>
            </div>
        </section>

        <!-- Leçons apprises -->
        <section class="my-20 mx-auto w-10/12">
            <h2 class="text-4xl text-center mb-10">Leçons Apprises</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

                <!-- Card 1 -->
                <div class="bg-gray-800 p-6 rounded-lg shadow-xl transition duration-300 hover:bg-gray-700 group">
                    <h3 class="text-xl font-semibold text-white mb-4">Gestion de Git et GitHub</h3>
                    <div class="text-gray-300">
                        <p class="mb-2 flex"><span class="font-bold group-hover:text-red-500 transition"><svg
                                    xmlns="http://www.w3.org/2000/svg" class="w-6 mr-1" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18 6l-12 12" />
                                    <path d="M6 6l12 12" />
                                </svg></span> Méconnaissance de l'utilisation optimale de Git et GitHub.</p>
                        <p class="mt-4 flex"><span class="font-bold group-hover:text-green-500 transition"><svg
                                    xmlns="http://www.w3.org/2000/svg" class="w-6 mr-1" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg></span> Adopter un Gitflow structuré et utiliser GitHub pour une collaboration et une
                            révision de code efficaces.</p>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="bg-gray-800 p-6 rounded-lg shadow-xl transition duration-300 hover:bg-gray-700 group">
                    <h3 class="text-xl font-semibold text-white mb-4">Planification des phases de projet</h3>
                    <div class="text-gray-300">
                        <p class="mb-2 flex"><span class="font-bold group-hover:text-red-500 transition"><svg
                                    xmlns="http://www.w3.org/2000/svg" class="w-6 mr-1" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18 6l-12 12" />
                                    <path d="M6 6l12 12" />
                                </svg></span> Planification insuffisante des étapes du projet.</p>
                        <p class="mt-4 flex"><span class="font-bold group-hover:text-green-500 transition"><svg
                                    xmlns="http://www.w3.org/2000/svg" class="w-6 mr-1" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg></span> Assurer une gestion de projet proactive en planifiant soigneusement chaque
                            phase avant son exécution.</p>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="bg-gray-800 p-6 rounded-lg shadow-xl transition duration-300 hover:bg-gray-700 group">
                    <h3 class="text-xl font-semibold text-white mb-4">Communication au sein de l'équipe et avec le client
                    </h3>
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
                            Manque de clarté dans la communication.
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
                            Renforcer la communication transparente et régulière avec toutes les parties prenantes pour un
                            alignement et une compréhension mutuelle.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Modale image Wirefreame -->
        <button v-if="isOpenWireframe" @click="closeModalWireframe()"
            class="fixed top-0 bg-black/20 w-full h-full justify-center flex backdrop-blur-md overflow-auto flex-col">
            <div class="flex w-full h-[90%]">
                <img :src="allyWireframeImage" class="w-auto h-[80%] mx-auto my-auto rounded-lg">
                <img :src="allyMaquetteImage" class="w-auto h-[80%] mx-auto my-auto rounded-lg">
            </div>
            <a class="text-slate-100 text-xl mx-auto border-2 border-sky-400 px-4 py-2 rounded-xl flex items-center justify-center transition duration-300 ease-in-out hover:bg-sky-400 hover:text-slate-800"
                href="https://www.figma.com/file/4qAdBRyIAqw0mHNm1OJD8c/LGBT?type=design&node-id=51-7&mode=design&t=CKaZgB6UgXrnYvxX-00">
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
import allyLandingImage from '~/assets/ally/landing.png';
import allyWireframeImage from '~/assets/ally/wireframe.png';
import allyMaquetteImage from '~/assets/ally/maquette.png';

export default {
    data() {
        return {
            isOpenWireframe: false,

            allyLandingImage,
            allyWireframeImage,
            allyMaquetteImage,
        };
    },
    methods: {
        openModalWireframe() {
            this.isOpenWireframe = true;
        },

        closeModalWireframe() {
            this.isOpenWireframe = false;
        },
    },
};
</script>
      