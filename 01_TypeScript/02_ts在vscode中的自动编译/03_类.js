// ts中书写js中的类
(function () {
  //定义一个类
  var Person = /** @class */ (function () {
    //构造器
    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = this.firstName + "_" + this.lastName;
    }
    return Person;
  })();
  //定义一个函数
  function showFullName(person) {
    return person.firstName + "_" + person.lastName;
  }
  //实例化对象
  var person = new Person("诸葛", "孔明");
  console.log(showFullName(person));
})();
