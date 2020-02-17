<template>
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
                    @click="restartChat"
            >
                <span>restart chat</span>
                <v-icon>mdi-restart</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script src="./chat-header.js"></script>
<style src="./chat-header.scss" lang="scss" scoped></style>
