//类：可以理解为模板，通过模板可以实例化对象
// 面向对象的编程思想
(() => {
    //ts中类的定义及使用
    class Person {
        //类中定义属性
        name: string;
        age: number;
        gender: string
        //定义构造函数，为将来实例化对象的时候可以直接对属性进行赋值
        constructor(name: string, age: number, gender: string) {
            //更新对象中类型的数据
            this.name = name;
            this.age = age;
            this.gender = gender;
        }

        //定义实例方法
        sayHi(str: string) {
            console.log('我是类中的实例方法 名字是=${this.name} 年龄是=${this.age} 性别为=${this.gender}' + str)
        }
    }
    //实例化对象
    const person = new Person('喜洋洋', 10, '男');
    person.sayHi('我是传入的参数')

})()