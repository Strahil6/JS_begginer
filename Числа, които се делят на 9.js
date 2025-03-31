function numberWhoDevideBy9(start, end) {
    let sum = 0;
    let output = "";

    for (let i = start; i <= end; i++) {
        if (i % 9 == 0) {
            sum += i;
            output += i + "\n";
        }
    }

    console.log(`The sum is: ${sum}`);
    console.log(output);
}

numberWhoDevideBy9(
    100,
    200
)