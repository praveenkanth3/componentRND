<template>
    <div class="checkbox curP iflex flexT posrel clr8">
        <input
            type="checkbox"
            :id="id"
            @change="handleChange"
            :checked="isChecked"
            class="curP hide_checkbox"
            ref="checkbox"
            data-zsqa="checkbox"
        />
        <span class="siqico-chkbx ifont16" :class="{ 'siqico-chkbox-checked': isChecked, 'err-action-fld': hasError }"></span>
        <label v-if="text || $scopedSlots.default" :for="id" class="curP pL5 lineN">
            <span v-if="text">
                {{ text }}
            </span>
            
            <slot v-else />
        </label>
    </div>
</template>

<script>

export default {
    name: 'CheckBox',

    props: {
        text : {
            type : String,
            default : ""
        },

        onChange : {
            type : Function,
            required : true
        },

        isChecked : {
            type : Boolean,
            default : false
        },

        id : {
            type : String,
            default : () => {}
        },
        
        hasError : {
            type : Boolean,
            default: false
        }
    },

    computed:{
        test() {
            return Math.random() * 100        
        }
    },
    
    methods: {
        handleChange(event) {
            event.preventDefault();
            this.onChange(!this.isChecked);
        }
    }
}
</script>
<style lang="less">
// // @import (reference) "../../styles/common.less";

// .hide_checkbox {
//     position: absolute;
//     left: -2px;
//     height: 16px;
//     width: 16px;
//     margin: 0;
//     cursor: pointer;
//     opacity: 0;
// }

// .err-action-fld {
//   color : var(--siqcw-error-color);
// }
</style>