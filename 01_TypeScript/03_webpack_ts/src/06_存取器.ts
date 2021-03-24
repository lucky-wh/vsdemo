// TypeScript 支持通过 getters/setters 来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
(() => {
    class Person {
        firstName: string = 'A'
        lastName: string = 'B'

        //获取器
        get fullName() {
            return this.firstName + '-' + this.lastName
        }
        //设置器
        set fullName(value) {
            const names = value.split('-')
            this.firstName = names[0]
            this.lastName = names[1]
        }
    }

    const p = new Person()
    console.log(p.fullName)

    p.firstName = 'C'
    p.lastName = 'D'
    console.log(p.fullName)

    p.fullName = 'E-F'
    console.log(p.firstName, p.lastName)
})()