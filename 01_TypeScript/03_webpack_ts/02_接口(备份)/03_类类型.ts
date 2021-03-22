//类 类型：类的类型可以通过接口来实现
(() => {

    //定义一个接口
    interface IFly {
        fiy();
    }

    //定义一个类，该类的类型就是上面那个定义的接口
    class Person implements IFly {
        //实现接口中的方法
        fiy() {
            console.log("hello 我是实现了一个接口的类方法")
        }
    }
    //实例化对象
    const person = new Person();
    //调用类中的方法
    person.fiy();

    //定义一个接口
    interface ISwim {
        seim();
    }

    //定义一个类，一个类可以实现多个接口
    class Person2 implements IFly, ISwim {
        fiy() {
            console.log('一个类可以实现多个接口' + '1')
        }
        seim() {
            console.log('一个类可以实现多个接口' + '2')
        }
    }
    //实例化对象
    const person2 = new Person2();
    person2.seim();
    person2.fiy();

    //类可以通过接口的方式来定义当前这个类的类型；
    //类可以实现一个或者多个接口，但是接口内的方法都要全部实现

    //定义一个接口继承多个接口
    interface IMyFlyAndSwin extends ISwim, IFly {

    }
    //定义一个类继承上面这个接口
    class Person3 implements IMyFlyAndSwin {
        fiy() {
            console.log('一个接口也可以继承多个接口')
        }
        seim() {
            console.log('但是实现这个接口的类就要重写所有接口的方法')
        }
    }
    //实例化对象
    const person3 = new Person3();
    person3.fiy();
    person3.seim();

    //总结：接口和接口之间叫继承(使用的关键字是extends) ， 类和接口之间叫实现(使用的关键字是implements)
})()