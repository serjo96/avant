<template>
    <div  class="message-input">
<!--                <div class="hu-input-header">-->
<!--                    <div class="hu-input-back">-->
<!--                        <button class="back-button hu-color_contrast hu-border-color_contrast hu-not-selectable hu-s-10"-->
<!--                                tabindex="2">-->
<!--                            <span class="hu-left-arrow left-arrow">-->
<!--                            <svg class="hu-fill_button-text"-->
<!--                                 xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                d="M 11.78125 2.28125 L 2.78125 11.28125 L 2.09375 12 L 2.78125 12.71875 L 11.78125 21.71875 L 13.21875 20.28125 L 5.9375 13 L 22 13 L 22 11 L 5.9375 11 L 13.21875 3.71875 Z "></path></svg></span><span-->
<!--                                class="back-text hu-t-uppercase">Back</span>-->
<!--                        </button>-->
<!--                    </div>-->
<!--                </div>-->
                <div class="message-input__body">
                    <div
                            class="message-input-buttons"
                            v-if="inputType === 'button'"
                    >
                        <span class="message-input__info primary--text">Choose an option</span>
                        <div class="message-input-buttons__wrap ">

                            <v-btn
                                    v-for="button in options"
                                    :key="button"
                                    class="white--text message-input-buttons__button"
                                    color="light-blue accent-2"
                                    tile
                                    x-large
                                    width="32%"
                                    @click="sendMessage(button)"
                            >
                                {{button}}
                            </v-btn>

                        </div>
                    </div>

                    <div
                        class="message-input-textarea"
                        v-if="inputType === 'field'"
                    >
                        <v-text-field
                                label="Start type here..."
                                solo
                                autofocus
                                hide-details="auto"
                                v-model="messageInput"
                                append-icon="send"
                                @click:append="onSendMessage"
                                @keyup.native.enter="onSendMessage"
                        ></v-text-field>
                        <p class="message-input__info  primary--text">Press enter to send</p>
                    </div>
                </div>
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script src="./message-input.js"></script>
<style lang="stylus" src="./message-input.styl" scoped></style>
