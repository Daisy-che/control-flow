
  
//que1
function multiplyFirstFour(arr){
    const firstFour=arr.slice(0,4).map(item=>item*item);
    const lastTwo=arr.slice(-2).map(item=>item+10);
    const NewArr=firstFour.concat(lastTwo)
    console.log(NewArr);
}
multiplyFirstFour([2,4,5,6,7,8])

    
    //question2
    function numArray(arr){
    let index=0
    while(index<arr.length){
        if(arr[index]===arr[3]){
           break; 
         } 
         index++

        }
        
    }
    let arr5=[1,2,3,4,5,6,7,8,9];
    console.log(arr5)

    //que3
    function fruit(fruitArray){
        for (let i=0;i<fruitArray.length;i++){
            continue
  
        }
        console.log(fruitArray[1])

    }
    let fruit1=["apple","plum","banana","strawbery"]
    fruit(fruit1)
    //que4
    function logArrElement(arr){
        for(let i=0;i<arr.length;i++){
            console.log(arr[i])
        }
    }
    let fruits=["apple","banana","orange","kiwi"]
    logArrElement(fruits)

    //question5
    function reversedString(inputString){
        let reversedString='';
        let i= inputString.length-1;
    
    while(i>=0){
        reversedString+=inputString[i],i--;
    }
    return reversedString;
}
let originalString='hello'
let reversed=reversedString(originalString)
console.log(reversed)
