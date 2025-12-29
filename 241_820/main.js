/*
&& และ
|| หรือ
! ไม่ใช่
*/
let number1 = 5
let number2 = 8

// true && true = true

let condition = !(number1 >= 3 || number2 >= 10)
console.log("condition: " + condition)

let age = 30
let gender = "ชาย"

// true && true = true
if (age >= 20 && gender == "ชาย") {
    console.log("เป็นชายที่มีอายุ 20 ปีขึ้นไป")
}

let number =20
if (number % 2 != 0) {
    console.log("เลขคี่")
}

/*
loop statement
for
while
*/

let counter = -5
while (counter < 10) {
    console.log("Hello world ")
    //counter=counter + 1
    counter += 1
}

for (let i = 0; i < 10; i = i + 1) {
    console.log("hello world from for loop ")
}

// string, number, boolean, object, array

//1. String
let FirstName = "John Doe";
const idcard = '123';
//2. Number
let agee = 30;
let height = 5.9;

//3. Boolean
let isStudent = false;

FirstName = "test";
console.log("My Name is:", FirstName, 'and I am', age, 'years old.');

/*
+ บวก
- ลบ
* คูณ
/ หาร
% หารเอาเศษ modulo
*/

let number5 = 'test';
let number6 = 'xxx';

let result = number5 + number6;
console.log("ผลบวก =", result);