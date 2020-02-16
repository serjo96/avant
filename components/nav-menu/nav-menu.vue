<template>
    <nav :class="{navbar: true, 'navbar--isOpen': mobileNav}">
        <div class="navbar__toggle-button">
            <v-btn
                    class="navbar__close"
                    color="white"
                    @click="toggleNav"
                    fab
                    x-small
                    icon
                    depressed
            >
                <v-icon>close</v-icon>
            </v-btn>
        </div>

        <div class="nav">
            <nuxt-link
                    class="nav__link"
                    @click.native="toggleNav"
                    :to="{ path: '/',hash:'#about-section'}"
            >
                About
            </nuxt-link>
            <nuxt-link
                    @click.native="toggleNav"
                    class="nav__link"
                    :to="{ path: '/',hash:'#step-section'}"
            >
                Steps
            </nuxt-link>
            <nuxt-link
                    @click.native="toggleNav"
                    class="nav__link"
                    :to="{ path: '/',hash:'#contact_form'}"
            >
                Contact
            </nuxt-link>
            <nuxt-link
                    @click.native="toggleNav"
                    class="nav__link"
                    :to="{ path: '/',hash:'#address-section'}">
                Address
            </nuxt-link>

        </div>

        <div
                class="auth-nav"
        >

            <div class="auth-nav__item">
                <v-btn
                        class="header__link"
                        color="light-blue lighten-1"
                        nuxt
                        tile
                        block
                        outlined
                        depressed
                        to="/chat"
                        @click="toggleNav"
                >
                    Get started
                </v-btn>
            </div>

             <span class="auth-nav__item" v-if="!isAuthenticated">
                 <v-btn
                         class="auth-nav__link"
                         color="light-blue lighten-1"
                         nuxt
                         tile
                         outlined
                         depressed
                         block
                         to="auth/sign-in"
                 >
                     Sign in
                 </v-btn>
             </span>

            <span class="auth-nav__item" v-if="!isAuthenticated">
                <v-btn
                        class="auth-nav__link"
                        color="light-blue lighten-1"
                        nuxt
                        tile
                        outlined
                        depressed
                        block
                        to="auth/sign-up"
                >
                    Sign up
                </v-btn>
            </span>
        </div>
    </nav>
</template>

<script src="./nav-menu.js"></script>
<style lang="stylus" src="./nav-menu.styl" scoped></style>
