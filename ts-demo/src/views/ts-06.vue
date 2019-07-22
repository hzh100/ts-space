<!--
 * @Description: typescript styudy lesson 06
 * @Author: hzh
 * @Date: 2019-07-15 16:09:40
 * @LastDate: 2019-07-18 17:04:11
 -->
<template>
  <div class="home">
    <h1>{{$route.name}}</h1>
    <!-- <hello-world /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  created() {

    function identity<T>(arg: T[]): T[] {
      return arg
    }
    console.log(typeof identity(['2']))


    interface Lengthwise {
        length: number;
    }

    function loggingIdentity<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);  // Now we know it has a .length property, so no more error
        return arg;
    }

    function getProperty<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }

    let x = { a: 1, b: 2, c: 3, d: 4 };
    console.log(getProperty(x, 'd'))
  }
}
</script>
