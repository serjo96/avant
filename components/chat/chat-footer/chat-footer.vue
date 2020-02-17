<template>
    <div class="chat-footer">
        <MessageInput
                :sendMessage="sendMessage"
                :inputType="inputType"
                :options="options"
                :onBackMessage="onBackMessage"
                :counterUserMessages="counterUserMessages"
        ></MessageInput>
    </div>
</template>

<script src="./chat-footer.js"></script>
<style src="./chat-footer.scss" lang="scss" scoped></style>
