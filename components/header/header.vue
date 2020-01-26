<template>
    <header class="header">
        <div class="container py-0">
           <div class="header__container">
               <NuxtLink class="header__logo" to="/">
                   <img src="~/assets/logo.png" alt="">
               </NuxtLink>

               <NavMenu :mobileNav="mobileNav"></NavMenu>

               <nav class="user-nav">
                   <span
                           class="user-nav__item"
                           v-if="!isAuthenticated"
                   >
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

                   <span
                           class="user-nav__item"
                           v-if="!isAuthenticated"
                   >
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

                   <span class="user-nav__item user-nav__item--mobile-trigger">
                       <v-btn
                               class="header__link"
                               color="primary"
                               fab
                               x-small
                               depressed
                               @click="toggleNav"
                       >
                           <v-icon>menu</v-icon>
                       </v-btn>
                   </span>

                   <span
                           v-if="isAuthenticated"
                           class="user-nav__item">
                       <v-btn
                               class="header__link"
                               color="primary"
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
