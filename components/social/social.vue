<template>
    <section class="social-area">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-12 brdr">
                    <div class="social-follow">
                        <h4>follow us :</h4>
                        <div class="nav">
                            <ul>
                                <li><a href="#"><v-icon>mdi-twitter</v-icon></a></li>
                                <li><a href="#"><v-icon>mdi-dribbble</v-icon></a></li>
                                <li><a href="#"><v-icon>mdi-facebook</v-icon></a></li>
                                <li><a href="#"><v-icon>mdi-google</v-icon></a></li>
                                <li><a href="#"><v-icon>mdi-youtube</v-icon></a></li>
                                <li><a href="#"><v-icon>mdi-linkedin</v-icon></a></li>
                                <li><a href="#"><v-icon>mdi-instagram</v-icon></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="subs-form-area">
                        <h4>Subscribe : </h4>
                        <form action="#" method="post">
                            <v-text-field
                                placeholder="Your Email"
                                solo
                            ></v-text-field>
                            <v-btn
                                    class="white--text"
                                    color="light-blue accent-2"
                            >Subscribe</v-btn>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script src="./social.js"></script>
<style src="./social.styl" lang="stylus" scoped></style>
