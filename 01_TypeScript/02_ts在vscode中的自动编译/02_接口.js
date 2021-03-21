//接口：一种能力，一种约束
(function () {
    //创建一个输出姓名的方法
    function showFullName(person) {
        return person.firstName + "_" + person.lastName;
    }
    //定义一个对象
    var person = {
        firstName: "东方",
        lastName: "不败",
    };
    console.log(showFullName(person));
})();
