function smallestNumber(input) {
    let smallNumber = Number(input.shift());

    let index = 0;
    while (input[index] !== "Stop") {
        let currentNumber = Number(input[index]);

        if (currentNumber < smallNumber) {
            smallNumber = currentNumber;
        }

        index++;
    }

    console.log(smallNumber);
}

smallestNumber(
    [
        "-10",
        "20",
        "-30",
        "Stop"
    ]
)    