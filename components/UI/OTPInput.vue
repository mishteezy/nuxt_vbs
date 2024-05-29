<template>
    <div class="input__container">
        <input v-for="_ in 6"
               placeholder="-"
               maxlength="1">
    </div>
</template>

<script lang="ts">
export default {
}
</script>

<style scoped>
.input__container {
    display: flex;
    align-items: center;
    gap: 10px;

    input {
        width: 64px;
        height: 64px;
        background: #8098F91A;
        border-radius: 10px;
        border: 2px solid #8098F980;
        font-size: 18px;
        font-weight: 400;
        line-height: 20px;
        text-align: center;

        &:focus {
            outline: none;
        }
    }
}
</style>