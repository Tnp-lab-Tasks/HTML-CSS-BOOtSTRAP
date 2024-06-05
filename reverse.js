

let str ="Pooja"

function reverse(){

let stl =str.length;
let rstr ="";

for(i=stl-1;i>=0;i--){
    rstr += str[i]; 
    

}return rstr
}

let r=reverse(str);
console.log(r)


//reverse two string in an array using built in function reverse

let arr=['Pooja sharma','Priya singh']
arr.reverse();
console.log(arr);

//reverse a word in a string 

let string="Pooja sharma"
let part1=string.slice(0,6)
let part2 =string.slice(6,12)
console.log(part2.concat(part1))







