<template>
    <div class="right__container flex justify-center items-center flex-col">
        <SvgRightCircle1 />
        <SvgRightCircle2 />
        <slot name="svg"></slot>
        <slot name="desc"></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.right__container {
    background-color: #6172F3;
    padding: auto;

    * {
        position: absolute;
    }
}
</style>