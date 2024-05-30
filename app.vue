<script lang="ts" setup>
import { DescMapper } from './misc/descMapper'
import SvgLogin from './components/svg/Login.vue'
import SvgSignup from './components/svg/Login.vue'
import SvgOTP from './components/svg/Login.vue'

const route = useRoute()

const picture = computed(() => {
    switch (route.path) {
        case '/':
            return SvgLogin
        case '/signup':
            return SvgSignup
        case '/otp':
            return SvgOTP
    }
})
</script>

<template>
    <div class="app__container grid grid-cols-2 self-stretch">
        <layout-left></layout-left>
        <layout-right>
            <template v-slot:svg>
                <component :is='picture'></component>
            </template>
            <template v-slot:desc>
                <div class="desc">
                    <h3>{{ DescMapper[$route.path].desc1 }}</h3>
                    <p>{{ DescMapper[$route.path].desc2 }}</p>
                </div>
            </template>
        </layout-right>
    </div>
</template>

<style scoped>
.app__container {
    height: 100vh;
}

.desc {
    width: 643px;
    color: #E0EAFF;
    display: flex;
    align-items: center;
    flex-direction: column;

    h3 {
        font-weight: 700;
        top: 340px
    }

    p {
        top: 360px
    }
}
</style>