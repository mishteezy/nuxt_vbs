<template>
    <div class="left__container flex justify-center items-center flex-col">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.left__container {
    background-color: #F5F8FF;
}

.header {
    width: 477px;
    margin-bottom: 25px;

    h1 {
        height: 38px;
        font-size: 40px;
        font-weight: 700;
        line-height: 24px;
    }

    p {
        color: #71717A;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        height: 30px;
    }

    span {
        font-weight: 700;
    }
}

.with-email__container {
    margin-bottom: 25px;

    .line {
        width: 120px;
        height: 1px;
        background-color: #71717A;
    }

    .text {
        color: #71717A;
        width: 213px;
        height: 25px;
        text-align: center;
    }
}

.no-account {
    margin-top: 20px;
}

.link {
    font-weight: 500;
    cursor: pointer;
    color: #8098F9;
}
</style>