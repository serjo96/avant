<template>
    <header class="header">
        <div class="container">
           <div class="header__container">
               <NuxtLink class="header__logo" to="/">
                   <img src="~/assets/logo.png" alt="">
               </NuxtLink>
               <nav class="nav">
                   <span class="nav__item">
                       <nuxt-link class="header__link" to="sign-in">Sign in</nuxt-link>
                   </span>

                   <span class="nav__item">
                       <nuxt-link class="header__link" to="sign-up">Sign up</nuxt-link>
                   </span>
               </nav>
           </div>
        </div>
    </header>
</template>

<script src="./header.js"></script>
<style src="./header.styl" lang="stylus" scoped></style>
