<template>
    <section class="description-section" id="description-section">
        <div class="description-section__base">
            <Container>
                <div class="description-section__content">
                    <div class="description">
                        <h1 class="description__title">Hippocrates - AI-based medical advisor</h1>
                        <p class="description__text">
                            Hippocrates health system is an AI based medical advisor. Users may provide symptoms, ask medical questions and describe conditions in order to get diagnosis advise, including known medication and treatments. This means a reliable, simple and fast medical assistance experiences for people around the world. We provide essential capabilities necessary to advice patients about medical symptoms and conditions based on data and analytics taken from The National Center for Biotechnology, CDC and other accredited resources. The service is available for adults (18+) under a disclaimer and is not intend to replace a human physician.
                        </p>
                        <div class="description-section__button">
                            <v-btn
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

        </div>
    </section>
</template>

<script src="./description-section.js"></script>
<style src="./description-section.styl" lang="stylus" scoped></style>
