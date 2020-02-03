<template>
    <div class="auth__form">
        <div class="reset-password">
            <div class="reset-password__title">Reset password</div>

            <component
                    :is="resetPasswordComponent"
            ></component>
        </div>
    </div>
</template>

<script src="./resetPassword.js"></script>

<style lang="stylus" scoped>
    .reset-password {
        &__buck-navigate{
            margin-left: 0
        }

        &__title{
            font-weight: 200
            font-size: 2.5rem;
            letter-spacing: 0.05rem;
            margin-bottom: 10px
        }
    }

</style>
