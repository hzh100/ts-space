<template>
  <div class="home">
    <h1>{{$route.name}}</h1>
    <p>{{test1}}</p>
  </div>
</template>

<script lang="ts">
import {aa, _add as addNum} from './main'
import { Component, Vue, Prop } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private test: number = 22
  @Prop() test1!: string;

  data() {
    return {
      test: 111111111
    }
  }
  created() {
    class Person1 {
        // readonly userName: string
        age: number
        constructor(age: number, userName: string) {
          this.age = age;
        }
    }
    console.log(this.test)

    function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
      return names.map(n => o[n]);
    }

    interface Person {
        name: string;
        age: number;
    }
    let person: Person = {
        name: 'Jarid',
        age: 35
    };
    let strings: number[] = pluck(person, ['age']);
    console.log(strings)

    this.ts08()
    console.log(addNum(2, 4))
    console.log(aa)

    console.log(2222222222222222)

    let arr: (number | string )[] = [1, '3', 4, 5]
    console.log(arr.includes(1))
  }

  private ts08() {
    let sym = Symbol('rrr');
    let obj = {
      [sym]: '3434'
    }
    console.log(obj)

    // class Math {
    //   @log
    //   add(a, b) {
    //     return a + b;
    //   }
    // }

    // function log(target, name, descriptor) {
    //   console.log(descriptor.value, '======')
    //   console.log(target, '======')
    //   console.log(name, '======')
    //   var oldValue = descriptor.value;

    //   descriptor.value = function() {
    //     console.log(`Calling ${name} with`, arguments);
    //     return oldValue.apply(this, arguments);
    //   };

    //   return descriptor;
    // }

    // const math = new Math();

    // // passed parameters should get logged now
    // math.add(2, 4);

    class Disposable {
      isDisposed!: boolean; 
      dispose() {
          this.isDisposed = true;
      }
    }

    let membersAge = new Map([
        ['one', 10],
        ['two', 20],
        ['three', 30]
    ]);
    for (let [key, value] of membersAge) {
      console.log(key, value)
    }
  }
}
</script>
