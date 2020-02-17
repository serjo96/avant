<template>
    <div class="chat">
        <ChatHeader></ChatHeader>
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
        <div class="chat-footer">
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
