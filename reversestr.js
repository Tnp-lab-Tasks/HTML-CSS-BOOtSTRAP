var string ="Pooja sharma";
// enter string of your choice 

var strlength =string.length; //assign variarble to the lenth of string

var reversestr ='';//keep the reverse string empty

for (i =strlength-1;i>=0;i--){ //loop strating from end of the string
    reversestr += string[i];

}
console.log(`${string} reverse is ${reversestr}`);