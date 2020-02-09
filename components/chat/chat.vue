<template>
    <div class="chat">
        <div class="chat__wrapper" v-if="messages.length">
            <Message
                    v-for="(message, index) in messages"
                    :key="index"
                    :groupMessage="message.isGroup"
                    :messageDate="message.date"
                    :messageData="message"
                    :isLoading="message.isLoading"
            >
            </Message>

            <MessageInput
                    :sendMessage="sendMessage"
                    :inputType="chatSettings.inputType"
                    :options="chatSettings.options"
            ></MessageInput>
        </div>
    </div>
</template>

<script src="./chat.js"></script>
<style lang="scss" src="./chat.scss" scoped></style>
