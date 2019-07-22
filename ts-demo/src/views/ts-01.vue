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
    let arr: any[] = ['99l', 3]

    // 枚举
    enum color {Red, Green, Blue}
    let c = color
    console.log(c)

    var uname: null = null
    console.log(uname)

    var score1:number = 50;
    var score2:number = 42.50
    var sum = score1 + score2 
    console.log("名字: "+uname) 
    console.log("第一个科目成绩: "+score1) 
    console.log("第二个科目成绩: "+score2) 
    console.log("总成绩: "+sum)

    var a:number = 2;   // 二进制 10 
    var b:number = 3;   // 二进制 11
        
    var result; 
            
    result = (a & b);     
    console.log("(a & b) => ",result)
                
    result = (a | b);          
    console.log("(a | b) => ",result)  
            
    result = (a ^ b);  
    console.log("(a ^ b) => ",result);
        
    result = (~b); 
    console.log("(~b) => ",result);
    
    result = (a << b); 
    console.log("(a << b) => ",result); 
    
    result = (a >> b); 
    console.log("(a >> b) => ",result);
    
    result = (a >>> 1); 
    console.log("(a >>> 1) => ",result);


    var mytuple = [10, "Runoob"]; // 创建元组
    console.log(mytuple) 

    // var j:any; 
    var nums:number[] = [1001,1002,1003,1004] 
    
    // for(let j in nums) { 
    //     console.log(nums[j]) 
    // }

    class PrinterClass { 
      doPrint():void {
          console.log("父类的 doPrint() 方法。") 
      } 
    } 
    
    class StringPrinter extends PrinterClass { 
      doPrint():void { 
          super.doPrint() // 调用父类的函数
          console.log("子类的 doPrint()方法。")
      }
      static disp():void { 
          console.log("num 值为 0000000") 
      } 
    }

    var obj = new StringPrinter();
    obj.doPrint();
    StringPrinter.disp()
  }
}
</script>
