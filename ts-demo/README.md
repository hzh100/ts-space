
# typescript 关进词 

  ```base
    type  类型别名
    interface
    declare
    extends
    keyof
    implements





  ````

## +, -, ~ 一元运算符应用于常数枚举表达式
## +, -, *, /, %, <<, >>, >>>, &, |, ^ 二元运算符，常数枚举表达式做为其一个操作对象。 若常数枚举表达式求值后为NaN或Infinity，则会在编译阶段报错。

  interface:接口只声明成员方法，不做实现。
  implements 实现， 可以实现多个接口

  class:类声明并实现方法。
    extends 继承， 只能继承一个类

  实现多少继承
    class A extends B implements C,D,E

  ###
    1. 属性或参数中使用 ？：表示该属性或参数为可选项

    2. 属性或参数中使用 ！：表示强制解析（告诉typescript编译器，这里一定有值），常用于vue-decorator中的@Prop

    3. 变量后使用 ！：表示类型推断排除null、undefined