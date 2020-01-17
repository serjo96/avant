<template>
    <section class="description-section">
        <Container>
            <div class="description-section__content">
                <div class="description">
                    <h1 class="description__title">Hippocrates AI system </h1>
                    <p class="description__text">Hippocrates AI system performs as a health care medical doctor advisor. Users may provide symptoms, ask medical questions and describe conditions in order to get diagnosis advise, including known medication and treatments. The system emulates MD.</p>
                    <div class="description-section__button">
                        <v-btn
                                tile
                                nuxt
                                large
                                color="white"
                                class="font-weight-light"
                                to="chat"
                        >
                            get started now
                        </v-btn>
                    </div>
                </div>
                <div class="description-section__icon">
                    <img src="~assets/heart.png" alt="">
                </div>
            </div>
        </Container>
    </section>
</template>

<script src="./description-section.js"></script>
<style src="./description-section.styl" lang="stylus" scoped></style>
