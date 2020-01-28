<template>
    <header class="header">
        <div class="container py-0">
           <div class="header__container">
               <div class="header__left-side">
                   <v-btn
                           class="header__mobile-trigger white--text"
                           color="transparent"
                           fab
                           small
                           depressed
                           @click="toggleNav"
                       >
                       <v-icon>menu</v-icon>
                   </v-btn>
                   <NuxtLink class="header__logo" to="/">
                       <img src="~/assets/logo.png" alt="">
                   </NuxtLink>
               </div>


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

                   <span
                           v-if="isAuthenticated"
                           class="user-nav__item"
                   >
                        <v-menu
                                offset-y
                                left="20"
                                nudge-bottom="20"
                        >
                            <template v-slot:activator="{ on }">
                               <v-btn
                                       class="header__link white--text"
                                       color="transparent"
                                       fab
                                       small
                                       depressed
                                       v-on="on"
                               >
                                   <v-icon>mdi-account</v-icon>
                               </v-btn>
                            </template>
                        <v-list class="drop-down-nav">
                            <v-list-item @click="onShowProfileSettings">
                                <v-list-item-title>Profile</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Logout</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>

                   </span>
               </nav>
           </div>
        </div>
    </header>
</template>

<script src="./header.js"></script>
<style src="./header.styl" lang="stylus" scoped></style>
