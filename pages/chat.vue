<template>
    <div class="chat-page">
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
        height: 100%
        padding-top: 30px
        overflow: hidden
        @media (max-width: 450px) {
            padding: 0
        }
        .container {
            height: 100%
        }
    }
</style>
