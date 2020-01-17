<template>
    <section class="contact-section">
        <Container id="contact_form">
            <div class="contact-container">
                <div class="row justify-center">
                    <div class="col-md-6">
                        <div class="section-title text-center">
                            <h2>Contact Us!</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-12 col-xs-12">
                        <div class="address-info light-blue accent-2">
                            <div class="single-address">
                                <div class="single-address__icon">
                                    <v-icon color="grey lighten-5">mdi-email-outline</v-icon>
                                </div>
                                <div class="single-address__info">
                                    info@gopherprotocol.com
                                </div>
                            </div>
                            <div class="single-address">
                                <div class="single-address__icon">
                                    <v-icon color="grey lighten-5">mdi-map-marker-outline</v-icon>
                                </div>
                                <div class="single-address__info">
                                    <p>GBT Technologies.2500 Broadway, Suite F-125 Santa Monica, CA 90404 USA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="contact-area-form">
                            <form action="#">
                                <div class="row">
                                    <div class="col-md-6 py-0">
                                        <v-text-field
                                                label="Your Name *"
                                                solo
                                                color="light-blue darken-1"
                                        ></v-text-field>
                                    </div>
                                    <div class="col-md-6 py-0">
                                        <v-text-field
                                                label="Your Phone *"
                                                solo
                                                color="light-blue darken-1"
                                        ></v-text-field>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 py-0">
                                        <v-text-field
                                                label="Email *"
                                                solo
                                                color="light-blue darken-1"
                                        ></v-text-field>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 py-0">
                                        <v-textarea
                                                solo
                                                name="input-7-4"
                                                label="message *"
                                                color="light-blue darken-1"
                                        ></v-textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 py-0">
                                        <v-btn
                                                class="white--text"
                                                color="light-blue accent-2"
                                        >Submit</v-btn>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>

<script src="./contact-section.js"></script>
<style lang="stylus" src="./contact-section.styl" scoped></style>
