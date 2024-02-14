<template>
    <div class="text-slate-100 font-inter z-10">
        <ParticlesBackground class="" />
        <!-- Section 1 -->
        <section
            class="mx-auto my-32 p-10 rounded-xl shadow-lg bg-cover bg-blend-multiply bg-gradient-to-r from-slate-800 to-slate-900 hover:bg-gradient-to-r w-11/12 md:w-10/12">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div>
                    <p class="text-3xl md:text-4xl">Bonjour je suis Clément,
                        <span
                            class="bg-gradient-to-r from-sky-500 to-blue-300 text-3xl md:text-4xl font-semibold bg-clip-text text-transparent"
                            ref="typewriterText"></span>
                        <span class="inline-block w-1 animate-blink">|</span>
                        <br><br>
                        <span class="text-xl md:text-2xl">
                            Moi c'est Clément, jeune developpeur fullstack. J'aime construire des applications, peaufiner
                            l'UI et
                            trouver des solutions techniques.
                        </span>
                        <br><br>
                        <span class="text-xl md:text-2xl">
                            Scrollez pour en savoir plus !
                        </span>
                    </p>
                </div>
                <img class="w-full max-w-xs md:max-w-lg rounded-lg mt-4 md:mt-0" src="~/assets/pp_github.png">
            </div>
        </section>


        <!-- Section 2  -->
        <section class="mx-auto my-32 p-10 rounded-xl  bg-cover bg-blend-multiply">
            <h2 class="text-4xl md:text-6xl mb-10 text-white text-center">En moins d'un an</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- Carte 1 : Projets -->
                <div class="bg-slate-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-slate-700">
                    <div class="flex justify-center items-center">
                        <p class="text-6xl text-white mr-2" ref="projectCounter">7</p>
                        <p class="text-xl text-slate-300 mt-auto">projets</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-12 text-sky-300" viewBox="0 0 24 24"
                        stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                        <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                        <path d="M12 12l0 .01" />
                        <path d="M3 13a20 20 0 0 0 18 0" />
                    </svg>
                </div>

                <!-- Carte 2 : Nuits blanches -->
                <div class="bg-slate-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-slate-700">
                    <div class="flex justify-center items-center">
                        <p class="text-6xl text-white mr-2" ref="nightCounter">12</p>
                        <p class="text-xl text-slate-300 mt-auto">nuits blanches</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-12 text-sky-300" viewBox="0 0 24 24"
                        stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                    </svg>
                </div>

                <!-- Carte 3 : Cafés -->
                <div class="bg-slate-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition hover:bg-slate-700">
                    <div class="flex justify-center items-center">
                        <p class="text-6xl text-white mr-2" ref="cafeCounter">439</p>
                        <p class="text-xl text-slate-300 mt-auto">cafés</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-12 text-sky-300" viewBox="0 0 24 24"
                        stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" />
                        <path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                        <path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                        <path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z" />
                        <path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" />
                    </svg>
                </div>
            </div>
        </section>

        <!-- Section 3 -->
        <section class="mx-auto mt-20 mb-12 px-4 sm:w-8/12">
            <h2 class="text-3xl sm:text-6xl text-center text-white mt-20 mb-12">Mes compétences</h2>
            <div class="flex flex-wrap justify-between">
                <!-- Vue.js -->
                <div class="flex flex-col items-center mb-4 w-full sm:w-52">
                    <div
                        class="bg-slate-800 p-6 rounded-lg shadow-xl transition hover:bg-green-900 hover:shadow-green w-full flex-col">
                        <img class="h-24 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"
                            alt="Vue.js">
                        <p class="text-xl sm:text-2xl text-white mt-6 mb-1 justify-center flex">Vue.js</p>
                        <p class="text-lg sm:text-xl text-slate-300 justify-center flex">5 projets</p>
                    </div>
                </div>

                <!-- Laravel -->
                <div class="flex flex-col items-center mb-4 w-full sm:w-52">
                    <div
                        class="bg-slate-800 p-6 rounded-lg shadow-xl transition hover:bg-red-900 hover:shadow-red w-full flex-col">
                        <img class="h-24 mx-auto"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
                            alt="Laravel">
                        <p class="text-xl sm:text-2xl text-white mt-6 mb-1 justify-center flex">Laravel</p>
                        <p class="text-lg sm:text-xl text-slate-300 justify-center flex">4 projets</p>
                    </div>
                </div>

                <!-- Tailwind -->
                <div class="flex flex-col items-center mb-4 w-full sm:w-52">
                    <div
                        class="bg-slate-800 group p-6 rounded-lg shadow-xl hover:shadow-blue transition hover:bg-sky-900 w-full">
                        <img class="h-24 mx-auto"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
                            alt="Tailwind">
                        <p class="text-xl sm:text-2xl mt-6 mb-1 text-white justify-center flex">Tailwind</p>
                        <p class="text-lg sm:text-xl text-slate-300 justify-center flex">7 projets</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 4 - Projects -->
        <p class="text-center md:text-6xl text-4xl mb-12 mt-20 font-inter" id="projects">Mes projets</p>
        <section class="flex flex-wrap w-10/12 md:w-8/12 mx-auto">
            <!-- Première colonne pour les 3 premiers projets -->
            <div class="flex flex-col w-full md:w-1/2 px-2 mb-4">
                <PortfolioItem v-for="(project, index) in projects.slice(0, 4)" :key="project.title" :project="project"
                    :index="index" :class="getItemHeightClass(index)" />
            </div>

            <!-- Seconde colonne pour les 3 projets suivants -->
            <div class="flex flex-col w-full md:w-1/2 px-2 mb-4">
                <PortfolioItem v-for="(project, index) in projects.slice(4, 7)" :key="project.title" :project="project"
                    :index="index" :class="getItemHeightClass(index + 3)" />
            </div>
        </section>

    </div>
