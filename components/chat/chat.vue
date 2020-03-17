<template>
    <div class="chat" :style="{height: getPageHeight}">
        <ChatHeader
                :restartChat="handlerRestartChat"
        ></ChatHeader>
        <div class="chat-body" ref="chatBody">
            <div class="container">
                <div class="chat-body__wrapper" v-if="messages.length">
                    <Fragment v-for="message in formattedMessages"
                              :key="message.messageUID">
                        <Message
                                v-if="!message.delimiter"
                                :groupMessage="message.isGroup"
                                :messageDate="message.date"
                                :messageData="message"
                                :isLoading="message.isLoading"
                        >
                        </Message>
                        <MessagesDelimiter
                                v-if="message.delimiter"
                                :messageDate="message.date"
                        ></MessagesDelimiter>
                    </Fragment>

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
