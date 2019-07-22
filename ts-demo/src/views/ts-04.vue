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
  private testData!: string;
  private data() {
    return {
      testData: '234243'
    }
  }


  created() {
    console.log(this.testData)
    class Greeter {
      greeting: string;
      constructor(message: string, str?: string) {
        console.log(...arguments)
        this.greeting = message
      }
      greet() {
        console.log(this.greeting)
        return "Hello, " + this.greeting;
      }
    }

    class Man extends Greeter {
      constructor(name: string) {
        super(name)
        this.greeting = name
      }
      say() {
        console.log('你好' + this.greeting)
      }
    }

    let greeter = new Greeter("world", 'hello');
    greeter.greet()

    let man = new Man('杰克111')
    // man.say()


    class Animal {
         name: string;
        constructor(name: string) { this.name = name; }
    }

    class Rhino extends Animal {
        constructor() { super('Rhino'); }
        getName() {
          console.log(this.name, '======')
        }
    }

    class Employee {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    let animal = new Animal("Goat");
    let rhino = new Rhino();
    let employee = new Employee("Bob");

    rhino.getName()
    console.log(typeof Animal, '=====')
  }
}
</script>
