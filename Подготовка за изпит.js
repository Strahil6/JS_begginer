function examPreparation(input) {
    let acceptableBadRating = Number(input.shift());
    let goodRatingCounter = 0;
    let badRatingCounter = 0
    let sumOfRating = 0;
    let taskCounter = 0;
    let lastTask = "";

    let i = 0;
    while (badRatingCounter <= acceptableBadRating) {
        let currentTask = input[i];

        if (currentTask == "Enough") {
            let averageRating = sumOfRating / (badRatingCounter + goodRatingCounter);
            console.log(`Average score: ${averageRating.toFixed(2)}`);
            console.log(`Number of problems: ${taskCounter}`);
            console.log(`Last problem: ${lastTask}`);
            break;
        }
        if (badRatingCounter == acceptableBadRating) {
            console.log(`You need a break, ${badRatingCounter} poor grades.`);
            break;
        }
        taskCounter++;

        let currentRating = Number(input[i + 1]);

        if (currentRating <= 4) {
            badRatingCounter++;
        }
        else {
            goodRatingCounter++;
        }
        sumOfRating += currentRating;
        lastTask = currentTask;
        i += 2;
    }
}

examPreparation(
    [
        "3",
        "Money",
        "6",
        "Story",
        "4",
        "Spring Time",
        "5",
        "Bus",
        "6",
        "Enough"
    ]
)

// examPreparation(
//     [
//         "2",
//         "Income",
//         "3",
//         "Game Info",
//         "6",
//         "Best Player",
//         "4"
//     ]
// )