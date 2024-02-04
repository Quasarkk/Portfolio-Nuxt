<template>
    <NuxtParticles class="absolute top-0 left-0 w-full h-full -z-10" id="tsparticles" :options="options" @load="onLoad">
    </NuxtParticles>
</template>


<script setup lang="ts">
import type { Container } from 'tsparticles-engine';

const options = {
    fullScreen: {
        enable: true,
        zIndex: 0 // Assurez-vous que le z-index permette l'interaction
    },
    background: {
        color: {
            value: '#0f172a',
        }
    },
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#3F4555", "#6F747F", "#9FA2AA"] 
    },
    shape: {
      type: "circle", 
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 3000,
        rotateY: 1500
      }
    },
  },
  interactivity: {
    detect_on: "window", // Interaction sur toute la fenêtre
    events: {
      onHover: {
        enable: true,
        mode: ["grab", "bubble"] // Modes multiples au survol
      },
      // ...
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 100,
        size: 12,
        duration: 2,
        opacity: 1,
        speed: 3
      },
      // ...
    }
  },
  retina_detect: true // Support des écrans Retina
};

const onLoad = (container: Container) => {
    container.pause();
    setTimeout(() => container.play(), 2000);
};
</script>
