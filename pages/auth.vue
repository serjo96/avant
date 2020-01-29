<template>
    <div class="auth">
        <transition name="fade" mode="out-in">
                <nuxt-child :responseMessage="responseMessage" />
        </transition>
    </div>
</template>

<script src="./auth/auth.js"></script>
<style lang="stylus" src="./auth/auth.styl" scoped></style>
