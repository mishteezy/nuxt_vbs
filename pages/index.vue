<script lang="ts" setup>
import { useLogin } from '../use/Login'

const {
    usernameRef,
    passwordRef,
    login,
    isFormValid
} = useLogin()
</script>

<template>
    <div class="header">
        <h1>Login to your Account</h1>
    </div>
    <div class="with-email__container flex items-center">
        <div class="line"></div>
        <span class="text">with email</span>
        <div class="line"></div>
    </div>

    <UIInput icon="user"
             placeholder="User"
             v-model="usernameRef" />

    <UIInput icon="shield"
             placeholder="Password"
             :eye="true"
             v-model="passwordRef" />

    <button class="btn"
            :disabled="!isFormValid"
            @click="login">LOG IN</button>

    <div class="no-account">Don't have account?
        <nuxt-link to="/signup">
            <span class="link">Create an account</span>
        </nuxt-link>
    </div>
</template>