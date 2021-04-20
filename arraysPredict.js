// #1: 

var arr = [8,6,7,5,3,0,9];
for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
// prediction: prints out each index from the array in order; correct! 


// #2: 
var arr = [7,3,8,4,2,0,1];
for(var i =0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    }
    else{
        console.log("That is odd!");
    }
}
// prediction: prints out the array indices; if number is even then print it; if number is odd then print string text; correct!  


// #3: 
var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;        
    }
    else if(arr[i] == 0) {
        arr[i] = "Zero";
    }
    else {
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);
// prediction: arr indices are transformed from negative numbers to positive, or from positive to negative, or Zero to the word "Zero"; newArr indices are filled in with the negative numbers from arr; correct! 
