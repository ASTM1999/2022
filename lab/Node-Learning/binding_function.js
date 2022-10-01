// //Arrow function ใช้ไม่ต่างจาก function ทั่วไป (ถ้าเราไม่ต่องการใช้ this หรือ super) ในฟังก์ชัน
// //แต่ถ้าหากอยากใช้ this ใน Arrow function ล่ะก็ต้องมาดูนี่เลย vvvv


// class User {
//     constructor(){
//         this.name = 'John';
//     }
// }

// let sayHi_normal = function(){
//     console.log("Hi "+ this.name);
// }

// let sayHi_Arrow = () => {
//     console.log("Hi " + this.name)
// }

// let user = new User()
// let sayHi1 = sayHi_normal.bind(user)
// let sayHi2 = sayHi_Arrow.bind(user)


// sayHi1()
// sayHi2()

const canon = {
    text: 'Cannon Text ',
    print(){
        console.log(this.text)
    }
}

const hp = {
    text: 'HP InkJet',
}

console.log(canon.print())
console.log(canon.print.bind(hp)())


const sayHi = (gender, age, name) => {
    console.log(`Hey guys, mynameis: ${name} i'm a ${gender} years old ${age}`)
}

sayHi('male', 12, 'ToTo')
sayHi('male', 22, 'DekDe')
sayHi('male', 25, 'Dekmaide')
