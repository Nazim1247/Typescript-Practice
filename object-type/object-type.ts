// let user1: {userId: number, userName?: string};
// let user1: {userId: number, userName: string};
// user1 = {userId: 101, userName: 'Nazim'}
// console.log(user1);

// let users: object;
// users = {name: 'Nazim', age: 12}
// console.log(users);

let users: object[];
users = [];

let user1: {userId: number, userName: string};
user1 = {userId: 101, userName: 'Nazim'};
users.push(user1);
// console.log(users);

let user2: {userId: number, userName: string};
user2 = {userId: 102, userName: 'Rakib'};
users.push(user2);
// console.log(users);

for(const key in users){
    // console.log(key);
    console.log(users[key]['userName']);
}