let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;

userId = 101;
firstName = 'Nazim';
lastName = ' Uddin';
fullName = firstName.concat(lastName)
isActivated = true;

console.log(userId,fullName,isActivated);
console.log(fullName.split(' '));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

function display(): void{
    console.log('Hi I am Display');
}
display();