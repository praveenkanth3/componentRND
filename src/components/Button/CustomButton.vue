<template>

    <div class='btnContainer'>
        <button @click="onClickBtn" :class="customClass">{{ label }}</button>
    </div>

</template>

<script>

export default {
    name: 'CustomButton',

    props: {
        label: {
            type: String,
            required: true,
        },

        onClickBtn: {
            type: Function,
            required: true,
        },

        customClass: {
            type: String,
            required: false
        }
    }
}

</script>

<style>

button {
    width:fit-content;
}

.btnContainer {
    display: flex;
    justify-content: center;
}

</style>