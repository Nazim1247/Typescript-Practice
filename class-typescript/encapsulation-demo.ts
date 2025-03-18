class User{
    readonly userName: string;
    // public userName: string;
    // protected userName: string;
    // private userName: string;
    public age: number;

    constructor(userName: string, age: number){
        this.userName = userName;
        this.age = age;
    }

    display(): void{
        console.log(this.userName, this.age);
    }
}

class Student extends User{
    private studentId: number;

    constructor(userName: string, age: number, studentId: number){
        super(userName, age);
        this.studentId = studentId;
        
    }
    display(): void{
        console.log(this.userName, this.age, this.studentId);
    }
    setStudentId(studentId: number): void{
        this.studentId = studentId;
    }

    getStudentId(): number{
        return this.studentId
    }
}

let student1 = new Student('Rakib', 32, 10101);
student1.setStudentId(10202);
console.log(student1.getStudentId());
// student1.display();

let user1 = new User('Nazim Uddin', 25);
// user1.userName = 'Hasib';
console.log(user1.userName)
// user1.display();

// console.log(user1);

// let user1 = new User('Nazim Uddin', 25);
// user1.display();

// let user2 = new User('Nazim', 20);
// user2.display();