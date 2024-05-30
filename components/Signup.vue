<script lang="ts" setup>
import { useSignup } from './use/Signup.ts'

const {
    userRef,
    emailRef,
    passwordRef,
    confirmPasswordRef,
    signup,
    isFormValid
} = useSignup()

const store = useSignupStore();

onBeforeRouteLeave((to, from, next) => {
    if (isFormValid() && to.path === '/') {
        const answer = confirm('Данные могут быть утеряны. Покинуть страницу?')
        if (!answer) return false
    }
});
</script>

<template>
    <div class="header">
        <h1>Create your account</h1>
        <p>Unlock all Features!!</p>
    </div>

    <UIInput icon="user"
             placeholder="Username"
             v-model="userRef" />

    <UIInput icon="email"
             placeholder="Email"
             v-model="emailRef" />

    <UIInput icon="shield"
             placeholder="Password"
             :eye="true"
             v-model="passwordRef" />

    <UIInput icon="shield"
             placeholder="Confirm Password"
             :eye="true"
             v-model="confirmPasswordRef" />

    <button class="btn"
            :disabled="!isFormValid"
            @click="signup">SIGN UP</button>

    <div class="no-account">You have account?
        <nuxt-link to="/">
            <span class="link">Login now</span>
        </nuxt-link>
    </div>
</template>

<style lang="">

</style>