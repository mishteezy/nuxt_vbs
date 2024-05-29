<script lang="ts">
import Login from './components/Login.vue';
import OTP from './components/OTP.vue';
import Signup from './components/Signup.vue';
import LoginSVG from './components/svg/right/Login'
import SignupSVG from './components/svg/right/Signup'
import OTPSVG from './components/svg/right/OTP'

export default defineComponent({
    data() {
        return {
            DescMapper: {
                '/':
                {
                    desc1: 'Connect with any device.',
                    desc2: 'Everything you need is an internet connection.'
                },
                '/signup':
                {
                    desc1: 'Join us!',
                    desc2: 'Just go through the boring process of creating an account.'
                },
                '/otp':
                {
                    desc1: 'It\'s just OTP verification',
                    desc2: 'You are one step away from recovering your password.'
                }
            }
        }
    },
    computed: {
        component() {
            switch (this.$route.path) {
                case '/':
                    return Login
                case '/signup':
                    return Signup
                case '/otp':
                    return OTP
            }
        },
        picture() {
            switch (this.$route.path) {
                case '/':
                    return LoginSVG
                case '/signup':
                    return SignupSVG
                case '/otp':
                    return OTPSVG
            }
        }
    }
})
</script>

<template>
    <div class="app__container grid grid-cols-2 self-stretch">
        <layout-left>
            <component :is='component'></component>
        </layout-left>
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