function add7(number){
    return 7+number;
};

function multiply(numOne, numTwo){
    return numOne*numTwo;
};

function capitalize(word){
    let first=word.slice(0,1);
    let second=word.substring(1);
    return first.toUpperCase()+second.toLowerCase()
};

function lastLetter(word){
    return word.slice(-1)
};

let answer = parseInt(prompt("Please enter a prompt you would like"))

for(let i=1; i<=answer; i++){
    if(i%3==0&&i%5==0){
        console.log("FizzBuzz")
    }
    else if(i%3==0){
        console.log("Fizz")
    }
    else if(i%5==0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }

}

