function tenisWorldRanklist(input) {
    let numberTurnirs = Number(input.shift());
    let startPoint = Number(input.shift());
    let point = 0;
    let numberWon = 0;
    let averagePoint = 0;
    let percentWonTurnir = 0;

    for (let i = 0; i < input.length; i++) {
        let currentTurnir = input[i];

        if (currentTurnir == "F") {
            point += 1200;
        }
        else if (currentTurnir == "W") {
            point += 2000;
            numberWon++;
        }
        else if (currentTurnir == "SF") {
            point += 720;
        }
    }

    startPoint += point;
    console.log(`Final points: ${startPoint}`);

    averagePoint = point / numberTurnirs;
    console.log(`Average points: ${averagePoint}`);

    percentWonTurnir = numberWon / numberTurnirs * 100;
    console.log(`${percentWonTurnir.toFixed(2)}%`);

}

tenisWorldRanklist(
    [
        "4",
        "750",
        "SF",
        "W",
        "SF",
        "W"
    ]
)    