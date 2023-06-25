<template>
    <div>
        <header>
            <NuxtLink to="/">Index</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
        </header>


        <div>
            <slot />
        </div>


    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>