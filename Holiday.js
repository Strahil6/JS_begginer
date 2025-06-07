// Резултат 33 от 100???

function holiday(input) {
    let needHolidayMoney = Number(input.shift());
    let allSavedMoney = Number(input.shift());
    let stayingDay = 0;

    let index = 0;
    while (index < input.length) {
        let currentAction = input[index];
        let currentMoney = Number(input[index + 1]);

        if (currentAction == "spend") {
            stayingDay++;
            allSavedMoney -= currentMoney;
            if (allSavedMoney <= 0) {
                allSavedMoney = 0;
            }
        }

        if (currentAction == "save") {
            stayingDay++;
            allSavedMoney += currentMoney;
        }

        if (stayingDay == 5) {
            console.log("You can't save the money.");
            console.log(`${stayingDay}`);
            break;
        }

        if (allSavedMoney >= needHolidayMoney) {
            console.log(`You saved the money for ${stayingDay} days.`);
            break;
        }
        index += 2;
    }
}

holiday(
    [
        "2000",
        "1000",
        "spend",
        "1200",
        "save",
        "2000"
    ]
)

// holiday(
//     [
//         "110",
//         "60",
//         "spend",
//         "10",
//         "spend",
//         "10",
//         "spend",
//         "10",
//         "spend",
//         "10",
//         "spend",
//         "10"
//     ]
// )

// holiday(
//     [
//         "250",
//         "150",
//         "spend",
//         "50",
//         "spend",
//         "50",
//         "save",
//         "100",
//         "save",
//         "100"
//     ]
// )