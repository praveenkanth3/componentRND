<template>
    <div class="inputContainer">
        <div class="label">{{ label  }}</div>
        <input class="input" :type="inputType" :placeholder="placeholder" :value="value" @input="onChange($event.target.value)" :maxlength="maxlength"/>
    </div>
</template>

<script>

export default {
    name:'InputBox',

    props:{

        label:{
            type: String,
        },

        placeholder: {
            type: String,
        },

        value: {
            required:true
        },
        
        inputType: {
            type: String,
            default: 'text'
        },

        onChange: {
            type: Function,
            required:true
        },

        maxlength: {
            type: String,
            default: "9999"
        }
    },
    methods:{
        test(){
            const a =[];
            for(let i =0; i< 10;i++) {
                a.push(i);
            }
        }
    }
}

</script>

<style>

.inputContainer {
    display: flex;
    column-gap: 10px;
}

.input{
    width: 150px;
    border-radius: 10px;
    height: 30px;
    border: 1px solid gray;
}

.input:focus-visible {
    outline: none;
}

.label {
    font-weight: bold;
    text-align: center;
    padding: 5px;
}

</style>