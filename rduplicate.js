

let arr =[4.9,9,7,5,6,6,8,2,9,2]

function find(){
    let dup=[];
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j] && !dup.includes(arr[i])){
                dup.push(arr[i])

            }

        }
    }return dup;
}

let r =find(arr)
console.log(r)
