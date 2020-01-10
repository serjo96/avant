<template>
    <div class="chat-page">
        <section class="module landbot">
            <div class="container">
            <div class="landbot__header">
                <div class="section-title text-center">
                    <h2>Welcome in our chat!</h2>
                </div>
            </div>
                <object type="text/html" id="bot" data="https://landbot.io/u/H-25531-0WYHN5OX5DBFTPIG/index.html" width="100%" style="height: 938px;"></object>
            </div>
        </section>
    </div>
</template>

<script>
	export default {
		name: "chat"
	}
</script>

<style lang="stylus" scoped>
    .chat-page{
        background: #fff
        padding: 30px 0
        height: 100%
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