</template>

<script>
import PortfolioItem from '~/components/PortfolioItem.vue';
import ParticlesBackground from '~/components/ParticlesBackground.vue';

import projectProductivityImage from '~/assets/project-productivity.webp';
import projectPortfolioImage from '~/assets/project-portfolio.webp';
import projectBunkerImage from '~/assets/project-bunker.webp';
import projectDarkestDungeonImage from '~/assets/project-darkestdungeon.webp';
import projectAtelierdusudImage from '~/assets/project-atelierdusud.webp';
import projectOnerepImage from '~/assets/project-onerep.webp';
import projectAllyImage from '~/assets/project-ally.webp';

export default {
    components: {
        PortfolioItem,
        ParticlesBackground,
    },
    mounted() {
        this.typewriterEffect();
        this.animateNumber(7, 'projectCounter', 2000); // Pour "6 projets"
        this.animateNumber(42, 'nightCounter', 2000); // Pour "42 nuits blanches"
        this.animateNumber(439, 'cafeCounter', 2000); // Pour "439 cafés"
    },
    methods: {
        handleMouseMove(e) {
            const { offsetX, offsetY, target } = e;
            const { clientWidth, clientHeight } = target;
            const xPos = (offsetX / clientWidth) - 0.5;
            const yPos = (offsetY / clientHeight) - 0.5;

            const shadowX = 20 * xPos;
            const shadowY = 20 * yPos;

            target.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.3)`;
        },
        resetShadow(e) {
            e.target.style.boxShadow = '';
        },
        addShadowEffectListeners() {
            const cards = document.querySelectorAll('.shadow-test');
            cards.forEach(card => {
                card.addEventListener('mousemove', this.handleMouseMove);
                card.addEventListener('mouseleave', this.resetShadow);
            });
        },
        removeShadowEffectListeners() {
            const cards = document.querySelectorAll('.shadow-test');
            cards.forEach(card => {
                card.removeEventListener('mousemove', this.handleMouseMove);
                card.removeEventListener('mouseleave', this.resetShadow);
            });
        },

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
            const heights = {
                '0': 'h-auto sm:h-[500px]',
                '1': 'h-auto sm:h-[450px]',
                '2': 'h-auto sm:h-[500px]',
                '3': 'h-auto sm:h-[650px]',
                '4': 'h-auto sm:h-[550px]',
                '5': 'h-auto sm:h-[650px]',
                '6': 'h-auto sm:h-[450px]',
            }
                ;
            return heights[index % Object.keys(heights).length]; // Loop through heights for each index
        },

        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
    },

    data() {
        return {
            typing: true,
            projects: [
                // 1
                {
                    title: 'Productivity',
                    link: '/projects/productivity',
                    imageSrc: projectProductivityImage,
                    description: "Réalisation d'une application de productivité",
                    logos: [
                        'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png',
                    ],
                },
                // 2
                {
                    title: 'Portfolio',
                    // link: '/projects/portfolio', // Supprimez cette ligne
                    imageSrc: projectPortfolioImage,
                    description: "Réalisation d'un portfolio pour exposer mes projets et expériences.",
                    logos: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/2560px-Nuxt_logo.svg.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png',
                    ],
                    clickAction: 'scrollToTop' // Ajoutez une nouvelle propriété pour le nom de la méthode
                },
                // 3
                {
                    title: 'Bunker Project',
                    link: '/projects/bunker',
                    imageSrc: projectBunkerImage,
                    description: "J'ai réalisé des CRUD avec Laravel et Vue.js dans un projet commun d'application de jeux ce rôle",
                    logos: [
                        'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png',
                    ],
                },
                // 4
                {

                    title: 'Darkest Dungeon',
                    link: '/projects/darkestdungeon',
                    imageSrc: projectDarkestDungeonImage,
                    description: "J'ai réalisé une copie la plus proche possible d'un site en analysant simplement visuellement le rendu du site.",
                    logos: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png',
                    ],
                },

                // 5
                {
                    title: "L'Atelier du Sud",
                    link: '/projects/atelierdusud',
                    imageSrc: projectAtelierdusudImage,
                    description: "J'ai réalisé un site vitrine avec un backoffice permettant de créer des articles et des évènements.",
                    logos: [
                        'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png',
                    ],
                },
                // 6
                {
                    title: 'Onerep',
                    link: '/projects/onerep',
                    imageSrc: projectOnerepImage,
                    description: "J'ai réalisé des CRUD avec Laravel et Vue.js dans un projet  d'application de musculation",
                    logos: [
                        'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png',
                    ],
                },
                // 7
                {
                    title: 'Ally',
                    link: '/projects/ally',
                    imageSrc: projectAllyImage,
                    description: "J'ai été chef de projet pour la réalisation d'un site web en simulation d'agence durant 3 semaines",
                    logos: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png',
                    ],
                },

            ]
        };
    },
};
</script>
