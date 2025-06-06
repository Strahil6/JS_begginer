function oldLibrary(input) {
    let myBook = input.shift();
    let bookCounter = 0;

    let i = 0
    while (i < input.length) {
        let currentBook = input[i];

        if (currentBook == myBook) {
            console.log(`You checked ${bookCounter} books and found it.`);
            break;
        }
        if (currentBook == "No More Books") {
            console.log("The book you search is not here!");
            console.log(`You checked ${bookCounter} books.`);
        }
        bookCounter++;
        i++;
    }
}

oldLibrary(
    [
        "Troy",
        "Stronger",
        "Life Style",
        "Troy"
    ]
)

oldLibrary(
    [
        "The Spot",
        "Hunger Games",
        "Harry Potter",
        "Torronto",
        "Spotify",
        "No More Books"
    ]
)