<template>
    <div class="chat-page">
        <section class="module landbot">
            <div class="container">
            <div class="landbot__header">
                <div class="section-title text-center">
                    <h2>Welcome in our chat!</h2>
                </div>
            </div>
            <div class="landbot__bot">
                <script src="https://static.landbot.io/landbot-widget/landbot-widget-1.0.0.js"></script>
                <div id="landbot-1545150687890" class="landbot__bot">
                    <div class="LandbotFrameWidget">
                        <div class="LandbotFrame">
                            <iframe class="LandbotFrame__frame__content" frameborder="0" width="100%" height="100%" src="https://landbot.io/u/H-113274-ZDK8S4BDEWLLBO4U/index.html" name="+dNj4J4GKoM"></iframe>
                        </div>
                    </div>
                </div>
                <script>
					var myLandbotFrame = new LandbotFrameWidget({
						container: '#landbot-1545150687890',
						index: 'https://landbot.io/u/H-113274-ZDK8S4BDEWLLBO4U/index.html',
					});
                </script>
            </div>
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
