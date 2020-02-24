<template>
    <header class="header" id="header">
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


                   <NavMenu
                           :toggleNav="toggleNav"
                           :mobileNav="mobileNav"></NavMenu>

                   <nav class="user-nav">
                       <client-only>
                           <span
                                   class="user-nav__item user-nav__item--auth"
                                   v-if="!isAuthenticated"
                           >
                               <v-btn
                                       class="header__link"
                                       color="light-blue lighten-1"
                                       nuxt
                                       tile
                                       outlined
                                       depressed
                                       to="auth/sign-in"
                               >
                                   Sign in
                               </v-btn>
                           </span>

                           <span
                                   class="user-nav__item user-nav__item--auth"
                                   v-if="!isAuthenticated"
                           >
                               <v-btn
                                   class="header__link"
                                   color="light-blue lighten-1"
                                   nuxt
                                   tile
                                   outlined
                                   depressed
                                   to="auth/sign-up"
                               >
                                   Sign up
                               </v-btn>
                           </span>

                           <div class="user-nav__item user-nav__item--chat">
                               <v-btn
                                       class="header__link"
                                       color="light-blue lighten-1"
                                       nuxt
                                       tile
                                       outlined
                                       depressed
                                       to="/chat"
                               >
                                   Get started
                               </v-btn>
                           </div>

                           <span
                                   v-if="isAuthenticated"
                                   class="user-nav__item"
                           >
                                <v-menu
                                        offset-y
                                        left
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
                                    <v-list-item>
                                        <v-list-item-avatar v-if="user.userID">
                                            <v-img v-if="user.avatar" :src="user.avatar"></v-img>
                                             <div class="avatar-text-login" v-if="!user.avatar">
                                                 <span>{{userLogin[0]}}</span>
                                             </div>
                                        </v-list-item-avatar>

                                        <v-list-item-content>
                                            <v-list-item-title v-html="userLogin"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>


                                    <v-list-item @click="onShowProfileSettings">
                                        <v-list-item-title>Profile</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item @click="logOut">
                                        <v-list-item-title>Logout</v-list-item-title>
                                    </v-list-item>

                                  </v-list>
                                </v-menu>

                           </span>
                       </client-only>
                   </nav>
               </div>
            </div>
    </header>
</template>

<script src="./header.js"></script>
<style src="./header.styl" lang="stylus" scoped></style>
