<template>
    <client-only>
        <div  class="message-input">
            <div class="message-input__header primary--text">
                    <span v-if="fieldsProps[inputType]">{{fieldsProps[inputType].headerText}}</span>
                    <v-switch
                        v-if="showAutocomplete"
                        class="ml-2 my-0"
                        v-model="symptomsAutocomplete"
                        hide-details
                        :ripple="false"
                    ></v-switch>


                <div class="message-input-back"
                     v-if="counterUserMessages >= 2"
                     @click="onBackMessage"
                >
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
                </div>

                <div
                        class="message-input-buttons"
                        v-if="inputType === 'button'"
                >

                    <div class="message-input-buttons__wrap ">
                        <v-btn v-for="button in options"
                               :key="button"
                               class="white--text message-input-buttons__button my-2"
                               color="light-blue accent-2"
                               tile
                               x-large
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

                <div
                        class="message-input-select"
                        v-if="showAutocomplete"
                >
                    <div class="message-input-select__wrap">
                        <v-text-field
                                v-if="!symptomsAutocomplete"
                                label="Start type here..."
                                hint="Please input your symptoms here"
                                persistent-hint
                                solo
                                dense
                                autofocus
                                hide-details="auto"
                                v-model="messageInput"
                                append-icon="send"
                                @click:append="onSendMessage"
                                @keyup.native.enter="onSendMessage"
                        ></v-text-field>


                        <v-autocomplete
                                v-if="symptomsAutocomplete"
                                v-model="selectedItems"
                                :items="options"
                                solo
                                dense
                                multiple
                                deletable-chips
                                hint="Please click on the input field, select your symptoms and press the send button"
                                persistent-hint
                                append-outer-icon="send"
                                clearable
                                hide-selected
                                @click:append-outer="onSendSymptoms"
                                @keyup.native.enter="onSendSymptoms"
                                ref="chatAutocomplete"
                        >
                            <template v-slot:selection="data">
                                <v-chip
                                        v-bind="data.attrs"
                                        :input-value="data.selected"
                                        close
                                        @click="data.select"
                                        @click:close="removeChip(data.item)"
                                >
                                    {{ data.item }}
                                </v-chip>
                            </template>

                        </v-autocomplete>
                    </div>

                </div>
            </div>

            <div class="message-input__footer">
                <p v-if="inputType === 'field'" class="message-input__info  primary--text">Press enter to send</p>
            </div>

        </div>
    </client-only>
</template>

<script src="./message-input.js"></script>
<style lang="stylus" src="./message-input.styl" scoped></style>
