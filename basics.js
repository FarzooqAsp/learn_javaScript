// console.log("hellow");
"use strict"; //treat all js code as newer version

//******************variables
/*prefer not to use VAR because it's not follow functional scope and block scope
and a scope is => { } & also var not provide limit again again use same namespaces 
and like 300 same name variables declares & change on one all variables data
change*/
const id = 1234;
let accountEmail = "farzooq@gmail.com";
let accountPassword = "2323332"
// accontCity = "bengaluru";
// console.log(id);
// console.table([id,accountEmail,accountEmail,accontCity])

//********************dataTypes
/*
********primitive(7 types) => call by value use(stack memory)
String = ""
number => range 2^50
Boolean => true/false

BigInt
const number = 12321323231232132314355n;
console.log(typeof(number));
null => standalone value

undefined

Symbol => use to identify unique
let number = Symbol('123');
let anotherNumber = Symbol('123');
console.log(number===anotherNumber);

typeof

**********Non primitive => call by reference use(heap memory)
array,objecs,functions
*/


//**********************conversion&operations
/*during conversion to Number null return 0 also false return 0 true return 1*/
let score;
// console.log(score);
// let valueInNumber = Number(score);
// console.log((typeof score));
// console.log((typeof(score)));
// console.log((typeof(valueInNumber)));
// console.log(valueInNumber);
//////////operations
// arithmatic operations console.log(2+"2") like

//**********************Comparisons
//its just 1>0 or 0>=null

//************************* Memory Management
// *******Stack
let Name = "alimosa";
let anotherName = Name;
Name = "durrani"
// console.log(Name);
// console.log(anotherName);
// **********heap
let userOne = {
    name : "ali",
    email : "farzooq@google.com",
    programmer : "dev"
}
let userTwo = userOne;
userTwo.email = "durrani@google.com";
// console.log(userOne.email);
// console.log(userTwo.email);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//*********************************Strings */
const name = "alilskfjkasflksaf";
// console.log(name.__proto__);
const name2 = new String('           alimosa ist hebe st            ');
// console.log(name2.charCodeAt(0));
// console.log(name.slice(5,0));
const final = name2.split('');
// console.log(final);
// console.log(final[3]);
let index = 5;
// console.log(`the index of ${index} return the character ${name.at(index)}`);
// console.log(name2.charAt(4));
// console.log(name2.charCodeAt(5));
// console.log(name2.codePointAt(5));
// console.log(name.concat(' ',name2));
// console.log(name2.isWellFormed());
// console.log(name2.trimRight());
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ******************************************************Number & Maths
const score_ = new Number(100.000);
// console.log(typeof score_.toString());
// console.log(typeof(score_));
// console.log(0.3-0.2===0.1); //is only handle by epsilon(which find the smallest no big from 1)
// console.log(isFinite(23477234332874834390999787234.78927340842714^50));
// console.log(parseFloat("2343.234absd")); //it get not to float reject char and same for int
// console.log(score_.toExponential());
// console.log(score_.toFixed(3));
// console.log(score_.toLocaleString('en-PK',{style:'currency',currency:'PKR'}));
// console.log(score_.toPrecision(4)); //ans=>1000.000 => if you declare 2 (toPrecision(2)) send only 2 int values from whole to use if you sure how many digits you want
// console.log(score_.valueOf()); //find the assigned value
//+++++++++++++++++++Maths
// console.log(Math.abs(-1)); //hower & see the functionalities
// console.log(Math.ceil(4.9));
// console.log(Math.floor(4.9));
// console.log(Math.round(4.5));
// console.log(Math.max(2,3,4,5));
// console.log(Math.min(2,3,4,5));
// let understand random
const max = 6;
const min = 1;
// console.log(Math.random());
// console.log((Math.random()*10)+1); //every no shift to right & in b/w 1 to 10
// console.log(Math.floor(Math.random()*10)+1); //only provide int no
// console.log(Math.floor(Math.random()*(max-min + 1))+min); //to handle max&min by self
// +++++++++++++++++++++++++++++++++++++++++++++
// **********************************Date&Times
let mydate = new Date();
// console.log(mydate);
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
let newdate = new Date(2023,1,23);
// console.log(newdate.toDateString()); 
// +++++++++++++++++++++++++++++++++++++++++++++++++
// **************************************Arrays...................
// const array = new Array('ali','mosa','kazim');
// console.log(typeof array);
// console.log(array.push('durrani'));
// console.log(array.pop());
// console.log(array.unshift('Mr.'));
// console.log(array.shift());
// console.log(array.includes('mosa'));
// console.log(array.indexOf('ali'));
// const newarray = array.join(); //convert array to string
// console.log(array);
// console.log(typeof newarray);
// const arr = [1,2,3,4,5,6,7]
// console.log(`slice ${arr.slice(1,4)}`);
// console.log(`array after slice ${arr}`);
// console.log(`splice ${arr.splice(1,4)}`);
// console.log(`array after splice ${arr}`);
// const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
// const cities = data.split(',');
// function fun(value){
//     return value.length>5;
// }
// const fil = array.filter(fun);
// console.log(fil);
// console.log(cities);
// const array = new Array('ali','mosa','kazim');
// const newarray = Array.from(array);
// newarray[2] = 'durrani';
// console.log(newarray);
// console.log(array);
// const objArray = [{name:'ali'},{value:1},{value:2}];
// const copyObj = Array.from(objArray);
// copyObj[1] = 99;
// copyObj[0].name = 'durrani';
// console.log(copyObj);
// console.log(objArray);
// const marval_heros = ['ironman','spiderman','flash'];
// const dc_heros = ['thor','hulk','batman'];
// const newheros = [...marval_heros,...dc_heros];
// const arra = [1,2,3,[4,5,6],7,[4,5,[1,2,3,[3,4,[2,2,3]]]]];
// const normal = arra.flat(4); //or to write infinite
// console.log(normal);
// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1,score2,score3)); //convert to array
// console.log(Array.from('durrai'));
// console.log(Array.from(['durrai']));
// console.log(Array.from([score1,score2,score3]));
let arr = [1,2,3,4,5];
let arr1 = [1,2,3,4,5];

