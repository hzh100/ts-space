<template>
  <div class="hello">
    <input type="checkbox" :checked="checked" @change="change">
  </div>
</template>

<script lang="js">

export default {
  data() {
    return {
    }
  },
  model:{
    prop:'checked',
    event:'change'
  },
  props: {
    checked:{
      type:Boolean
    }
  },
  created() {
  },
  methods: {
    change(e){
      this.$emit('change', e.target.checked)
    }
  },
}
</script>

<style scoped lang="stylus">

</style>
