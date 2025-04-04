function oscars(input) {
    let actorName = input.shift();
    let accademyPoint = Number(input.shift());
    let numberRefers = Number(input.shift());

    for (let i = 0; i < input.length; i += 2) {
        let currentRef = input[i];
        let point = input[i + 1];

        accademyPoint += currentRef.length * point / 2;

        if (accademyPoint >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${accademyPoint}!`);
            break;
        }
    }

    if (accademyPoint < 1250.5) {
        let needPoint = 1250.5 - accademyPoint;
        console.log(`Sorry, ${actorName} you need ${needPoint} more!`);
    }
}

oscars(
    [
        "Sandra Bullock",
        "340",
        "5",
        "Robert De Niro",
        "50",
        "Julia Roberts",
        "40.5",
        "Daniel Day-Lewis",
        "39.4",
        "Nicolas Cage",
        "29.9",
        "Stoyanka Mutafova",
        "33"
    ]
)    