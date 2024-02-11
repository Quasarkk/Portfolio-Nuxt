<template>
    <nav class="navmenu bg-slate-800 rounded-xl pr-4 max-h-[680px]">
        <ul class="">
            <li class="mb-4" data-section="needsGathering">
                <a id="week1" href="#needsGathering" class="block md:inline-block">
                    <span class="hidden md:inline">V.0 (MVP)</span>
                    <span class="hidden">V.0</span>
                </a>
            </li>
            <li class="my-4" data-section="functionnalities">
                <a id="week2" href="#functionnalities" class="block md:inline-block">
                    <span class="hidden md:inline">V.1</span>
                    <span class="hidden">V.1</span>
                </a>
            </li>
            <li class="my-4" data-section="technicalStack">
                <a id="week3" href="#technicalStack" class="block md:inline-block">
                    <span class="hidden md:inline">V.2</span>
                    <span class="hidden">V.2</span>
                </a>
            </li>
            <li class="my-4" data-section="MCD">
                <a id="week4" href="#MCD" class="block md:inline-block">
                    <span class="hidden md:inline">V3</span>
                    <span class="hidden">V3</span>
                </a>
            </li>
        </ul>
    </nav>
</template>


<script>
export default {
    data() {
        return {
            // Définissez une variable réactive pour suivre la section actuelle
            currentSection: null,
        };
    },

    mounted() {
        const nav = document.querySelector('.navmenu');
        const projectDetails = document.querySelector('#project-details');

        // Navbar suis le scroll
        window.addEventListener('scroll', () => {
            const { top, bottom } = projectDetails.getBoundingClientRect();
            const navLinks = document.querySelectorAll('.navmenu ul li a');
            // Remove all position classes before applying new ones
            nav.classList.remove('fixed', 'mb-auto', 'mt-auto');

            if (top >= 0) {
                // Lorsque le haut du projet est visible, ajouter 'mb-auto' et 'fixed'
                nav.classList.add('mb-auto',);
                nav.classList.remove('top-56');
            } else if (bottom <= 800) {
                // Lorsque le bas du projet n'est plus visible, ajouter 'mt-auto' et 'fixed'
                nav.classList.add('mt-auto',);
                nav.classList.remove('fixed', 'top-56');
            } else {
                // Sinon, juste 'fixed' quand on est entre les deux
                nav.classList.add('fixed', 'top-56');
            }
        })

        // Navbar before background change on scroll
        // v.0
        window.addEventListener('scroll', () => {
            var elementTarget = document.querySelector("#needsGathering");
            var elementTargetTop = elementTarget.getBoundingClientRect().top;

            if (elementTargetTop <= 0) {
                document.querySelector('#week1').classList.add('white-before');
            } else {
                document.querySelector('#week1').classList.remove('white-before');
            }
        });

        // v.1
        window.addEventListener('scroll', () => {
            var elementTarget = document.querySelector("#functionnalities");
            var elementTargetTop = elementTarget.getBoundingClientRect().top;

            if (elementTargetTop <= 0) {
                document.querySelector('#week2').classList.add('white-before');
            } else {
                document.querySelector('#week2').classList.remove('white-before');
            }
        });

        // v.2
        window.addEventListener('scroll', () => {
            var elementTarget = document.querySelector("#technicalStack");
            var elementTargetTop = elementTarget.getBoundingClientRect().top;

            if (elementTargetTop <= 0) {
                document.querySelector('#week3').classList.add('white-before');
            } else {
                document.querySelector('#week3').classList.remove('white-before');
            }
        });


        // v.3
        window.addEventListener('scroll', () => {
            var elementTarget = document.querySelector("#MCD");
            var elementTargetTop = elementTarget.getBoundingClientRect().top;


            if (elementTargetTop <= 0) {
                document.querySelector('#week4').classList.add('white-before');
            } else {
                document.querySelector('#week4').classList.remove('white-before');
            }
        });
    }
}
</script>



<style>
.white-before::before {
    background: white !important;
}

.navmenu ul li a::before {
    background: var(--nav-link-before-background, );
}


.navmenu ul li a::before {
    content: "";
    position: absolute;
    background: var(--nav-link-before-background, #0f172a);
    /* Autres styles pour ::before */
}

* {
    margin: 0;
    box-sizing: border-box;
}

ul {
    list-style: none;
}

.navmenu ul {
    padding-left: 50px;
    position: relative;
}

.navmenu ul::after {
    content: "";
    position: absolute;
    width: 3px;
    height: calc(100% - 75px);
    left: 40px;
    top: 35px;
    background: #f1f5f9;
    z-index: 3;
}

.navmenu ul li {
    padding: 30px 0;
    padding-left: 20px;
}

.navmenu ul li a {
    position: relative;
    color: #f1f5f9;
    font-size: 1.5rem;
    line-height: 1rem;
    font-weight: 500;
}

.navmenu ul li a::before {
    content: "";
    position: absolute;
    background: var(--nav-link-before-background, #0f172a);
    width: 18px;
    height: 18px;
    left: -37px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50px;
    border: 4px solid #f1f5f9;
    z-index: 4;
}



.navmenu ul li a.active {
    font-weight: 700;
}

.navmenu ul li a.active:before {
    background: #f1f5f9
}

.navmenu ul li a:hover::before {
    background: #64748b;
}
</style>

