// let user1: {userId: number, userName?: string};
// let user1: {userId: number, userName: string};
// user1 = {userId: 101, userName: 'Nazim'}
// console.log(user1);

// let users: object;
// users = {name: 'Nazim', age: 12}
// console.log(users);



type User = {userId: number, userName: string};

let users: User[];
users = [];

let user1: User;
user1 = {userId: 101, userName: 'Nazim'};
users.push(user1);
// console.log(users);

let user2: User;
user2 = {userId: 102, userName: 'Rakib'};
users.push(user2);

let user3: User;
user3 = {userId: 103, userName: 'Hasib'};
users.push(user3);
// console.log(users);

type RequestType = "GET" | "POST";
let getRequest: RequestType;
getRequest = "GET";

function requestHandle (requestType: RequestType){
    console.log(requestType);
}
requestHandle('GET');