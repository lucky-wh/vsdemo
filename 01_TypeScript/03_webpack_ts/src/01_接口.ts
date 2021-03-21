// 接口是对象的状态(属性)和行为(方法)的抽象(描述)
//接口: 是一种约束，是一种类型，是一种能力
(() => {
    /*
    需求: 创建人的对象, 需要对人的属性进行一定的约束
    id是number类型, 必须有, 只读的
    name是string类型, 必须有
    age是number类型, 必须有
    sex是string类型, 可以没有
    */
    //定义一个接口，该接口作为person对象的类型使用，约束该对象中数据的类型
    interface IPerson {
        //id是只读的number类型
        readonly id: number //readonly 只读的
        name: string,
        age: number,
        //sex是可以没有的string类型
        sex?: string // ? 可有可无的
    }

    //定义一个对象，该对象的类型就是IPerson
    const person: IPerson = {
        id: 1,
        name: '喜洋洋',
        age: 18,
        sex: '女'
    }


})()