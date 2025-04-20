function sumOfNumber(input) {
    let needSum = Number(input.shift());
    let currentSum = 0;

    let i = 0;
    while (currentSum < needSum) {
        currentSum += Number(input[i]);
        i++;
    }

    console.log(currentSum);
}

sumOfNumber(
    [
        "20",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"
    ]
)