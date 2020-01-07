<template>
    <header class="header">
        <div class="container">
           <div class="header__container">
               <NuxtLink class="header__logo" to="/">
                   <img src="~/assets/logo.png" alt="">
               </NuxtLink>
               <nav class="nav">
                   <span class="nav__item">
                       <a class="header__link" href="#">Sign in</a>
                   </span>

                   <span class="nav__item">
                       <a class="header__link" href="#">Sign up</a>
                   </span>
               </nav>
           </div>
        </div>
    </header>
</template>

<script src="./header.js"></script>
<style src="./header.styl" lang="stylus" scoped></style>
