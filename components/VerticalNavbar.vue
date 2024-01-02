<template>
    <nav class="navmenu bg-slate-800 rounded-xl pr-4 max-h-[680px]">
        <ul class="">
            <li class="mb-4" data-section="needsGathering"><a href="#needsGathering">Semaine 1 </a></li>
            <li class="my-4" data-section="functionnalities"><a href="#functionnalities">Semaine 2 </a></li>
            <li class="my-4" data-section="technicalStack"><a href="#technicalStack">Semaine 3 </a></li>
            <li class="my-4" data-section="MCD"><a href="#MCD">Semaine 4 </a></li>
            <li class="my-4" data-section="wireframesMockups"><a href="#wireframesMockups">Semaine 5 </a></li>
            <li class="my-4" data-section="backoffice"><a href="#backoffice">Semaine 6 </a></li>
            <li class="mt-4" data-section="userInterface"><a href="#userInterface">Semaine 7 </a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    mounted() {
        const nav = document.querySelector('.navmenu');
        const projectDetails = document.querySelector('#project-details');

        window.addEventListener('scroll', () => {
            const { top, bottom } = projectDetails.getBoundingClientRect();

            // Remove all position classes before applying new ones
            nav.classList.remove('fixed', 'mb-auto', 'mt-auto');

            if (top >= 0) {
                // Lorsque le haut du projet est visible, ajouter 'mb-auto' et 'fixed'
                nav.classList.add('mb-auto',);
                nav.classList.remove('top-24');
            } else if (bottom <= 800) {
                // Lorsque le bas du projet n'est plus visible, ajouter 'mt-auto' et 'fixed'
                nav.classList.add('mt-auto',);
                nav.classList.remove('fixed', 'top-24');
            } else {
                // Sinon, juste 'fixed' quand on est entre les deux
                nav.classList.add('fixed', 'top-24');
                nav.classList.remove('');
            }
        });
    }
}
</script>



<style>

.navmenu ul li a::before {
    content: "";
    position: absolute;
    background: var(--nav-link-before-background, #0f172a);
    /* Autres styles pour ::before */
}
    * {
        margin:0;
        box-sizing: border-box;
    }

    ul {
        list-style:none;
    }

    .navmenu {
    }   

    .navmenu ul{
        padding-left: 50px;
        position: relative;
    }

    .navmenu ul::after {
        content:"";
        position: absolute;
        width: 3px;
        height: calc(100% - 75px);
        left:40px;
        top:35px;
        background:#f1f5f9;
        z-index:5;
    }

    .navmenu ul li {
        padding: 30px 0;
        padding-left: 20px;
    }

    .navmenu ul li a {
        position : relative;
        color: #f1f5f9;
        font-size: 1.5rem;
        line-height: 1rem;
        font-weight: 500;
    }

    .navmenu ul li a::before {
        content:"";
        position: absolute;
        background: #0f172a;
        width: 18px;
        height: 18px;
        left: -37px;
        top:50%;
        transform: translateY(-50%);
        border-radius: 50px;
        border: 4px solid #f1f5f9;
        z-index: 99;
    }



    .navmenu ul li a.active {
        font-weight:700;
    }

    .navmenu ul li a.active:before {
        background: #f1f5f9
    }

    .navmenu ul li a:hover::before {
        background: #64748b;
    }
</style>

