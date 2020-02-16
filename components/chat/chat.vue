<template>
    <div class="chat">
        <div class="chat-header">
            <div class="chat-header__text">
                <h1>Welcome to Hippocrates AI-based medical advisor!</h1>
                <h2>For any feedback please email <a  href="mailto:info@gopherprotocol.com">info@gopherprotocol.com</a></h2>
            </div>

            <div class="chat-header__controls">
                <v-btn
                        class="white--text"
                        color="light-blue accent-2"
                        tile
                >
                    <span>restart chat</span>
                    <v-icon>mdi-restart</v-icon>
                </v-btn>
            </div>
        </div>
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
                    :onBackMessage="onBackMessage"
                    :counterUserMessages="counterUserMessages"
            ></MessageInput>
        </div>
    </div>
</template>

<script src="./chat.js"></script>
<style lang="scss" src="./chat.scss" scoped></style>
