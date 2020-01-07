<template>
    <section class="description-section">
        <div class="container">
            <div class="description-section__content">
                <div class="description">
                    <h1 class="description__title">Hippocrates AI system </h1>
                    <p class="description__text">Hippocrates AI system performs as a health care medical doctor advisor. Users may provide symptoms, ask medical questions and describe conditions in order to get diagnosis advise, including known medication and treatments. The system emulates MD.</p>
                </div>
                <div class="description-section__icon">
                    <img src="~assets/heart.png" alt="">
                </div>
            </div>
            <div class="description-section__button">
                <nuxt-link :to="{ path: '/', hash:'#contact_form'}">CONTACT US NOW</nuxt-link>
            </div>
        </div>
    </section>
</template>

<script src="./description-section.js"></script>
<style src="./description-section.styl" lang="stylus" scoped></style>
