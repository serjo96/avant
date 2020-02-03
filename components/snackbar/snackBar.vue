<template>
    <v-snackbar
            v-model="show"
            :color="snackBar.color"
            :timeout="snackBar.timeout"
    >
        {{ snackBar.message }}
        <v-btn
                dark
                flat
                @click="show = false"
        >
            Close
        </v-btn>
    </v-snackbar>
</template>

<script src="./snackBar.js"></script>
<style lang="stylus" scoped></style>
