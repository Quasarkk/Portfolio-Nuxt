<template >
    <div class="text-slate-100">
        <!-- Section 1  -->
        <section class="flex justify-between w-10/12 mx-auto">
            <p class="text-2xl">Bonjour je suis <span class="text-red-700"> développeur/créatif/curieux</span> <br><br>
                Moi c'est Clément, jeune developpeur fullstack. J'aime construire des applications, peaufiner l'UI et
                trouver des solutiosn techniques.

                <br><br>
                Scrollez pour en savoir plus !
            </p>
            <img src="C:\Users\Stonks\Documents\GitHub\Portfolio\assets\pp_github.png">
        </section>

        <!-- Section 2  -->
        <section class="w-10/12 mx-auto font-inter">
            <p class="text-center text-6xl mt-20 mb-1">En moins d'un an </p>
            <div class="justify-evenly flex">
                <!-- Carte 1  -->
                <div class="flex">
                    <p class="text-4xl text-center">6<br> projets </p>
                </div>

                <!-- Carte 2  -->
                <div>
                    <p class="text-4xl text-center">42<br> nuits blanches</p>
                </div>

                <!-- Carte 3  -->
                <div>
                    <p class="text-4xl text-center">439<br> cafés</p>
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
        <section class="flex flex-col">
            <!-- Portfolio -->
            <div class="w-10/12 flex justify-between mx-auto mb-12">
                <!-- Image - partie gauche -->
                <img class="w-1/2"
                    src="https://lh4.googleusercontent.com/-IQeMCS7azCF1FCp3IQtgKIA_KyVoRRrk-qh8DcbQBaf8KyvvRFg4EeVvmxmR-mhlKLl86jhn7rwz0OA7x3OmbCKBqdCPut9NOoUYOFwU6m677sEI5YlRSEjpb0LORz_5anmtaApgafnmU0nqtHsUBNBq7d29HbeFtdtzde5VlFxjQZB7xAl8d7MaV4_BA">

                <!-- Texte - partie droite -->
                <div class="w-1/2 flex flex-col justify-between">
                    <p class="text-center text-4xl">Portfolio</p>
                    <div class="flex justify-between">
                        <img class="h-24"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/2560px-Nuxt_logo.svg.png">
                        <img class="h-24"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png">
                    </div>
                    <p class="text-xl">j'ai réalise ce portfolio afin de pouvoir rassembler mes différents projets.
                        J'en ai profiter pour faire mon premier projet sur nuxt.
                    </p>
                    <!-- Liens -->
                    <div class="flex justify-around">
                        <a href="https://github.com/Quasarkk/portfolio" class=" flex"><svg
                                xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>github</a>
                        <a class=" flex"><svg xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-external-link" width="24" height="24"
                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                <path d="M11 13l9 -9" />
                                <path d="M15 4h5v5" />
                            </svg>live</a>
                    </div>
                </div>
            </div>

            <!-- Portfolio V2 -->
            <div class="w-1/3 justify-between mx-auto mb-12 group relative rounded-lg">
                <!-- Image -->
                <img class="w-full"
                    src="https://lh4.googleusercontent.com/-IQeMCS7azCF1FCp3IQtgKIA_KyVoRRrk-qh8DcbQBaf8KyvvRFg4EeVvmxmR-mhlKLl86jhn7rwz0OA7x3OmbCKBqdCPut9NOoUYOFwU6m677sEI5YlRSEjpb0LORz_5anmtaApgafnmU0nqtHsUBNBq7d29HbeFtdtzde5VlFxjQZB7xAl8d7MaV4_BA">

                <!-- Div au survol -->
                <div class="hidden group-hover:block absolute top-0 left-0 w-full h-full z-10"
                    style="background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85));">
                    <div
                        class="absolute top-3/4 left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-white">
                        <!-- titre -->
                        <p class="text-4xl">Portofolio</p>
                        <!-- description -->
                        <p class="text-xl">Réalisation d'un portfolio afin de pouvoir exposer mes projets et expériences passés et futurs</p>
                        <!-- stack -->
                        <p> Laravel Vue Hashtag</p>
                    </div>
                </div>
            </div>



            <!-- L'Atelier du sud -->
            <div class=" w-10/12 flex justify-between mx-auto mb-12">
                <!-- Image - partie gauche -->
                <img class="w-1/2" src="https://www.apogea.fr/wp-content/uploads/2020/02/Tableau-de-bord-Report-One.png">

                <!-- Texte - partie droite -->
                <div class="w-1/2 flex flex-col justify-between ">
                    <p class="text-center text-4xl">L'Atelier du sud</p>
                    <div class="flex justify-between">
                        <img class="h-24" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png">
                        <img class="h-24"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png">
                        <img class="h-24"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png">
                    </div>
                    <p class="text-xl">j'ai réalise une application from scratch permettant d'ajouter des évènements et des
                        articles de blog sur un site web.
                        Les articles et évènements sont affichés dynamiquement sur le site selon la date de publication et
                        gérés depuis un backoffice.
                    </p>
                    <!-- Liens -->
                    <div class="flex justify-around">
                        <a class="flex" href="https://github.com/Quasarkk/CafeDuSud"><svg xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24"
                                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>github</a>
                        <a class="flex"><svg xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-external-link" width="24" height="24"
                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                <path d="M11 13l9 -9" />
                                <path d="M15 4h5v5" />
                            </svg>live</a>
                    </div>
                </div>
            </div>

            <!-- Onerep -->
            <div class="w-10/12 flex justify-between mx-auto mb-12">
                <!-- Image - partie gauche -->
                <img class="w-1/2" src="https://appmaster.io/api/_files/oqQD259R96yciZHjFVRneK/download/">

                <!-- Texte - partie droite -->
                <div class="w-1/2 flex flex-col justify-between ">
                    <p class="text-center text-4xl">Onerep</p>
                    <div class="flex justify-between">
                        <img class="h-24" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png">
                        <img class="h-24"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png">
                        <img class="h-24"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png">
                    </div>
                    <p class="text-xl">j'ai réalise une application from scratch permettant aux pratiquant de musculation et
                        de powerlifting
                        de gérer leurs programmes, leurs entrainements et de suivre leur progression sur la durée en se
                        basant sur l'evolution
                        de la 1rm.
                    </p>
                    <!-- Liens -->
                    <div class="flex justify-around">
                        <a href="https://github.com/Quasarkk/onerep" class=" flex"><svg xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24"
                                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>github</a>
                        <a class=" flex"><svg xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-external-link" width="24" height="24"
                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                <path d="M11 13l9 -9" />
                                <path d="M15 4h5v5" />
                            </svg>live</a>
                    </div>
                </div>
            </div>

            <!-- Bunker project  -->
            <div class="w-10/12 flex justify-between mx-auto mb-12">
                <!-- Image - partie gauche -->
                <img class="w-1/2" src="https://landen.imgix.net/blog_enKWriAikxIViACa/assets/JRnacqCwgKSBmLhy.jpg">

                <!-- Texte - partie droite -->
                <div class="w-1/2 flex flex-col justify-between ">
                    <p class="text-center text-4xl">Bunker project</p>
                    <div class="flex justify-between">
                        <img class="h-24" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png">
                        <img class="h-24"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png">
                        <img class="h-24"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png">
                    </div>
                    <p class="text-xl">j'ai réalise des CRUD avec Laravel et Vue.js dans un projet commun sur lequel nous
                        devions réaliser une
                        application de jeux ce role qui n'a malheuresement pas aboutit.
                    </p>
                    <!-- Liens -->
                    <div class="flex justify-around">
                        <a href="https://github.com/Cy-Bert/Bunker-Project/tree/CRUD-Tables" class=" flex"><svg
                                xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>github</a>
                        <a class=" flex"><svg xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-external-link" width="24" height="24"
                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                <path d="M11 13l9 -9" />
                                <path d="M15 4h5v5" />
                            </svg>live</a>
                    </div>
                </div>
            </div>

            <!-- Ally  -->
            <div class="w-10/12 flex justify-between mx-auto mb-12">
                <!-- Image - partie gauche -->
                <img class="w-1/2"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Ally_Financial.svg/1200px-Ally_Financial.svg.png">

                <!-- Texte - partie droite -->
                <div class="w-1/2 flex flex-col justify-between">
                    <p class="text-center text-4xl">Ally</p>
                    <div class="flex justify-between">
                        <img class="h-24"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png">
                    </div>
                    <p class="text-xl">j'ai été chef de projet pour la réalisation d'un site web en simulation d'agence
                        durant 3 semaines.
                        J'ai superviser la création des wireframes, maquettes, logo et intégration avec notre formateur dans
                        le role du client
                        difficile afin de nous mettre en situation la plus réaliste possible.
                    </p>
                    <!-- Liens -->
                    <div class="flex justify-around">
                        <a href="https://github.com/Quasarkk/Ally-LGBT" class="flex"><svg xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24"
                                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>github</a>
                        <a class="flex"><svg xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-external-link" width="24" height="24"
                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                <path d="M11 13l9 -9" />
                                <path d="M15 4h5v5" />
                            </svg>live</a>
                    </div>
                </div>
            </div>

            <!-- Darkest Dungeon  -->
            <div class="w-10/12 flex justify-between mx-auto mb-12">
                <!-- Image - partie gauche -->
                <img class="w-1/2"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/262060/ss_7232ad33cf7e5e58613004fb888c18d3ab1fdd8d.1920x1080.jpg?t=1698787583">

                <!-- Texte - partie droite -->
                <div class="w-1/2 flex flex-col justify-between">
                    <p class="text-center text-4xl">Darkest Dungeon</p>
                    <div class="flex justify-between">
                        <img class="h-24"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png">
                    </div>
                    <p class="text-xl">j'ai réalisé une copie la plus proche possible du site de darkest dungeon en
                        analysant simplement visuellement le
                        rendu du site.

                        J'ai pu apprendre à utiliser les flex-box et à mettre en place une structure HTML complexe.
                    </p>
                    <!-- Liens -->
                    <div class="flex justify-around">
                        <a href="https://github.com/Quasarkk/darkest-dungeon" class="flex"><svg
                                xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>github</a>
                        <a class="flex"><svg xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-external-link" width="24" height="24"
                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                <path d="M11 13l9 -9" />
                                <path d="M15 4h5v5" />
                            </svg>live</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
