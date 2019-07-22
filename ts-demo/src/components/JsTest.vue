<template>
  <div class="hello">
    <h1>js-components</h1>
    <p>{{propC}}</p>
    <h3>aaa{{aaa}}</h3>
  </div>
</template>

<script lang="js">
import {Person} from '@/js'

export default {
  data() {
    return {
      demo: 'javascript'
    }
  },
  inject: ['aaa'],
  props: {
    propA: {
      type: String,
      default: '88888'
    },
    propB: {
      type: Person
    },
    propC:{
      type:[Array, String],
      default:()=>{
        return ['a','b']
      },
      required: true,
      validator:(value) => {
        console.log(value);
        
        return [
          'a',
          'b'
        ].indexOf(value) !== -1
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      
    },
  },
}
</script>

<style scoped lang="stylus">

</style>
