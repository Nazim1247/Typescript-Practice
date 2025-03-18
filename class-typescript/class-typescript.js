var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log(this.userName, this.age);
    };
    return User;
}());
var user1 = new User('Nazim Uddin', 25);
user1.display();
var user2 = new User('Nazim', 20);
user2.display();
