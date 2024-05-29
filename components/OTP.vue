<script lang="ts" setup>
const signupStore = useSignupStore();
const router = useRouter()

const changeEmail = () => {
    signupStore.resetPassword()
    router.push('/signup')
}

const submit = async () => {
    await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: signupStore.username,
            password: signupStore.password,
        }),
    });
}
</script>

<template>
    <div class="header">
        <h1>Enter OTP</h1>
        <p>Sent OTP on <span class="link"
                  @click="changeEmail">{{ signupStore.email }}</span></p>

        <nuxt-link to="/signup">
            <span class="link">Change email</span>
        </nuxt-link>
    </div>

    <UIOTPInput />

    <button class="btn"
            @click="submit">SUBMIT</button>
</template>

<style></style>