//Methods of an array
let ar = [1,2,5,6,9,5,6,7]
console.log(`array is ${ar}`)
//1.How to delete from start : shift

let arr =[1,2,5,6,9,5,6,7]

arr.shift();
console.log("shift: "+arr)

//delete from end: Pop

let arr1 =[1,2,5,6,9,5,6,7]
arr1.pop();
console.log("pop: "+arr1)

//add in start : unshift

let arr2 =[1,2,5,6,9,5,6,7]
arr2.unshift(5);
console.log("unshift (5): "+arr2)

//add from last : push

let arr3 =[1,2,5,6,9,5,6,7]
arr3.push(5);
console.log("push:(5) "+arr3)

// to replace data : splice

let array=["pooja","priya","aman","ritu","ujjwal"]
console.log(array);

//splice(start index,count)
array.splice(1,1,"Pooja")
console.log("splice Pooja string at index 1: "+array)

//take a small fragment from array: slice
//slice(start index,end index)

let array1=["pooja","priya","aman","ritu","ujjwal"]
console.log("slice out aman and ritu : "+array1.slice(2,4))

//sort 

let array2=[1,5,8,9,4,6,2]
let strarr = ['f','j','d','r','a','s']
console.log("array :"+array2)
console.log("sort array: "+array2.sort())
console.log("string array is:"+strarr)
console.log("sort string array: "+strarr.sort())

//concat two array

let a1=[1,2,5,8]
console.log(a1)
let a2=[5,5,5,4]
console.log(a2)
console.log("concat two arrays: "+a1.concat(a2))

//include method
let a5=[5,6,9,3,8,6,5]
console.log("includes give boolean form : "+a5.includes(5))








