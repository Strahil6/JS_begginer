function passwordFunction(input) {
    let username = input.shift();
    let password = input.shift();

    let i = 0;
    while (input[i] != password) {
        i++;

        if (input[i] == password) {
            console.log(`Welcome ${username}!`);
            break;
        }
    }
}

passwordFunction(
    [
        "Nakov",
        "1234",
        "Pass",
        "1324",
        "1234"
    ]
)