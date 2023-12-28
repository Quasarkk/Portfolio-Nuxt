<!-- PortfolioItem.vue -->
<template>
    <NuxtLink :to="project.link"
        :class="['group relative font-inter w-[49%] overflow-hidden mx-1 my-2 rounded-xl', projectHeight]">
        <!-- Image -->
        <img class="w-full h-full object-cover absolute top-0 left-0" :src="project.imageSrc" />
        <!-- Div au survol -->
        <div class="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute top-0 left-0 w-full h-full z-10 rounded-xl"
            style="background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.90));">
            <div
                class="absolute top-[80%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:-translate-y-[60%] duration-300 ease-in-out">
                <!-- titre -->
                <p class="text-4xl font-bold mb-4">{{ project.title }}</p>
                <!-- description -->
                <p class="text-xl mb-4 font-normal">{{ project.description }}</p>
                <!-- stack -->
                <div class="flex w-1/3 justify-between">
                    <img v-for="logo in project.logos" :key="logo" class="h-8" :src="logo" />
                </div>
            </div>
        </div>
    </NuxtLink>
</template>
  
<script>
export default {
    props: {
        project: {
            type: Object,
            required: true,
        },
        index: { // Assurez-vous de passer l'index du projet en tant que prop.
            type: Number,
            required: true,
        },
    },
    computed: {
        projectHeight() {
            // Hauteurs prédéfinies pour chaque élément
            const heights = ['500px', '650px', '450px','500px', '450px', '500px']; // Ajoutez plus de valeurs si nécessaire
            // Sélectionnez la hauteur en fonction de l'index du projet
            const height = heights[this.index % heights.length]; // Utilisez le reste pour boucler sur les hauteurs
            return `h-[${height}]`;
        },
    },
};
</script>
  