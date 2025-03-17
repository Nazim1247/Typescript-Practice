// let userName: string;
let userName: Array<string>;

userName = ['Nazim', 'Habib', 'Rahim', 'Alim'];

console.log(userName[0]);

let multipleType: (string|number)[];
multipleType = [1, 'name']

console.log(multipleType[0]);

userName.sort();
console.log(userName);