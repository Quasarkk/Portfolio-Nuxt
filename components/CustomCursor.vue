<template>
    <div>
      <div id="pointer-dot"></div>
      <div id="pointer-ring"></div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      this.initPointer();
    },
    methods: {
      initPointer() {
        const pointer = document.getElementById("pointer-dot");
        const ring = document.getElementById("pointer-ring");
  
        let mouseX = -100;
        let mouseY = -100;
        let ringX = -100;
        let ringY = -100;
  
        window.onmousemove = (mouse) => {
          mouseX = mouse.clientX;
          mouseY = mouse.clientY;
        };
  
        const trace = (a, b, n) => {
          return (1 - n) * a + n * b;
        };
  
        const getOption = (option) => {
          let defaultObj = {
            pointerColor: "white",
            ringSize: 15,
          };
          if (this.$options[option] === undefined) {
            return defaultObj[option];
          } else {
            return this.$options[option];
          }
        };
  
        const render = () => {
          ringX = trace(ringX, mouseX, 0.2);
          ringY = trace(ringY, mouseY, 0.2);
  
          if (document.querySelector("a:hover")) {
            pointer.style.width = "10px";
            pointer.style.height = "10px";
            pointer.style.backgroundColor = "white"; // Ajout de la couleur de fond
          } else {
            pointer.style.width = "0";
            pointer.style.height = "0";
            pointer.style.backgroundColor = "transparent"; // Réinitialisation de la couleur de fond
          }
  
          if (document.querySelector(".p-action-click:hover")) {
            pointer.style.borderColor = getOption("pointerColor");
          } else {
            pointer.style.borderColor = "white";
          }
          ring.style.borderColor = getOption("pointerColor");
          ring.style.padding = getOption("ringSize") + "px";
  
          pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
          ring.style.transform = `translate(${ringX - getOption("ringSize")}px, ${ringY - getOption("ringSize")}px)`;
  
          requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
      },
    },
  };
  </script>
  
  <style scoped>
  /* 
    This CSS file was created by OwL for use by pointer.js, 
    which can be found on https://seattleowl.com. 
  */
  
  #pointer-dot {
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    background-color: transparent; /* Couleur de fond initiale */
    border: 2.5px solid white;
    position: fixed;
    border-radius: 4px;
    z-index: 101;
    pointer-events: none;
    transition: width 0.1s, height 0.1s, background-color 0.1s; /* Ajout de la transition */
  }
  
  #pointer-ring {
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    padding: 15px;
    border: 2px solid white;
    position: fixed;
    border-radius: 100px;
    z-index: 102;
    pointer-events: none;
  }
  
  html {
    cursor: none !important;
  }
  
  a {
    cursor: none !important;
  }
  </style>
  