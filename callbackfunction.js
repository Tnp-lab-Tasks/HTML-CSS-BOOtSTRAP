
//what is call back function ?with example.

//Call back function:
//when a function is passed as an argument to another function.

//function
function call(name,callback){
    console.log('Hello'+" "+ name)
    callback();
}

//callback function
function cb(){
    console.log('I am a call back function')
}

//passing function with an argument...
call('Pooja',cb)

