const person = {
    name    : 'aloha',
    age     : 25,
    gender  : '남자'
}

// 객체의 구조 분해 할당
const { name, age, ...rest } = person 

const personName = person.name
const personAge = person.age
const personGender = person.gender

console.log(name);
console.log(age);
console.log(rest);