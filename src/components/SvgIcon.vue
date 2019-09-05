<template>
    <svg
        :class="`icon icon-${name}`"
        :title="title || alt"
    >
        <use
            :xlink:href="`/static/assets/symbol-defs.svg#icon-${name}`"
        ></use>
    </svg>
</template>

<script>
export default {
    name: 'svg-icon',
    props: {
        title: String,
        name: String
    },
    computed: {
        /**
         * Icon name with first letter capitalized
         */
        alt: function() {
            return this.name.charAt(0).toUpperCase() + this.name.slice(1)
        }
    }
}
</script>

<style scoped>
.icon {
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: white;
    fill: white;
    padding: 1vh 2.5vw;
}
</style>