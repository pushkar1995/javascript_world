// map, filter and reduce

// Question 1 : Return only name of the students in Capital

let students = [  
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "Kaushal", rollNumber: 11, marks: 50 },
    { name: "Dilpreet", rollNumber: 7, marks: 65 }
]

//  let names = [];
//  for (let i = 0; i < students.length; i++) { 
//     names.push(students[i].name.toUpperCase());
//  }

// Using map
const names = students.map((stu) => stu.name.toUpperCase());

console.log(names);

//  Qusetion 2 : Return only details of those who score more than 60

const detail = students.filter((stu) => stu.marks > 60 )

console.log(detail)

// Question 3 : More than 60 marks and rollNumber greater than 15

const details = students.filter((stu) => stu.marks > 60 && stu.rollNumber > 15)

console.log(details)

// Question 4 : Sum of marks of all students

const marksum = students.reduce((acc, curr) => acc + curr.marks, 0)
console.log(marksum)


// Question 5 : Return only names of student who scored more than 60

const studentnames = students.filter((stu) => stu.marks > 60 ).map((stu) => stu.name)
console.log(studentnames)
