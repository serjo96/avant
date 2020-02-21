<template>
    <div class="chat-footer">
        <div class="container">
            <div class="chat-footer__container">
                <MessageInput
                        :sendMessage="sendMessage"
                        :inputType="inputType"
                        :options="options"
                        :onBackMessage="onBackMessage"
                        :counterUserMessages="counterUserMessages"
                ></MessageInput>
            </div>
        </div>
    </div>
</template>

<script src="./chat-footer.js"></script>
<style src="./chat-footer.scss" lang="scss" scoped></style>
