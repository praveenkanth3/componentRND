<template>
    <div class="selectBoxContainer">
        <select v-model="selectedValue" @change="() => onChange(selectedValue)">
            <option value="" disabled selected hidden>{{ placeholder }}</option>
            <option v-for="dist in lists" :key="dist" :value="dist">{{ dist }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'SelectBox',

    props:{
        placeholder:{
            type: String,
            required: false
        },

        defaultValue: {
            type: String,
            default: ''
        },

        onChange: {
            type: Function,
            default: () => {}
        },

        lists:{
            type: Array,
            required: true
        }
    },

    data() {
        let vm = this;
        return {
            selectedValue: vm.defaultValue
        }
    }
}

</script>

<style>

select{
    width: 150px;
    height: 30px;
    border-radius: 10px;
}
</style>