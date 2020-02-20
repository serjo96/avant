<template>
    <div :class="messageClassName">
        <div class="message__margin">
            <div :class="messageInfoClassName">
                <div
                        class="message-info__avatar-wrapper"
                        v-if="!incomingMessage"
                >
                    <div
                            class="message-info__avatar"
                            :style="`background-image: url('${avatar}');`"
                    ></div>
                </div>
                <div class="message-info__time primary--text">{{transformDate}}</div>
            </div>

            <div class="message__body">
                <div class="message-wrapper">
                    <TypingSpinner :isLoading="isLoading"></TypingSpinner>

                    <div class="message__container">
                        <h3 class="message__title" v-if="messageData.title">{{messageData.title}}</h3>


                            <p v-if="messageData.message"
                               class="message__text"
                               v-html="$md.render(messageData.message)"
                            ></p>


                        <div class="collapse">
                            <input class="collapse__input" type="checkbox" :id="messageData.title">
                            <div class="collapse__content">
                                <div v-if="messageData.description" class="message__content message__content--description">
                                    <h3>Description</h3>
                                    <p v-html="$md.render(messageData.description)"></p>
                                </div>


                                <div v-if="messageData.treatments" class="message__content message__content--treatments">
                                    <h3>Treatments</h3>
                                    <p v-html="$md.render(messageData.treatments)"></p>
                                </div>

                                <div v-if="messageData.prevention" class="message__content message__content--prevention">
                                    <h3>Prevention</h3>
                                    <p v-html="$md.render(messageData.prevention)"></p>
                                </div>

                                <a
                                    v-if="messageData.publications"
                                    target="_blank"
                                    :href="messageData.publications">
                                    {{messageData.publications}}
                                </a>

                                <div v-if="showCollapseItems" class="collapse__shadow"></div>

                            </div>
                            <v-btn
                                    v-if="showCollapseItems"
                                    color="primary"
                                    class="px-0"
                                    outlined
                                    x-small
                                    @click="toggleButtonName"
                            >
                                <label class="collapse__label" :for="messageData.title">{{collapseButtonText}}</label>
                            </v-btn>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script src="./message.js"></script>
<style lang="stylus" src="./message.styl" scoped></style>
