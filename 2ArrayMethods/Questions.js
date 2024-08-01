// map, filter and reduce : O/P Based Questions
// Quesstion 1 : Return only name of students in Captial

let students = [  
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "Kaushal", rollNumber: 11, marks: 50 },
    { name: "Dilpreet", rollNumber: 7, marks: 65 }
 ]

 let names = [];
 for (let i = 0; i < students.length; i++) { 
    names.push(students[i].name.toUpperCase());
 }

 console.log(names);
