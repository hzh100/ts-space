<template>
  <div class="home">
    <h1>{{$route.name}}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

declare enum Enum {
  A = 1,
  B,
  C = 2
}
@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  created() {
    enum Str {
      None,
      Read    = 1 << 1,
      Write   = 1 << 2,
      ReadWrite  = Read | Write,
      // computed member
      G = "123".length
    }
    console.log(Str)

    interface Named {
        name: string;
    }

    let x: Named;
    // y's inferred type is { name: string; location: string; }
    let y = { name: 'Alice', location: 'Seattle' };
    console.log((x = y, x.name = 'erwer', x), y)



    class names implements Named {
      name: string = '234234'
    }
    let myName = new names()
    console.log(myName instanceof names)

  }
}
</script>
