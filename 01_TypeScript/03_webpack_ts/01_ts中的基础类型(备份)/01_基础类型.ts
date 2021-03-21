(() => {
    //布尔类型
    //let 变量名:数据类型=值
    let flag: boolean = true;
    console.log(flag);
    //数字类型
    let a1: number = 10; // 十进制
    let a2: number = 0b1010; // 二进制
    let a3: number = 0o12; // 八进制
    let a4: number = 0xa; // 十六进制
    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);

    //字符类型
    let name: string = "tom";
    name = "jack";
    // name = 12 // error
    let age: number = 12;
    const info = `My name is ${name}, I am ${age} years old!`;
    console.log(info);

    //null和number
    //默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。
    let u: undefined = undefined;
    let n: null = null;

    //数组
    //方式一； let 变量名:数据类型[] = [值1,值2]
    let list1: number[] = [10, 20, 29];
    console.log(list1);
    //方式二: let 变量名: Array<数据类型> = [值1,值2]
    let list2: Array<number> = [10, 20, 30];
    console.log(list2);

    //元组类型
    //元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string 和 number 类型的元组。
    let list3: [number, string, boolean] = [20, "hello", true];
    console.log(list3);

    //枚举
    enum Color {
        red,
        blue,
        green
    }
    let color: Color = Color.red;
    console.log(color);
    console.log(Color.blue, Color.green, Color.red);
    console.log(Color[1]);
    //小例子，枚举里面可以是中文的数据值，但是不推荐
    enum Gender {
        男,
        女
    }

    //any类型，动态的定义数据的类型
    let str: any = 100;
    str = 'hello';
    console.log(str);
    //当一个数组中要存多个数据，个数不确定，类型不确定的时候，此时可以用any来定义数组
    let arr: any[] = [10, 'hello', true];
    console.log(arr);

    //void类型,代表该方法没有返回值
    function shouMag(): void {
        console.log('void类型没有返回值')
    }
    shouMag();
    //定义一个void类型的变量，但是意义不大
    let vd: void = undefined;

    //object类型
    //定义一个函数，参数是object类型，返回值也是object类型
    function getObj(obj: object): object {
        console.log(obj)
        return {
            name: '喜洋洋',
            age: 20
        }
    }
    console.log(getObj({ name: '沸羊羊', age: 34 }));

    //联合类型（Union Types）表示取值可以为多种类型中的一种
    //需求1: 定义一个一个函数得到一个数字或字符串值的字符串形式值
    function getString(str: number | string): string {
        return str.toString();
    }
    console.log(getString(52));
    //需求2: 定义一个一个函数得到一个数字或字符串值的长度
    function getLength(x: number | string): number {
        return getLength.length;
    }
    console.log(getLength('hello'));

    //类型断言
    /* 
    需求2改进: 定义一个一个函数得到一个数字或字符串值的长度
    类型断言(Type Assertion): 可以用来手动指定一个值的类型
    语法:
    方式一: <类型>值
    方式二: 值 as 类型 
    */
    function getString2(str: number | string): number {
        //如果本身就是number类型就没有必要转换
        if ((<string>str).length) {
            // return (<string>str).length;
            return (str as string).length;
        } else {
            //说明此时是number类型
            return str.toString().length;
        }
    }

    //类型推断: TS会在没有明确的指定类型的时候推测出一个类型
    //有下面2种情况: 1. 定义变量时赋值了, 推断为对应的类型. 2. 定义变量时没有赋值, 推断为any类型
    let text = 100;
    // text = 'hello'; error错误
    let text2;
    text2 = 100;
    text2 = 'hello';
})();
