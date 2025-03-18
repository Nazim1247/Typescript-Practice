// let user1: {userId: number, userName?: string};
// let user1: {userId: number, userName: string};
// user1 = {userId: 101, userName: 'Nazim'}
// console.log(user1);
var users;
users = [];
var user1;
user1 = { userId: 101, userName: 'Nazim' };
users.push(user1);
// console.log(users);
var user2;
user2 = { userId: 102, userName: 'Rakib' };
users.push(user2);
var user3;
user3 = { userId: 103, userName: 'Hasib' };
users.push(user3);
var getRequest;
getRequest = "GET";
function requestHandle(requestType) {
    console.log(requestType);
}
requestHandle('GET');
