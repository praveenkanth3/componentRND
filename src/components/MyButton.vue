<template>
  <div>
    <button class="button is-primary" @click="onClick">
      <!-- @slot default inner button content -->
      <slot></slot>
    </button>
    <div v-if="elsejd">dssfsfs</div>
  </div>
</template>

<script>

export default {
  name: 'my-button',

  methods: {
    onClick() {
      /**
       * Click event
       *
       * @event click
       */
      this.$emit('click')
    },
  },
  
  computed: {
      elsejd() {
        if(this.isslot) {
          return Math.random() * 10
        } else {
          return Math.random() * 30
        }
      },

      test() {
        return Math.random() * 100
      }
  },
  
  watch: {
      abs:{
        handler() {
          console.log('cccc')
        }
      }
  },

  props: {
    isslot:{
      type: Boolean
    }
  },
}
</script>

<style scoped>
button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>
