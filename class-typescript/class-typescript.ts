class User{
    userName: string;
    age: number;

    constructor(userName: string, age: number){
        this.userName = userName;
        this.age = age;
    }

    display(): void{
        console.log(this.userName, this.age);
    }
}

let user1 = new User('Nazim Uddin', 25);
user1.display();

let user2 = new User('Nazim', 20);
user2.display();