<template>
  <div class="hello">
    <input type="checkbox" :checked="checked" v-model="checked" :disabled="checked" @change="change">
  </div>
</template>

<script lang="js">

export default {
  data() {
    return {
      checked: null
    }
  },
  props: {
    value: {
      type:Boolean
    },
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.checked = this.value
    },
    change(e){
      console.log(e.target.checked)
      this.$emit('input', e.target.checked)
    }
  },
}
</script>

<style scoped lang="stylus">

</style>
