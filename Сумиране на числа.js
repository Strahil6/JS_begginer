function sumNumber(number){
    let sum = 0;

    for(let i = 0; i < number.length; i++){
        let currentNumber = Number(number[i]);
        sum += currentNumber;
    }

    console.log(`The sum of the digits is: ${sum}`);
}

sumNumber("564891")