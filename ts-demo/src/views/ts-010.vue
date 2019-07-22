<template>
  <div class="home">
    <h1>{{$route.name}}</h1>
    <h3>{{demo}}</h3>
    <js-test propC="a" :propB="propB"></js-test>
    <form-test v-model="cheeck"></form-test>
    <h3>{{cheeck}}</h3>
    <form-test1 v-model="formTest1"></form-test1>
    <h3>{{formTest1}}</h3>
  </div>
</template>

<script lang="js">

import JsTest from '@/components/JsTest.vue'
import FormTest from '@/components/FormTest.vue'
import FormTest1 from '@/components/FormTest1.vue'
import {Person} from '@/js'

export default {
  data() {
    return {
      demo: 'javascript-component',
      propB: new Person(3, 4),
      cheeck: true,
      formTest1: true
    }
  },
  components: {
    JsTest,
    FormTest,
    FormTest1
  },
  provide: {
    aaa: 'aaa'
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      
    }
  },
}
</script>
