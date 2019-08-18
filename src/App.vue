<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'App'
}
</script>

<style>
/*
**  ANIMATIONS
*/

:root {
    --anim-duration: .8s;
    --slide-shift: 5vh;
}

body:not(.no-anim) {
    overflow-x:hidden;
}

body:not(.no-anim) .fade,
body:not(.no-anim) .slide {
    transition-duration: var(--anim-duration);
    transition-property: opacity, transform;
}

body:not(.no-anim) .fade { opacity: 0; }
body:not(.no-anim) .fade.done { opacity: 1; }

body:not(.no-anim) .slide, 
body:not(.no-anim) .slide.up { transform: translateY(var(--slide-shift)); }
body:not(.no-anim) .slide.down { transform: translateY(calc(var(--slide-shift) * -1)); }
body:not(.no-anim) .slide.left { transform: translateX(var(--slide-shift)); }
body:not(.no-anim) .slide.right { transform: translateX(calc(var(--slide-shift) * -1)); }

body:not(.no-anim) .slide.done { transform: translateX(0) translateY(0); }

/*
**  GENERAL STYLES
*/

html, body {
    height: 100%;
    margin: 0;
}

/*
**  SECTIONS
*/

section:nth-child(odd) {
    background-color: #09D9A2;
    color: white;
}

section:nth-child(even) {
    background-color: white;
    color: #09D9A2;
}

section {
    display:flex;
    min-height: 100vh;
    font-family: Muli, sans-serif;
    text-align: center;
}

section > div {
    margin:auto;
    user-select: none;
}
</style>