<template>
    <div class="text-slate-100 font-inter">
      <!-- Section 1 -->
      <section class="flex justify-between w-10/12 mx-auto my-32 bg-gradient-to-r from-slate-800 to-slate-900 hover:bg-gradient-to-r p-10 rounded-xl shadow-lg  bg-cover bg-blend-multiply">
        <p class="text-3xl ">Bonjour je suis Clément, 
          <span class="bg-gradient-to-r from-sky-500 to-blue-300 text-4xl font-semibold bg-clip-text text-transparent" ref="typewriterText"></span>
          <span class="inline-block w-1 animate-blink">|</span>
          <br><br>
          <span class="text-3xl">
            Moi c'est Clément, jeune developpeur fullstack. J'aime construire des applications, peaufiner l'UI et trouver des solutions techniques.
          </span>
          <br><br>
          <span class="text-2xl">
            Scrollez pour en savoir plus !
          </span>
        </p>
        <img class="w-[800px] rounded-lg shadow-2xl transform transition duration-500 hover:scale-105" src="C:\Users\Stonks\Documents\GitHub\Portfolio-nuxt\assets\pp_github.png">
      </section>

        <!-- Section 2  -->
        <section class="w-10/12 mx-auto font-inter text-center my-20">
            <h2 class="text-6xl mb-10 text-white">En moins d'un an</h2>
            <div class="grid grid-cols-3 gap-4">
                <!-- Carte 1 : Projets -->
                <div class="bg-slate-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-slate-700">
                    <div class="flex justify-center items-center">
                        <p class="text-6xl text-white mr-2" ref="projectCounter">6</p>
                        <p class="text-xl text-slate-300 mt-auto">projets</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-12 text-sky-300" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" />
                    </svg>
                </div>
        
                <!-- Carte 2 : Nuits blanches -->
                <div class="bg-slate-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-slate-700">
                    <div class="flex justify-center items-center">
                        <p class="text-6xl text-white mr-2" ref="nightCounter">42</p>
                        <p class="text-xl text-slate-300 mt-auto">nuits blanches</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-12 text-sky-300" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                    </svg>
                </div>
        
                <!-- Carte 3 : Cafés -->
                <div class="bg-slate-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-slate-700">
                    <div class="flex justify-center items-center">
                        <p class="text-6xl text-white mr-2" ref="cafeCounter">439</p>
                        <p class="text-xl text-slate-300 mt-auto">cafés</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-12 text-sky-300" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" />
                        <path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                        <path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                        <path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z" />
                        <path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" />
                    </svg>
                </div>
            </div>
        </section>
        
        <!-- Section 3  -->
        <section class="w-8/12 mx-auto mt-20 mb-12">
            <h2 class="text-6xl text-center text-white mt-20 mb-12">Mes compétences</h2>
            <div class="flex justify-between">
                <!-- Vue.js -->
                <div class="flex flex-col items-center w-52">
                    <div class="bg-slate-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-green-900 w-full flex-col">
                        <img class="h-24 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" alt="Vue.js">
                        <p class="text-2xl text-white mt-6 mb-1 justify-center flex">Vue.js</p>
                        <p class="text-xl text-slate-300 justify-center flex">4 projets</p>
                    </div>
                </div>
        
                <!-- Laravel -->
                <div class="flex flex-col items-center w-52">
                    <div class="bg-slate-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-red-900 w-full flex-col">
                        <img class="h-24 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" alt="Laravel">
                        <p class="text-2xl text-white mt-6 mb-1 justify-center flex">Laravel</p>
                        <p class="text-xl text-slate-300 justify-center flex">3 projets</p>
                    </div>
                </div>
        
                <!-- Tailwind -->
                <div class="flex flex-col items-center w-52">
                    <div class="bg-slate-800 group p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-sky-900 w-full">
                        <img class="h-24 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="Tailwind">
                        <p class="text-2xl mt-6 mb-1 text-white justify-center flex">Tailwind</p>
                        <p class="text-xl text-slate-300 justify-center flex">6 projets</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 4 - Projets -->
        <p class="text-center text-6xl mb-12 mt-20 font-inter">Mes projets</p>
        <section class="flex w-8/12 mx-auto">
            <!-- Première colonne pour les 3 premiers projets -->
            <div class="flex-col w-1/2 mx-2">
                <PortfolioItem v-for="(project, index) in projects.slice(0, 3)" :key="project.title" :project="project"
                    :index="index" :class="getItemHeightClass(index)" />
            </div>

            <!-- Seconde colonne pour les 3 projets suivants -->
            <div class="flex-col w-1/2">
                <PortfolioItem v-for="(project, index) in projects.slice(3, 6)" :key="project.title" :project="project"
                    :index="index" :class="getItemHeightClass(index + 3)" />
            </div>
        </section>
    </div>
</template>

<script>
import PortfolioItem from '~/components/PortfolioItem.vue';

