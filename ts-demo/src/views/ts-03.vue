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

    interface labelledObj {
      label: string,
      size?: number | string
    }

   function printLabel(labelledObj: labelledObj) {
      console.log(labelledObj.label);
    }

    let myObj: labelledObj = { size: '10', label: 'hello world'}
    let myObj1: labelledObj = { label: 'hello world'}
    printLabel(myObj1);

    this.interface1()
    // this.interface2()

  }

  interface1(): void {
    interface Point {
      readonly x: number;
      readonly y: number;
    }

    interface arrTest {
      id: number,
      text?: string,
      [propName: string]: any
    }

    let obj: Point = { x: 33, y: 44}
    let obj1: Point = { x: 3311, y: 4411}
    console.log(obj.x)
    console.log(obj1.x)

    let arr: Array<number> = [3, 34, 4]
    let arr1: ReadonlyArray<any> = [3, 34, '4']
    let arr3: Array<any> = arr1 as Array<any>
    console.log(arr3)

    let arr4: arrTest[];
    arr4 = [{id: 4, text: '5'}, {id: 4, text: '77', text1: 9}]
    console.log(arr4)
  }

  // interface2() {
  //   interface ClockInterface {
  //     currentTime: Date;
  //     setTime(d: Date);
  //   }
  //   let aa: ClockInterface = {currentTime: new Date()}

  //   class Clock implements ClockInterface {
  //     currentTime: Date
  //     setTime(d: Date) {
  //       this.currentTime = d
  //     }
  //     constructor(h: number, m: number)
  //   }
  // }
}
</script>
