<template>
    <div  class="message-input">
                <div class="message-input-header">
                    <div class="message-input-back">
                        <v-btn
                                class="message-input-back__button"
                                color="primary"
                                fab
                                elevation="0"
                                dark
                                x-small
                               >
                            <v-icon>mdi-arrow-left</v-icon>
                        </v-btn>
                        <div class="message-input-back__text primary--text">Back</div>
                    </div>
                </div>
                <div class="message-input__body">
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
                            class="message-input-datapicker"
                            v-if="inputType === 'datepicker'"
                    >
                        <span class="message-input__info primary--text">Select your birthday</span>
                        <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                        v-model="computedDateFormatted"
                                        prepend-inner-icon="event"
                                        placeholder="mm-dd-yyyy"
                                        v-on="on"
                                        readonly
                                        hide-details="auto"
                                        solo
                                        append-icon="send"
                                        @click:append="onSendDate"
                                        @keyup.native.enter="onSendDate"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                    ref="picker"
                                    v-model="date"
                                    :max="new Date().toISOString().substr(0, 10)"
                                    min="1920-01-01"
                                    @change="save"
                            ></v-date-picker>
                        </v-menu>
                    </div>

                </div>
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script src="./message-input.js"></script>
<style lang="stylus" src="./message-input.styl" scoped></style>
