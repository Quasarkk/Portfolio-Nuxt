<template >
    <div class="text-slate-100">
        <!-- Section 1  -->
        <section class="flex justify-between w-10/12 mx-auto">
            <p class="text-4xl">Bonjour je suis 
                <span class="text-red-700" ref="typewriterText"></span>
                <span class="inline-block w-1 animate-blink">|</span>
                <br><br>
                Moi c'est Clément, jeune developpeur fullstack. J'aime construire des applications, peaufiner l'UI et
                trouver des solutiosn techniques.

                <br><br>
                Scrollez pour en savoir plus !
            </p>
            <img src="C:\Users\Stonks\Documents\GitHub\Portfolio-nuxt\assets\pp_github.png">
        </section>

        <!-- Section 2  -->
        <section class="w-10/12 mx-auto font-inter">
            <p class="text-center text-6xl mt-20 mb-1">En moins d'un an </p>
            <div class="justify-evenly flex">
                <!-- Carte 1  -->
                <div class="">
                    <p class="text-4xl text-center" ref="projectCounter">0</p>
                    <p class="text-center">projets</p>
                </div>

                <!-- Carte 2  -->
                <div>
                    <p class="text-4xl text-center" ref="nightCounter">0</p>
                    <p class="text-center">nuits blanches</p>
                </div>

                <!-- Carte 3  -->
                <div>
                    <p class="text-4xl text-center" ref="cafeCounter">0</p>
                    <p class="text-center">cafés</p>
                </div>
            </div>
        </section>
        <!-- Section 3 - Compétences -->
        <section class="w-10/12 mx-auto mt-20 mb-12">
            <p class="text-6xl text-center mt-20 mb-12">Mes compétences</p>
            <div class="flex justify-between">
                <p>Travail d'équipe</p>
                <p>Autonomie</p>
                <p>Profesionnel</p>
            </div>
        </section>

        <!-- Section 3.5 - outils -->
        <section class="w-10/12 mx-auto mt-20 mb-12">
            <p class="text-6xl text-center mt-20 mb-12">Mes outils</p>
            <div class="flex justify-between">
                <!-- Vuejs -->
                <div class="">
                    <img class="h-24 flex justify-center" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png">
                    <p class="justify-center flex text-4xl">Vue.js</p>
                    <p class="justify-center flex text-xl">4 projets</p>
                </div>
                <!-- Laravel -->
                <div class="">
                    <img class="h-24 flex justify-center"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png">
                    <p class="justify-center flex text-4xl">Laravel</p>
                    <p class="justify-center flex text-xl">3 projets</p>
                </div>
                <!-- Tailwind -->
                <div class="">
                    <img class="h-24"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png">
                    <p class="justify-center flex text-4xl">Tailwind</p>
                    <p class="justify-center flex text-xl">6 projets</p>
                </div>

                <!-- Figma -->
                <div>figma</div>
                <!-- Github -->
                <div>github</div>
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
          const phrases = ['développeur', 'créatif', 'curieux'];
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
                imageSrc: 'https://www.macommune.info/wp-content/uploads/2021/02/atelier-du-sud-jeanne-carasso-poitevin-002-1200x766.jpg',
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
                imageSrc: 'https://landen.imgix.net/blog_enKWriAikxIViACa/assets/JRnacqCwgKSBmLhy.jpg',
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

            }
        ]
    };
},
};
</script>
