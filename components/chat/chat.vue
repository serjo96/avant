<template>
    <div class="chat">
        <div class="chat__wrapper" v-if="messages.length">
            <Message
                    v-for="(message, index) in messages"
                    :key="index"
                    :groupMessage="validateMessages()"
                    :messageDate="message.date"
                    :messageData="message"
            >
            </Message>

            <MessageInput
                    :sendMessage="sendMessage"
            ></MessageInput>
        </div>
    </div>
</template>

<script src="./chat.js"></script>
<style src="./chat.styl" lang="stylus" scoped></style>
