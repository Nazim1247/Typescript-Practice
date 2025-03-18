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

class Student extends User{
    studentId: number;

    constructor(userName: string, age: number, studentId: number){
        super(userName, age);
        this.studentId = studentId;
        
    }
    display(): void{
        console.log(this.userName, this.age, this.studentId);
    }
}

let student1 = new Student('Rakib', 32, 10101);
student1.display();

// let user1 = new User('Nazim Uddin', 25);
// user1.display();

// let user2 = new User('Nazim', 20);
// user2.display();