<template>
    <div class="chat-page">
        <section class="chat-page__container">
            <div class="container">
                <div class="chat-page__header">
                    <h1>Welcome to Hippocrates AI-based medical advisor!</h1>
                    <h2>For any feedback please email <a  href="mailto:info@gopherprotocol.com">info@gopherprotocol.com</a></h2>
                </div>
                <Chat />
<!--                <object type="text/html" id="bot" data="https://landbot.io/u/H-25531-0WYHN5OX5DBFTPIG/index.html" width="100%" style="height: 938px;"></object>-->
            </div>
        </section>
    </div>
</template>

<script>
	import Chat from "~/components/chat/chat.vue";
	export default {
		name: "chat",
        components: {
			Chat
        },
		middleware: 'authenticated'
	}
</script>

<style lang="stylus" scoped>
    .chat-page {
        background: #fff
        width: 100%;
        height: 100%
        padding: 30px 0
        &__container {
            margin: 0 auto
            @media screen and (min-width: 425px) {
                width: 80%;
                max-width: 700px;
            }
            @media screen and (min-width: 768px) {
                width: 80%;
            }

            @media screen and (min-width: 1024px) {
                width: 60%;
            }
        }
    }

    .landbot__bot {
        width: 100%;
        height: 300px;
    }

    .LandbotFrameWidget {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    .LandbotFrameWidget .LandbotFrame, .LandbotFrameWidget .LandbotFrame__frame__content {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
</style>
