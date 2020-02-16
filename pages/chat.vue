<template>
    <div class="chat-page">
        <section class="chat-page__container">
            <div class="container">
                <Chat />
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
</style>
