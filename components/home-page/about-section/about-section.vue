<template>
    <section class="about-area" id="about">
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <div class="section-title text-center">
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempoar incididunt.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 pb-0">
                    <div class="about-content">
                        <h3 class="about-content__title">WELCOME TO Mgalenic</h3>
                        <h2 class="about-content__subtitle">Why you should choose us ?</h2>
                        <p class="about-content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen
                            <br>
                            <br>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen
                        </p>
                        <v-btn
                                class="white--text"
                                color="light-blue accent-2"
                                tile
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
        </div>
    </section>
</template>

<script src="./about-section.js"></script>
<style lang="stylus" src="./about-section.styl" scoped></style>
