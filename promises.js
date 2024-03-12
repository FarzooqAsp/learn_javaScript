//basically two parts of promise 1 is creating and 2 is consuming(calling/using)
const promis_one = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('asyn task is complete');
        resolve()
    },1000)
})
promis_one.then(function(){
    console.log('promise consumed');
})
// ****also write Promise without storing to variables
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('async task 2');
        resolve()
    }, 1000);
}).then(function(){
    console.log('async task 2 completed');
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"durrani",email:'durrani@google.com'})      
    }, 1000);
})
promise3.then((user)=>{
    console.log(user);
})
//use promise with conditions
let promise4 = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true;
    if(!error){
        resolve({username:'ali',pass:'123'});      
    }
    else{
        reject('Error: Something went Wrong')
    }
  },1000)  
})
promise4.then(function(value){
  console.log(value);
  return value.username;  
}).then(function(value){
    console.log(value);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log('the promise is either resolved or rejected'))

//async await
let promise5 = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({name:'dur_E_durrani',pass:'123'})          
        }
        else{
            reject("Error: js error occured")
        }
    }, 1000);
})
promise5.then(function(value){
    return value.name;
}).then(function(value){
    console.log(value);
}).catch(function(error){
    console.log(error);
})
//handle promise using async await
async function consumedPromise5(){
    try {
        const response = await promise5
        console.log(response.name);        
    } catch (error) {
        console.log(error);
    }
}
consumedPromise5()
// ***********fetch Api
async function getallusers(){
    try{
        const response = await fetch('https://api.github.com/users/hiteshchoudhary');
        const final = await response.json();
        console.log(final);
    }catch(error){
        console.log(error);
    }
}
// getallusers()
// fetch('https://api.github.com/users/hiteshchoudhary').then(function(resolve){
//     return resolve.json()
// }).then(function(response){
//     return response.followers
// }).then(function(resolve){
//     console.log(resolve);
// })
// .catch(function(reject){ 
//     console.log(reject);
// })