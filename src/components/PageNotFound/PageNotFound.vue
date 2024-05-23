<template>
    <div class="body">
        <img src="../../constants/404Error.svg" class="error-svg" />
        <h1>Uff...Page Not Found</h1>
        <div tabindex="0" @click="onClickGoHome" class="goto-home">Go To Home</div>
    </div>

</template>
<script>
export default {
    name: 'PageNotFound',

    methods: {
        onClickGoHome() {
            this.$router.push({ name: 'LandingPage'})
        }
    }
}
</script>

<style>

.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.goto-home {
    color: blue;
    cursor:pointer;
}

.error-svg {
    height: 400px;
}

</style>