<template>
    <div class="chat" :style="{height: getPageHeight}">
        <ChatHeader
                :restartChat="restartChat"
        ></ChatHeader>
        <div class="chat-body" ref="chatBody">
            <div class="container">
                <div class="chat-body__wrapper" v-if="messages.length">
                    <Message
                            v-for="message in formattedMessages"
                            :key="message.messageUID"
                            :groupMessage="message.isGroup"
                            :messageDate="message.date"
                            :messageData="message"
                            :isLoading="message.isLoading"
                    >
                    </Message>
                </div>
            </div>
        </div>
        <ChatFooter
                :sendMessage="onSendMessage"
                :setQuestionType="setQuestionType"
                :inputType="chatSettings.inputType"
                :questionType="questionType"
                :options="chatSettings.options"
                :onBackMessage="onBackMessage"
                :counterUserMessages="counterUserMessages"
        ></ChatFooter>
    </div>
</template>

<script src="./chat.js"></script>
<style lang="scss" src="./chat.scss" scoped></style>
