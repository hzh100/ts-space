<template>
  <div class="home">
    <button class="btn" v-for="(item, key) in btnList" :key="key" @click="tap(item)">tyopescript {{item.path}}</button>
    <hello-world :msg="msg"></hello-world>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import {btnGroup} from '@/constant'
import { State, Getter, Mutation } from "vuex-class";

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  btnList:any = btnGroup
  msg: string = 'Hello world components'
  @Getter private name!: string
  @State private age!: number
  @Mutation private set_name!: (name: string) => void
  @Mutation private set_age!: (age: number) => void

  tap (option:any) {
    this.$router.push(`ts-0${option.path}`)
  }
  
  created() {
    console.log(this.name);
    this.set_name('98798700000')
    console.log(this.name);
    this.set_age(98798700000)
    console.log(this.age, '------');

    
  }
}
</script>

<style lang="stylus" scoped>
  .btn
    background #cccccc
    padding 10px
    margin 10px
    border none 
    border-radius 4px
</style>

