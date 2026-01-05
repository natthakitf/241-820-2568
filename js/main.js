/*/*
array
*/

/*let ages = [25, 30, 35, 40, 45]
console.log('Ages:', ages)

let fruits = ['apple', 'banana', 'cherry']
console.log('Fruits:', fruits)
fruits.push('mango')
console.log('Fruits after push:', fruits)
console.log('First fruit:', fruits.length)

for (let i = 0; i <= fruits.length; i++) {
    console.log(`Fruit at index ${i}:`, fruits[i])
} */

/*
object
*/

/*let student = [ {
    age: 30,
    name: 'John',
    grade: 'A'
}, {
    age: 25,
    name: 'jane',
    grade: 'B'
} ]
for (let i = 0; i <= student.length; i++) {
    console.log("student " + (i + 1) + ":");
console.log('name:', student[i].name);
console.log('age:', student[i].age);
console.log('grade:', student[i].grade);
}

student.push({
    age: 28,
    name: 'Mike',
    grade: 'C'
});
console.log('Students after push:', student[student.length - 1 ]);

student.pop();
console.log('Removed last student. Current students:', student); */

/*
fuction
*/

/*let score1 = 10
let score2 = 80

function calculatetion_grade(score) {
    if (score >= 80 ) {
        grade = 'A'
    } else if (score >= 70 ) {
        grade = 'B'
    } else if (score >= 60 ) {
        grade = 'C'
    } else if (score >= 50 ) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade
}

// เรียกใช้ฟังก์ชัน calculate_grade เพื่อหาค่าเกรดจากคะแนนที่กำหนด
let grade1 = calculatetion_grade(score1)
let grade2 = calculatetion_grade(score2)
console.log('Score1: ' + score1 + ', Grade: ' + grade1)
console.log('Score2: ' + score2 + ', Grade: ' + grade2) */

/*
array
*/

/*let scores = [90, 80, 70, 60, 60];

for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i + 1}: ${scores[i]}`);
}

scores = scores.map((s) => {
    return s - 10;
})

scores.forEach((s) => {
console.log(`Score:` , s);
}) */

// map,filter

/*
array
*/

/*let scores = [90, 80, 70, 60, 50];
let newScores = []

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}
let newScores = scores.filter(function(scores) {
    return scores >= 70;
})

newScores.forEach((ns) => {
    console.log('new score:', + ns);
}) */

/*
object functions
*/

let students = [
    {name: "John", age: 20, grade: "A"},
    {name: "Jane", age: 22, grade: "B"},
    {name: "Jim", age: 21, grade: "C"}
]
console.log('Student', students[0]);

let student = students.find((s) => {
    if (s.name === "Jim") {
        return s;
    }
})

let doublescoreStudents = students.map((s) => {
    s.age = s.age * 2;
    return s;
});

let highGradeStudents = students.filter((s) => {
    return s.grade === "A";
});

console.log('Student ',student);
console.log('Double Score Students:', doublescoreStudents);
console.log('High Grade Students:', highGradeStudents);