class User{
    constructor(name,pass){
        this.name = name;
        this.pass = pass
    }
    get pass(){
        return `${this._pass}an`
    }
    set pass(value){
        this._pass = value
    }
}
const chai = new User('ali','123')
console.log(chai);