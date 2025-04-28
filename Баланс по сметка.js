function accountBalance(input) {
    let total = 0;

    let i = 0;
    while (input[i] !== "NoMoreMoney") {
        let currentMoney = Number(input[i]);
        if (currentMoney <= 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${currentMoney}`);
        total += currentMoney;
        i++;
    }

    console.log(`Total: ${total.toFixed(2)}`);
}

accountBalance(
    [
        "120",
        "45.55",
        "-150",
    ]
)    