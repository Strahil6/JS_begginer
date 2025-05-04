function completion(input) {
    let name = input.shift();
    let slowGradeCounter = 0;
    let classCounter = 0;
    let averageGrade = 0;

    let index = 0;
    while (index !== input.length) {
        let currentGrade = Number(input[index]);

        if (currentGrade >= 4) {
            averageGrade += currentGrade;
            classCounter++;
        }
        else {
            slowGradeCounter++;
        }

        if (slowGradeCounter == 2) {
            classCounter++;
            console.log(`${name} has been excluded at ${classCounter} grade`);
            break;
        }
        index++;
    }

    if (slowGradeCounter !== 2) {
        averageGrade = averageGrade / classCounter;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    }
}

// input 1
// completion(
//     [
//         "Gosho",
//         "5",
//         "5.5",
//         "6",
//         "5.43",
//         "5.5",
//         "6",
//         "5.55",
//         "5",
//         "6",
//         "6",
//         "5.43",
//         "5"
//     ]
// )

// input 2
completion(
    [
        "Mimi",
        "5",
        "6",
        "5",
        "6",
        "5",
        "6",
        "6",
        "2",
        "3"
    ]
)    