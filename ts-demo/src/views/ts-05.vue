<!--
 * @Description: 
 * @Author: hzh
 * @Date: 2019-07-15 16:09:39
 * @LastDate: 2019-07-22 15:34:00
 -->

<template>
  <div class="home">
    <h1>{{$route.name}}</h1>
    <input type="text" v-model="aaa">
    <property-decorator :propA="aaa" @change="btnChangeHandle" />
    
    <h3>{{hello}}</h3>
  </div>
</template>



<script lang="ts">
import { Component, Vue, Inject, Provide } from 'vue-property-decorator';
import PropertyDecorator from '@/components/PropertyDecorator.vue'; // @ is an alias to /src

import globalMixin from '@/mixins/global'

import {Getter, Mutation} from 'vuex-class'

@Component({
  components: {
    PropertyDecorator,
  },
  mixins: [globalMixin]
})

export default class Home extends Vue {
  @Getter('name') name!:string

  private aaa!: string
  private propA: number = 1
  @Provide() foo = 'foo'
  @Provide('bar') bar = 'bar'
  data() {
    return {
      aaa: '000',
    }
  }
  
  created() {
    // let myAdd: (x: number, y: number) => number = (x: number, y: number) => x + y
    // console.log(myAdd(3, 4))

    // let aa: number = 0
    // let bol: boolean = false
    // let bol1: undefined = undefined
    // console.log(typeof !bol1)

    console.log(this.name, 'vuex name');
    

    this.comHandle()
  }
  comHandle() {

  }

  btnChangeHandle(option: number) {
    console.log(option, '++++++');
    
    this.aaa = String(option)
    // this.aaa = option.toString()
  }
}
</script>
