(() => {
  //str的参数类型是string
  function sayHi(sty: string) {
    return "你好" + sty;
  }
  let text = "小甜甜";
  console.log(sayHi(text));
})();

//如果ts的代码中直接书写js代码，那么在hrml中引入ts文件，在谷歌浏览器中可以直接使用
//如果ts的代码中有ts的代码，那么就需要把这个ts文件编译成js代码，在html文件中引入js代码来使用
