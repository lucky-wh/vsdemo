// ts中书写js中的类
(() => {
  // 定义一个接口
  interface IPerson {
    firstName: string; //姓氏
    lastName: string; //名字
  }

  //定义一个类
  class Person {
    firstName: string; //姓氏
    lastName: string; //名字
    fullName: string;
    //构造器
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = this.firstName + "_" + this.lastName;
    }
  }

  //定义一个函数
  function showFullName(person: IPerson) {
    return person.firstName + "_" + person.lastName;
  }

  //实例化对象
  const person = new Person("诸葛", "孔明");

  console.log(showFullName(person));
})();
