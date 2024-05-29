let array=[1,2,3,4,5,2,1,3,6];

function findduplicates(array){
    let duplicates=[];
    for (let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if (array[i] === array[j] && !duplicates.includes(array[i]))
                {duplicates.push(array[i]);}
        }

    }
    return duplicates;

}

let result=findduplicates(array);
console.log(result);


