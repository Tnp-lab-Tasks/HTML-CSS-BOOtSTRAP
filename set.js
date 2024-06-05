

//what is setTimeout ? with eaxmple.

// setTimeout:
// when a function(specific task) is executed at a specific time .
// syntax:  setTimeout(function,miliseconds)


//function :synchronous programing


function Gm(){
    console.log("Good Morning Pooja")
}

function Gn(name){
 console.log("Good Night"+" "+name)
}

Gm();
Gn("Pooja")

//function: asynchronous programing


//Gm function takes more time so wait in queue and runs parallelly while Gn functions executes first...
function Gm(){
    console.log("Good Morning Pooja")
}


function Gn(name){
 console.log("Good Night"+" "+name)
}

setTimeout(Gm,2500);
Gn("Pooja")




function congo(name,callback){
    console.log("Congratulations")
    //callback will be performed after consoling "congratulations"
    callback(name)
}

function win(name){
    console.log(name +" "+"you are the winnwer")

}

//setTimeout for congo function passing argument value and function win also.
setTimeout(congo,1500,'Pooja',win)



// what is setInterval? with example.
// setInterval:
// when a function repeats itself at a specific interval.

setInterval(function Gm(){
    console.log("Good morning Pooja")

},2000)











    




