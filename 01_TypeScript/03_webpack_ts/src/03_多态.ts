//多态：父类的引用指向了子类的对象，不同类型的对象针对不同类型的方法，产生不同的行为
(() => {
    class Animal {
        //定义属性
        name: string;
        //定义构造方法
        constructor(name: string) {
            this.name = name;
        }
        //定义实例方法
        run(distance: number = 0) {
            console.log(this.name + '跑了' + distance + '远');
        }
    }

    //定义子类
    class Dog extends Animal {
        //c重写=父类构造方法
        constructor(name: string) {
            super(name);
        }
        //重写父类中的方法
        run(distance: number = 5) {
            super.run(distance);
        }
    }

    //定义子类
    class Pig extends Animal {
        //c重写=父类构造方法
        constructor(name: string) {
            super(name);
        }
        //重写父类中的方法
        run(distance: number = 10) {
            super.run(distance);
        }
    }

    //实例化对象
    const ani: Animal = new Animal('动物');
    ani.run();
    const dog: Dog = new Dog('小狗');
    dog.run();
    const pig: Pig = new Pig('小猪');
    pig.run();

    console.log('==========================');
    //父类型创建子类对象
    const dog1: Animal = new Dog('大狗');
    dog1.run();
    const pig1: Animal = new Pig('大猪');
    pig1.run();

    console.log('==========================');
    //该函数的参数类型是Animal类型的
    function showRun(ani: Animal) {
        ani.run();
    }
    showRun(dog1);
    showRun(pig1);
})()