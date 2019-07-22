<template>
  <div class="home">
    <h1>{{$route.name}}</h1>
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
    enum Color {Red = 1, Green = 3, Blue}
    let c = Color[2];
    console.log(typeof c)

    this.warnUser()
    console.log(this.test(), '====')
    console.log(typeof this.test())

  }
  warnUser(): void {
    let unusable: undefined = undefined;
    console.log("This is my warning message " + unusable)
  }

  test(): number {
    let someValue: any = "this is a string";
    // let strLength: number = (someValue as string).length;
    return (<string>someValue).length;
  }
}
</script>