export default {
    components: {
        PortfolioItem,
    },
    mounted() {
        this.typewriterEffect();
        this.animateNumber(6, 'projectCounter', 2000); // Pour "6 projets"
        this.animateNumber(42, 'nightCounter', 2000); // Pour "42 nuits blanches"
        this.animateNumber(439, 'cafeCounter', 2000); // Pour "439 cafés"
    },
    methods: {
        typewriterEffect() {
            const phrases = ['Développeur', 'Créatif', 'Curieux'];
            let currentPhrase = 0;
            let currentChar = 0;
            const typewriterText = this.$refs.typewriterText;
            const eraseDelay = 35; // Délai avant d'effacer le texte
            const typeDelay = 50; // Délai entre chaque caractère tapé
            const nextPhraseDelay = 800; // Délai avant de taper la prochaine phrase

            const typeChar = () => {
                if (currentChar < phrases[currentPhrase].length) {
                    typewriterText.textContent += phrases[currentPhrase].charAt(currentChar);
                    currentChar++;
                    setTimeout(typeChar, typeDelay);
                } else {
                    setTimeout(eraseChar, nextPhraseDelay);
                }
            };

            const eraseChar = () => {
                if (currentChar > 0) {
                    typewriterText.textContent = phrases[currentPhrase].substring(0, currentChar - 1);
                    currentChar--;
                    setTimeout(eraseChar, eraseDelay);
                } else {
                    currentPhrase = (currentPhrase + 1) % phrases.length;
                    setTimeout(typeChar, typeDelay);
                }
            };

            typeChar();
        },
        animateNumber(target, refName, duration) {
            let currentNumber = 0;
            const startTime = new Date().getTime();
            const endTime = startTime + duration;
            const timer = setInterval(() => {
                const now = new Date().getTime();
                const remaining = Math.max((endTime - now) / duration, 0);
                const value = Math.round(target - (remaining * target));
                this.$refs[refName].innerText = value;
                if (value === target) {
                    clearInterval(timer);
                }
            }, 1000 / 60); // Mise à jour 60 fois par seconde
        },
        getItemHeightClass(index) {
            // Vous pouvez définir vos hauteurs personnalisées ici
            const heights = [
                'h-[500px]', // Index 0
                'h-[450px]', // Index 1
                'h-[500px]', // Index 2
                'h-[650px]', // Index 3
                'h-[550px]', // Index 4
                'h-[650px]', // Index 5
                'h-[450px]', // Index 6
            ];
            return heights[index % heights.length]; // Cette ligne assure que si vous avez plus d'éléments que de hauteurs, cela recommencera à partir de 0
        },
    },

    data() {
        return {
            typing: true,
            projects: [
                {
                    title: 'Portfolio',
                    link: '/projects/portfolio',
                    imageSrc: 'https://img.freepik.com/vecteurs-libre/modele-portefeuille-couleur-design-plat_23-2149215470.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=ais',
                    description: "Réalisation d'un portfolio afin de pouvoir exposer mes projets et expériences passés et futurs",
                    logos: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/2560px-Nuxt_logo.svg.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png',
                    ],
                },
                {
                    title: "L'Atelier du Sud",
                    link: '/projects/atelierdusud',
                    imageSrc: 'http://localhost:3000/_nuxt/assets/atelierdusud/landing.png',
                    description: "J'ai réalisé un site vitrine avec un backoffice permettant de créer des articles et des évènements.",
                    logos: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/2560px-Nuxt_logo.svg.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png',
                    ],
                },

                {
                    title: 'Onerep',
                    link: '/projects/onerep',
                    imageSrc: 'https://appmaster.io/api/_files/oqQD259R96yciZHjFVRneK/download/',
                    description: "J'ai réalisé une application de créer des entrainements et de suivre sa progression",
                    logos: [
                        'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png',
                    ],
                },
                {
                    title: 'Bunker Project',
                    link: '/projects/bunker',
                    imageSrc: 'http://localhost:3000/_nuxt/assets/bunker/bunker2.png',
                    description: "J'ai réalisé des CRUD avec Laravel et Vue.js dans un projet commun d'application de jeux ce rôle",
                    logos: [
                        'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png',
                    ],
                },

                {
                    title: 'Ally',
                    link: '/projects/ally',
                    imageSrc: 'https://media.npr.org/assets/img/2016/11/22/allied_wide-ad8c935ff14d345085f08c0d5def3b3b7d6e7780.jpg',
                    description: "J'ai été chef de projet pour la réalisation d'un site web en simulation d'agence durant 3 semaines",
                    logos: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png',
                    ],
                },
                {
                    title: 'Darkest Dungeon',
                    link: '/projects/darkestdungeon',
                    imageSrc: 'https://cdn.akamai.steamstatic.com/steam/apps/262060/ss_7232ad33cf7e5e58613004fb888c18d3ab1fdd8d.1920x1080.jpg?t=1698787583',
                    description: "J'ai réalisé une copie la plus proche possible d'un site en analysant simplement visuellement le rendu du site.",
                    logos: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png',
                    ],
                },
            ]
        };
    },
};
</script>
