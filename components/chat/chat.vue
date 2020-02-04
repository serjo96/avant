<template>
    <div class="chat">
        <div class="chat__wrapper" v-if="messages.length">
            <Message
                    v-for="(message, index) in messages"
                    :key="index"
                    :groupMessage="validateMessages()"
                    messageType="incoming"
                    :messageData="message"
            >
            </Message>
            <v-text-field
                    label="Start type here..."
                    solo
                    v-model="messageInput"
                    append-icon="send"
                    @click:append="sendMessage"
            ></v-text-field>

<!--            <MessageInput-->
<!--                    inputButtonText="Great"-->
<!--            ></MessageInput>-->
        </div>
    </div>
</template>

<script src="./chat.js"></script>
<style src="./chat.styl" lang="stylus" scoped></style>