// let entrie = (arr.entries()); //return key value pairs for iteration
// for(const element of entrie){
//     console.log(element);
// }
// console.log(arr.copyWithin(2,0,2)); //copy (target2,start0,end2)
// console.log(arr.at(2)); //return the value
// console.log(arr.concat(arr1));
//+++++++++++++++++++++++++++++++++++++++++++++++
//**************************************Objects */
//types (singleton,objects literals)
// singleton
// Object.create()

//objects literals
const mysymb = Symbol('key1');
const jsuser = {
    [mysymb] : '!orignal',
    name:'durrani',
    last_name:'farzooq_ali',
    age:23,
    location:"farzooq@google.com",
    islogedIn:false,
    lastlocation : ['jaipur','bangalur']
};
// jsuser.location = "farzooq@microsoft.com";
// Object.freeze(jsuser);
// jsuser.location = "farzooq@curemd.com";
// console.log(jsuser);
jsuser.add = function(){
    // console.log("durrani is back");
}
jsuser.add2 = function(){
    // console.log(`hello js user ${this.name}`);
}
// console.log(jsuser.add());
// console.log(jsuser.add2());
// console.log(jsuser);
//combine multiple objs
let obj1 = {a:'1',b:'2'}
let obj2 = {b:'1',c:'2'}
let obj = Object.assign({},obj1,obj2);
let obj3 = {...obj1,...obj2}
// console.log(obj);
// console.log(obj3);
const myobj = new Object();
const arrayObj = [
    {
        id:'1',
        name:'durrani'
    },
    {
        id:'2',
        name:'mosa'
    },
    {
        id:3,
        name:'kazim'
    }
];
// console.log(arrayObj[0].name);
// console.log(Object.keys(jsuser));
const user = {
    [mysymb] : '!orignal',
    name:'durrani',
    last_name:'farzooq_ali',
    age:23,
    location:"farzooq@google.com",
    islogedIn:false,
    lastlocation : ['jaipur','bangalur']
};
// console.log(Object.keys(user));
let obj4 = {}
obj4.id = '3';
obj4.name = "durrani";
// console.log(obj4);
let obj5 = {};
// Object.defineProperty(obj5,'name',{
//     'value':'jhon',
//     writable:false,
//     enumerable:true,
//     configurable:false
// });
Object.defineProperties(obj5,{
    name:{
        value:'ali',
        writable:false,
        enumerable:true,
        configurable:false
    },
    age:{
        value:15,
        writable:true,
        enumerable:true,
        configurable:false
    },
    email:{
        value:"farzooqali333@curemd.com",
        writable:false,
        enumerable:true,
        configurable:false
    }
});
obj5.age = 12;
// console.log(obj5.age);
// console.log(Object.entries());
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//*************************************************Functions */
function addNumbers(num1,num2){
    return num1+num2;
}
const result = addNumbers();
// console.log(result);
//*******rest */
function cal_cartitem(...items){
    return items;
}
// console.log(cal_cartitem(100,200,333,4,5));
// ******objects pass to function
function object_passtoFun(anyobject){
    return `ItemName is ${anyobject.name} & price is ${anyobject.price}`;
    //in {} we use return is know implicitly return
}
const items = {
    names:'laptop',
    prices:'1399$'
};
// console.log(object_passtoFun(items));
// console.log(object_passtoFun({name:'laptop',price:'399$'})); //also metod to call obj inside function
function accecpt_array(arr){
    return arr[1];
}
let getarr = [1,2,3,4];
// console.log(accecpt_array(arr));
//+++++++++++++++++++++++++++++++++++++++++++++++++++
// ************************************Arrow funciton
const currentcontext = {
    name:'ali',
    price:999,
    message:function(){
        // console.log(`${this.name} welcom to website`);
        // console.log(this);
    }
}
// currentcontext.message();
// console.log(this);
//this not run/use in fun but in obj can
// function chai(){
//     let username = "ali";
//     console.log(this.username);
// }
// chai();
// const store = function () {
//     return console.log('this is');
// }
// store();
// const store = () => {
//     return console.log("ya chez");
// }
const store = (num1,num2) => (num1+num2) //this is explicitly where not need to write return keyword
// console.log(store(2,3));

