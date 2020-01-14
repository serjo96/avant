<template>
    <div :class="messageClassName">
        <div class="message__margin">
            <div :class="messageInfoClassName">
                <div
                        class="message-info__avatar-wrapper"
                        v-if="outgoingMessage"
                >
                    <div
                            class="message-info__avatar"
                            :style="`background-image: url('${messageData.avatar}');`"
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
                    <p class="message__text">{{messageData.message}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./message.js"></script>
<style lang="stylus" src="./message.styl" scoped></style>
