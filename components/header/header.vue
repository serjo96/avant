<template>
    <header class="header">
        <div class="container">
           <div class="header__container">
               <NuxtLink class="header__logo" to="/">
                   <img src="~/assets/logo.png" alt="">
               </NuxtLink>
               <nav>
                   <ul>
                       <li>
                           <a class="header__link" href="#">Sign in</a>
                       </li>
                   </ul>
               </nav>
           </div>
        </div>
    </header>
</template>

<script src="./header.js"></script>
<style src="./header.styl" lang="stylus" scoped></style>
