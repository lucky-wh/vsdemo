//继承 类与类之间的关系
(() => {
    //定义一个类(父类/超类)
    class Person {
        //定义属性
        name: string;
        age: number;
        gender: string;
        //定义构造方法
        constructor(name: string, age: number, gender: string) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        //定义实例方法
        sayHi(str: string) {
            console.log('我是父类里面的sayHi方法')
            console.log(str);
        }
    }

    //定义一个类(子类)继承上面那个类(父类)
    class Student extends Person {
        constructor(name: string, age: number, gender: string) {
            //调用的是父类的构造方法，使用的是super
            super(name, age, gender);
        }
        //调用父类里面的方法，super
        sayHi() {
            super.sayHi('我是子类里面的sayHi方法')
        }
    }

    //实例化对象
    const person = new Person('喜洋洋', 10, '男');
    const student = new Student('沸羊羊', 5, '男');
    //调用方法
    person.sayHi('hello');
    student.sayHi();

})()