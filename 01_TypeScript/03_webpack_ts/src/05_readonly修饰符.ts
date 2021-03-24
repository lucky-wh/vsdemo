//readonly:关键字、只读属性，对类中属性进行修饰后该属性成员，就不能在外部被随意修改
//只读属性必须在声明时或构造函数里被初始化。

(() => {
    class Person {
        readonly name: string = 'abc'
        constructor(name: string) {
            this.name = name
        }
    }

    const john = new Person('John')
    // john.name = 'peter' // error
})()