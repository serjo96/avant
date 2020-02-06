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

            <div class="message__content">
                <div class="typing-spinner">
                    <div class="typing-spinner__ball hu-background-color_accent"></div>
                    <div class="typing-spinner__ball hu-background-color_accent"></div>
                    <div class="typing-spinner__ball hu-background-color_accent"></div>
                </div>
                <div class="message-wrapper">
                    <h3 v-if="messageData.title">{{messageData.title}}</h3>

                    <p class="message__text">{{messageText}}</p>

                    <div v-if="messageData.treatments" class="message__treatments">
                        <h3>Treatments:</h3>
                        <p>{{messageData.treatments}}</p>
                    </div>
                    <div v-if="messageData.prevention" class="message__prevention">
                        <h3>Prevention:</h3>
                        <p>{{messageData.prevention}}</p>
                    </div>
                    <a
                            v-if="messageData.publications"
                            target="_blank"
                            :href="messageData.publications">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./message.js"></script>
<style lang="stylus" src="./message.styl" scoped></style>
