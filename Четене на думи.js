function readingWords(input) {
    let i = 0;
    while (input[i] != "Stop") {
        console.log(input[i]);
        i++;
    }
}

readingWords(
    [
        "Sofia",
        "Berlin",
        "Moscow",
        "Athens",
        "Madrid",
        "London",
        "Paris",
        "Stop",
        "AfterStop"
    ]
)    