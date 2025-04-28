function biggestNumber(input) {
    let bigNumber = Number(input.shift());

    let index = 0;
    while (input[index] !== "Stop") {
        let currentNumber = Number(input[index]);

        if (currentNumber > bigNumber) {
            bigNumber = currentNumber;
        }

        index++;
    }

    console.log(bigNumber);
}

biggestNumber(
    [
        "45",
        "-20",
        "7",
        "99",
        "Stop"
    ]
)    