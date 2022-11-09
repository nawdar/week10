// for (let i = 0; i < 1000000 ; i++) {
// console.log(i);


// }

// for (let i =1 ; i <11; i++) {
//     console.log(2,i);
// }
// let i = 1;
// while (i <11){
// console.log(math.pow(2, 1))
// }


// let input = ""
// do {
//  input = prompt("what is your name?");

// }

// while(!isNaN(Number(input)));

// alert("Hello" + input);
// alert(`Hello ${input}`)


// let fruits = ['Apple', 'Banana'];
// fruits.push("orange");
// fruits.pop();
// fruits.unshift("Mango");
// // fruits.shift();
// console.log(fruits);
// for (let i = 0; i < fruits.length; i++)
// {
//     console.log
// }

// const person = {
//     name:['Bob', 'Smith'],
//     age:32,
//     gender:'male',
//     hobbies :['music', 'skiing']
// }

// console.log(`my name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.hobbies[0]} ${person.hobbies[1]}`)

let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};
let students = [student1, student2, student3];
for (let item of students){
if (item.program === "Cit" && item.GPA > 3){
console.log(item)
counter = counter +1 ; 
}
}
console.log(counter);