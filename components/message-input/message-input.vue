<template>
    <div id="hu-message-input" class="hu-display-block hu-position-relative enabled">
        <div class="hu-input-overflow-content"></div>
        <div class="hu-input-box hu-height-0 hu-overflow-hidden" style="height: auto;">
            <div class="hu-input-container hu-position-relative menu">
                <div class="hu-input-header">
                    <div class="hu-input-back">
                        <button class="back-button hu-color_contrast hu-border-color_contrast hu-not-selectable hu-s-10"
                                tabindex="2">
                            <span class="hu-left-arrow left-arrow">
                            <svg class="hu-fill_button-text"
                                 xmlns="http://www.w3.org/2000/svg"><path
                                d="M 11.78125 2.28125 L 2.78125 11.28125 L 2.09375 12 L 2.78125 12.71875 L 11.78125 21.71875 L 13.21875 20.28125 L 5.9375 13 L 22 13 L 22 11 L 5.9375 11 L 13.21875 3.71875 Z "></path></svg></span><span
                                class="back-text hu-t-uppercase">Back</span>
                        </button>
                    </div>
                </div>
                <div class="hu-input-body">
                    <div class="hu-input-menu hu-position-relative">
                        <span class="hu-input-menu_help hu-input-menu-info hu-display-block hu-not-selectable hu-s-10 hu-color_contrast hu-t-uppercase">Choose an option</span>
                        <div class="hu-input-menu-buttons hu-display-flex hu-flex-wrap ">

                            <v-btn
                                    class="hu-input-menu_button_text hu-display-flex hu-align-center hu-a-center"
                                    tile
                            >
                                {{inputButtonText}}
                            </v-btn>

                            <v-btn
                                    class="hu-input-menu_button_text hu-display-flex hu-align-center hu-a-center"
                                    tile
                            >
                                {{inputButtonText}}
                            </v-btn>
                        </div>
                    </div>

                    <div class="hu-textarea-heavy empty">
                        <div class="hu-textarea-input-container hu-background-color_textarea-background hu-border-color_textarea-border text">
                            <div class="hu-textarea hu-color_textarea-text" contenteditable="true" tabindex="1"
                                 placeholder="Type here..." suppresscontenteditablewarning="true"
                                 data-gramm_editor="false"></div>
                            <div class="hu-textarea-buttons">
                                <button class="send hu-display-flex" tabindex="2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" x="3650" y="3688">
                                        <path fill=""
                                              d="M1.1 21.757l22.7-9.73L1.1 2.3l.012 7.912 13.623 1.816-13.623 1.817-.01 7.912z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <p class="hu-textarea-footer-info hu-not-selectable hu-s-10 hu-color_contrast hu-t-uppercase">
                            Press enter to send</p></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./message-input.js"></script>
<style lang="stylus" src="./message-input.styl" scoped></style>
