//使用object构造函数
// let obj = new Object();
// obj.name = '韩立';
// obj.age = '3000';
// console.log(obj); 
//对象字面量
// let obj = {
//     name: '曾芯',
//     age: '18'
// }
// console.log(obj); // {name:'曾芯', age:'18'}

 function Star(uname, age, sex, song) {
            this.uname = uname;
            this.age = age;
            this.sex = sex;
             this.sing = function (song) {
                console.log(song);
            }
        }
        var ldh = new Star('赵雷', 36, '男');
        console.log(ldh.uname);
        console.log(ldh.age);
        console.log(ldh.sex);
        ldh.sing('我记得');
