<template>
    <section class="social-area">
        <Container>
            <div class="row">
                <div class="col-md-6 col-sm-12 brdr">
                    <div class="social-follow">
                        <h4>follow us :</h4>
                        <ul class="social-area__nav">
                            <li class="social-area__link"><a href="#"><v-icon color="white">mdi-twitter</v-icon></a></li>
                            <li class="social-area__link"><a href="#"><v-icon color="white">mdi-dribbble</v-icon></a></li>
                            <li class="social-area__link"><a href="#"><v-icon color="white">mdi-facebook</v-icon></a></li>
                            <li class="social-area__link"><a href="#"><v-icon color="white">mdi-google</v-icon></a></li>
                            <li class="social-area__link"><a href="#"><v-icon color="white">mdi-youtube</v-icon></a></li>
                            <li class="social-area__link"><a href="#"><v-icon color="white">mdi-linkedin</v-icon></a></li>
                            <li class="social-area__link"><a href="#"><v-icon color="white">mdi-instagram</v-icon></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="subs-form-area">
                        <h4 class="subs-form-area__title">Subscribe: </h4>
                        <v-form
                                action="#"
                                class="subs-form-area__form"
                                method="post"
                        >
                            <v-text-field
                                placeholder="Your Email"
                                solo
                                dense
                            ></v-text-field>
                            <v-btn
                                    class="ml-2 white--text"
                                    color="light-blue accent-2"
                                    normal
                            >Subscribe</v-btn>
                        </v-form>
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>

<script>
	export default {
	}
</script>
<style src="./social.styl" lang="stylus" scoped></style>