const storeobj = (num1,num2) => ({name:'ali'});
// console.log(storeobj(2,3).name); 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//****************************************************************IIFE(immediately invoked funciton expressions)
//iife is use to avoid globle scope polution
(function chai(){
    //named iife
    console.log('DB Connected');
})();
// chai();
( (name)=>{
    // console.log(`hello ${name}`);
} )('farzooq');
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// *************************************************Execution Context(how js run file(code))
//there are two types of execution context (1)Global(this{return->windows object}) Execution Context (2)Functional EC
// when code file run two phases occures 1st memory phase & second is Execution Phase
// in memory phase variables hold there space like hold address and in execution phase values stores to address
//to learn in depth google how js run behind the sceen  
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// *******************************************************************Control Flow
        // if,else,switch,
    // (all others false values are)truthy values, false values (false,0,-0,bigint 0n, "",null,undefined,NaN)
const emptyArray = [];
const emptyObject = {};
if(emptyArray.length===0){
    // console.log('array is empty');
}

if(Object.keys(emptyObject).length===0){
    // console.log('obj is empty');
}
//*****NUllish coalescing operator ?? : handle null,undefined errors */
//*****terniary operator condition?true:false */
// const iceprice = 80;
// iceprice<=80?console.log(`${iceprice} lessthen 81`):console.log(`${iceprice} grater then 80`);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// **********************************************************Iterations
// for (let i = 1; i <=10; i++) {
//     console.log(`table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} X ${j} = ${j*i}`);
//     }    
// }
const myarray = ["flash","batman","spiderman"];
// for(let i=0;i<myarray.length;i++){
//     console.log(myarray[i]);
// }
let i=0;
while(i<myarray.length){
    // console.log(myarray[i]);
    i++;
}
const number = "hello durrani!"
for(const num of number){
    if(num==" "){
        continue;
    }
    // console.log(`num of number is ${num}`);
}
const map = new Map();
map.set('name','durrani');
map.set('last','king');
map.set('fav_match','fifa');
// console.log(map);
// for (const [key,value] of map) {
//     console.log(key,value);
// }
const object_ = {
    name:'ali',
    last:'mosa',
    fav_match:'fifa'
}
// for (const [key,value] of object_) {
//     // console.log(key,value);
// }

// for (const key in arr_) {
    //     console.log(arr_[key]);
// }

const map_ = new Map();
map_.set('name','durrani');
map_.set('last','king');
map_.set('fav_match','fifa');

// for (const [key] in map_) {
//     console.log([key]);
// }


const obj_ = {
    name:'durrani',
    last:'ali',
    match:'fifa'
}
for (const key in obj_) {
    // console.log(key, obj_[key]);
}
const arr_ = [
    {
        id:'1',
        name:'musa'
    },{
        id:'2',
        name:'isa'
    },{
        id:'1',
        name:'dawood'
    }];
// arr_.forEach((item)=>{console.log(item.id,item.name)});
const bk = arr_.filter((item)=>(item.id != 1 || item.name === "musa"));
// console.log(bk);
const newarr = [23,199,23,55,15,290];
const total = newarr.reduce(function(acc,curr){
    // console.log(`acc is ${acc} & curr is ${curr}`);
    return acc+curr;
},3);
// console.log(total);

const map1 = new Map();
map1.set('name','ali');
map1.set('score','100');
map1.set('age','22');
map1.set('age','21');
map1.set('main','cs');
// console.log(map1.get('score'));
map1.set('name','durrani')
// console.log(map1);

// const newar = [23,199,23,55,15,290];
// const t = newar.map((key)=>(key))
// console.log(t);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
