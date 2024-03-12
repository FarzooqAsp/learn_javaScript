// OOP 
// Object(collection of properties & methods)
// parts of oop
// constructor function, prototypes, classes, instances(new,this)
// object literal=>{}
// this => is current context
//...........................
//constructor function is new key word that provide new instance
function user(username,age,salary){
    this.username = username;
    this.age = age;
    this.salary = salary;
    this.greeting = function(){
        console.log(this);
    }
    return this
}
const one =new user('ali',12,23)
// console.log(one);
// one.greeting();

function createUser(name,score){
    this.name = name;
    this.score = score
    return this
}
createUser.prototype.increment = function(){
    console.log(++this.score);
}
createUser.prototype.printme = function(){
    console.log(`score is ${this.score}`);
}
const chai = new createUser('chai',25)
// console.log(chai);
// chai.increment()
// chai.printme()
// ...........................................................
//prototype
// basically use to access the properties & also to create properties like above e.g
// increment and printme methods
// *******************************************************
// call&this
function user(username){
    this.username = username
    console.log('cah');
    return this
}
function setusername(username,email,pass){
    user.call(this,username)
    this.email = email,
    this.pass = pass
}
const cha = new setusername('ali','ali@','123');
console.log(cha);

// *****************************************************
// class
class User_{
    constructor(name,email,pass){
        this.name = name;
        this.email = email;
        this.pass = pass
        return this
    }
    encryptPass(){
        return `${this.pass}abc`
    }
    changeUsername(){
        return `${this.name.toUpperCase()}`
    }    
}
const e = new User_('ali','ali@.comm',123)
console.log(e.encryptPass());
// .....inheritance
class student{
    constructor(stname,email,pass){
        this.stname = stname;
        this.email = email;
        this.pass = pass
        return this
    }
    changename(){
        return `${this.stname.toUpperCase()}`
    }
    changepass(){
        return `${this.pass}~!|?|abc!-`
    }

}
class teacher extends student{
    constructor(stname,email,pass){
        super(stname,email,pass)
    }
}
const st = new student('ali','ali@','123')
const tea= new teacher('faraz','faraz@.com','123')
console.log(tea.changepass());
// ...................................................+++++++++++++++++++++++++................

