<template>
    <nav :class="{'main-nav': true, 'main-nav--isOpen': mobileNav}">
        <nuxt-link
                class="main-nav__link"
                :to="{ path: '/',hash:'#description-section'}"
        >
            Description
        </nuxt-link>
        <nuxt-link
                class="main-nav__link"
                :to="{ path: '/',hash:'#about-section'}"
        >
            About
        </nuxt-link>
        <nuxt-link
                class="main-nav__link"
                :to="{ path: '/',hash:'#step-section'}"
        >
            Steps
        </nuxt-link>
        <nuxt-link
                class="main-nav__link"
                :to="{ path: '/',hash:'#contact_form'}"
        >
            Contact
        </nuxt-link>
        <nuxt-link
                class="main-nav__link"
                :to="{ path: '/',hash:'#address-section'}">
            Address
        </nuxt-link>
    </nav>
</template>

<script src="./mobile-nav.js"></script>
<style lang="stylus" src="./nav-menu.styl" scoped></style>
