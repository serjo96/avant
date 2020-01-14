<template>
    <header class="header">
        <div class="container">
           <div class="header__container">
               <NuxtLink class="header__logo" to="/">
                   <img src="~/assets/logo.png" alt="">
               </NuxtLink>
               <nav class="nav">
                   <span class="nav__item">
                       <v-btn
                               class="header__link"
                               nuxt
                               tile
                               depressed
                               to="auth/sign-in"
                       >
                           Sign in
                       </v-btn>
                   </span>

                   <span class="nav__item">
                       <v-btn
                           class="header__link"
                           nuxt
                           tile
                           depressed
                           to="auth/sign-up"
                       >
                           Sign up
                       </v-btn>
                   </span>

                   <span class="nav__item">
                       <v-btn
                               class="header__link"
                               fab
                               x-small
                               depressed
                               @click="onShowProfileSettings"
                       >
                           <v-icon>mdi-account</v-icon>
                       </v-btn>
                   </span>
               </nav>
           </div>
        </div>
    </header>
</template>

<script src="./header.js"></script>
<style src="./header.styl" lang="stylus" scoped></style>
