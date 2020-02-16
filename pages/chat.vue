<template>
    <div class="chat-page" :style="{height: chatHeight}">
        <div class="container">
            <Chat />
        </div>
    </div>
</template>

<script src="./chat/chat.js"></script>

<style lang="stylus" scoped>
    .chat-page {
        background: #fff
        width: 100%;
        height: calc(100% - 370px )
        padding: 30px 0
        overflow: hidden
        @media (max-width: 450px) {
            padding: 0
        }
        .container {
            height: 100%
        }
    }
</style>
