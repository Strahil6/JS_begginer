function trackingMania(input) {
    let numberGroup = Number(input.shift());
    let peolpeMusala = 0;
    let peopleMonblan = 0;
    let peopleKilimandjaro = 0;
    let peopleK2 = 0;
    let peopleEverest = 0;
    let allPeople = 0;

    for (let i = 0; i < input.length; i++) {
        let currentGroup = Number(input[i]);

        allPeople += currentGroup;

        if (currentGroup <= 5) {
            peolpeMusala += currentGroup;
        }
        else if (currentGroup >= 6 && currentGroup <= 12) {
            peopleMonblan += currentGroup;
        }
        else if (currentGroup >= 13 && currentGroup <= 25) {
            peopleKilimandjaro += currentGroup;
        }
        else if (currentGroup >= 26 && currentGroup <= 40) {
            peopleK2 += currentGroup;
        }
        else if (currentGroup >= 41) {
            peopleEverest += currentGroup;
        }
    }

    let percentMusala = peolpeMusala / allPeople * 100;
    console.log(`${percentMusala.toFixed(2)}%`);

    let percentMonblan = peopleMonblan / allPeople * 100;
    console.log(`${percentMonblan.toFixed(2)}%`);

    let percentKilimandjaro = peopleKilimandjaro / allPeople * 100;
    console.log(`${percentKilimandjaro.toFixed(2)}%`);

    let percentK2 = peopleK2 / allPeople * 100;
    console.log(`${percentK2.toFixed(2)}%`);

    let percentEverest = peopleEverest / allPeople * 100;
    console.log(`${percentEverest.toFixed(2)}%`);
}

trackingMania(
    [
        "10",
        "10",
        "5",
        "1",
        "100",
        "12",
        "26",
        "17",
        "37",
        "40",
        "78"
    ]
)