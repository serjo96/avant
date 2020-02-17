<template>
    <div class="chat">
        <ChatHeader
                :restartChat="restartChat"
        ></ChatHeader>
        <div class="chat-body" ref="chatBody">
            <div class="chat-body__wrapper" v-if="messages.length">
                <Message
                        v-for="(message, index) in messages"
                        :key="index"
                        :groupMessage="message.isGroup"
                        :messageDate="message.date"
                        :messageData="message"
                        :isLoading="message.isLoading"
                >
                </Message>
            </div>
        </div>
        <ChatFooter
                :sendMessage="sendMessage"
                :inputType="chatSettings.inputType"
                :options="chatSettings.options"
                :onBackMessage="onBackMessage"
                :counterUserMessages="counterUserMessages"
        ></ChatFooter>
    </div>
</template>

<script src="./chat.js"></script>
<style lang="scss" src="./chat.scss" scoped></style>
