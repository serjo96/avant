<template>
    <div class="chat">
        <div class="chat__wrapper">
            <Message
                    v-for="(message, index) in messages"
                    :key="index"
                    :groupMessage="validateMessages(message.id)"
                    :messageType="message.type"
                    :messageData="message"
            >
            </Message>
<!--            <MessageInput-->
<!--                    inputButtonText="Great"-->
<!--            ></MessageInput>-->
        </div>
    </div>
</template>

<script src="./chat.js"></script>
<style src="./chat.styl" lang="stylus" scoped></style>
