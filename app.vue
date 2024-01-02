<template>
  <div class="bg-slate-900 cursor-none focus:cursor-none hover:cursor-none">
    <NuxtLayout>
      <header class="w-full top-0 fixed mx-auto bg-slate-900/60 backdrop-blur-md text-slate-100 border-b-2 border-slate-100 z-50">
        <nav class="w-8/12 flex justify-between h-16">
          <p class="text-4xl my-auto">Quasark</p>
          <ul class="flex justify-between w-6/12 my-auto">
            <li> <NuxtLink to="/" class="cursor-none">Accueil</NuxtLink> </li>
            <li> <NuxtLink to="/projets" class="cursor-none">Projets</NuxtLink> </li>
            <li> <NuxtLink to="/contact" class="cursor-none">Contact</NuxtLink> </li>
          </ul>
        </nav>
      </header>

      <CustomCursor />
      <NuxtPage class="pt-16"/>
    </NuxtLayout>
  </div>
</template>
