<template>
  <div class="home">
    <h1>{{$route.name}}</h1>
    <h3>{{demo}}</h3>
  </div>
</template>

<script lang="js">

export default {
  data() {
    return {
      demo: 'javascript'
    }
  },
  created() {
    this.init()
    this.render()
  },
  methods: {
    init() {
      @test()
      class MyTestableClass {
        // ...
      }
      function test() {
        return function testable(target) {
          target.isTestable = true;
        }
      }
      console.log(MyTestableClass.prototype)
      
      console.log(MyTestableClass.isTestable )
    
    },
    render() {
      class Person {
        constructor(name, age) {
          this.name = name;
          this.age = age;
          this.sex1 = null
        }
        say() {
          console.log(this.name + '今年'+ this.age + '岁了');
        }
        get sex() {
          return this.sex1
        }
        set sex(val) {
          this.sex1 = 'set sex' + val
        }
      }
      let xiaoli = new Person('小丽', 18)
      xiaoli.say()
      xiaoli.sex = 234234
      console.log('%c xiaoli.sex=======', 'color: blue', xiaoli.sex);
      
      console.log(Person.prototype);
      
      console.log(Person == Person.prototype.constructor);


      function Cat() {
        this.name = Cat.name
      }
      Cat.prototype.say = function () {
        console.log('this is a cat' + this.name);
        
      }

      let aaa =  new Cat('aa')
      console.log(Cat.name);
      
      const MyClass = class Me {
        constructor() {}
        getClassName() {
          return Me.prototype;
        }
      };

      let inst = new MyClass();
      console.log(
        inst.getClassName()
      );
      console.log(Person.name);
      console.log(MyClass.name);

      class Logger {
        constructor() {
          this.printName = this.printName.bind(this)
        }
        printName(name = 'there') {
          this.print(`Hello ${name}`);
        }

        print(text) {
          console.log(text);
        }
      }

      const logger = new Logger();
      
      const { printName } = logger;

      printName(); 

      const addNum = function  add(x, y) {
        return x + y
      }
      console.log(addNum.name, '========');
      
      
      
    }
  },
}
</script>
