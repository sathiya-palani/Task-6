// Write a “person” class to hold all the details.


class Person{
    constructor(name, age, gender, state, country){
        this . name = name;
        this . age = age;
        this . gender = gender;
        this . state = state;
        this . country = country;
     } 
}

let person = new Person("Sathiya", 25, "Female", "Tamil nadu", "India");

console.log(`
${person.name}
${person.age}
${person.gender}
${person.state}
${person.country}
`)