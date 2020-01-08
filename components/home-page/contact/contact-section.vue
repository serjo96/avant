<template>
    <section class="contact-section">
        <div id="contact_form" class="container contact-container">
            <v-row justify="space-between">
                <v-col cols="12" sm="5">
                    <div class="contact-form">
                        <h3 class="contact-title">Contact us</h3>
                        <div class="contact-form__subtitle">Use this form to get in touch with us, we are available 24/7.</div>
                        <v-form class="contact-form__form">
                            <v-text-field
                                    label="First Name *"
                                    outlined
                                    color="light-blue darken-1"
                            ></v-text-field>

                            <v-text-field
                                    label="Last Name *"
                                    outlined
                                    color="light-blue darken-1"
                            ></v-text-field>

                            <v-text-field
                                    label="Email *"
                                    outlined
                                    color="light-blue darken-1"
                            ></v-text-field>
                            <v-textarea
                                    outlined
                                    name="input-7-4"
                                    label="message *"
                                    color="light-blue darken-1"
                            ></v-textarea>

                            <v-btn
                                    outlined
                                    block
                                    color="light-blue darken-1"
                                    class="mt-2"
                            >Submit</v-btn>
                        </v-form>

                    </div>
                </v-col>

                <v-col cols="12" sm="5">
                    <div class="contact-info">
                        <h3 class="contact-title">Important Info</h3>
                        <ul class="contact-list pa-0">
                            <li class="contact-list__item">Email: info@gopherprotocol.com</li>
                            <li class="contact-list__item">GBT Technologies.2500 Broadway, Suite F-125 Santa Monica, CA 90404 USA</li>
                        </ul>

                        <div class="contact-info__map">
                            <iframe width="100%" height="420px" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=2500%20Broadway%2C%20Suite%20F-125%20Santa%20Monica%2090404%20USA+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/coordinates.html">gps coordinates finder</a></iframe>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
    </section>
</template>

<script src="./contact-section.js"></script>
<style lang="stylus" src="./contact-section.styl" scoped></style>
