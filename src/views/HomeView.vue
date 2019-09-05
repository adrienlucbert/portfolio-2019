<template>
    <section class="fade">
        <div>
            <h1 ref="title">
                <span>I am</span>
                <span id="name" @click="animate">Adrien</span>
                <span ref="dot">.</span>
            </h1>
            <div class="social fade slide down">
                <a href="https://github.com/adrienlucbert" target="_blank">
                    <svg-icon name="github"/>
                </a>
                <a href="https://www.linkedin.com/in/adrien-lucbert/" target="_blank">
                    <svg-icon name="linkedin"/>
                </a>
                <a href="https://twitter.com/AdrienLucbert" target="_blank">
                    <svg-icon name="twitter"/>
                </a>
                <a href="mailto:adrien.lucbert@epitech.eu">
                    <svg-icon name="email"/>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Home',
    methods: {
        animate: function() {
            const dot = this.$refs.dot;
            if (dot.classList.contains('animate')) return;
            dot.classList.add('animate');
            setTimeout(() => {
                dot.classList.remove('animate');
            }, 600);
        }
    }
}
</script>

<style scoped>
section > div {
    /* Avoid word-wrap in title */
    width: 60%;
}

h1 {
    font-size: 6.5vw;
    font-weight: 200;
    margin-bottom: .2em;
    position: relative;
}

h1 span#name {
    font-weight: 700;
    font-family: Karla, sans-serif;
    cursor: pointer;
}

h1 span:last-child {
    position: absolute;
    bottom: 0;
}

@keyframes bounce {
    0% {bottom: 0%;}
    5% {bottom: -3%;}
    50% {bottom: 30%;}
    100% {bottom: 0%;}
}

h1 span:last-child.animate {
    animation-name:bounce;
    animation-duration:.6s;
    animation-fill-mode:forwards;
}

.social {
    font-size: 8vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.social a {
    text-decoration: none;
    transition: all .2s ease-in-out;
}

.social a:hover, a:focus {
    transform: scale(1.15);
    outline: 0px solid transparent;
    transition: all .2s ease-in-out;
}

@media screen and (max-width: 720px) {
    section > div {
        width: 100%;
    }

    h1 {
        font-size: 12vw;
    }

    .social {
        font-size: 12vw;
    }
}
</style>