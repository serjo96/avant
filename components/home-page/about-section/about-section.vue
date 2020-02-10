<template>
    <section class="about-area" id="about-section">
        <Container>
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <div class="section-title text-center">
                        <h2>About</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 pb-0">
                    <div class="about-content">
<!--                        <h3 class="about-content__title">WELCOME TO Mgalenic</h3>-->
                        <h2 class="about-content__subtitle">GBT Technologies, Inc. (“GBT”)</h2>
                        <p class="about-content__text">GBT Technologies, Inc. (“GBT”) is a technology company focusing on artificial intelligence innovations and chip design. The company is developing a portfolio of Intellectual Property that is targeted to break new horizons in the field of intelligent systems by introducing new architecture integrated circuit technology, enabling powerful artificial intelligence applications.</p>
                        <v-btn
                                class="white--text"
                                color="light-blue accent-2"
                                nuxt
                                to="chat"
                        >get started now!</v-btn>
                    </div>
                </div>
                <div class="col-md-6 pb-0">
                    <div class="about-image">
                        <img src="~assets/about-image.png" alt="">
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>

<script src="./about-section.js"></script>
<style lang="stylus" src="./about-section.styl" scoped></style>
