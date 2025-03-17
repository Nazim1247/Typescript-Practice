var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 101;
firstName = 'Nazim';
lastName = ' Uddin';
fullName = firstName.concat(lastName);
isActivated = true;
console.log(userId, fullName, isActivated);
console.log(fullName.split(' '));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
function display() {
    console.log('Hi I am Display');
}
display();
