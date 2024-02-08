<template>
  <div 
      class="group flex relative font-inter overflow-hidden mx- my-2 rounded-xl cursor-pointer"
      @click="handleClick">
      <img class="w-full object-cover" :src="project.imageSrc" />
      <!-- Div au survol -->
      <div class="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute top-0 left-0 w-full h-full z-10 rounded-xl"
          style="background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.90));">
          <div class="absolute top-[80%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:-translate-y-[60%] duration-300 ease-in-out">
              <!-- titre -->
              <p class="text-4xl font-bold mb-4">{{ project.title }}</p>
              <p class="text-xl mb-4 font-normal">{{ project.description }}</p>
              <div class="flex">
                  <img v-for="logo in project.logos" :key="logo" class="h-8 mx-3" :src="logo" />
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
props: {
  project: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
},
methods: {
  handleClick() {
    if (this.project.title === 'Portfolio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.$router.push(this.project.link);
    }
  },
},
};
</script>
