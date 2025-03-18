function fishingBoat(budget, seasson, numberPeople) {
    let price = 0;

    if (seasson == "Spring") {
        price = 3000;

        if (numberPeople <= 6) {
            price -= price * 0.10;
        }
        else if (numberPeople >= 7 && numberPeople <= 11) {
            price -= price * 0.15;
        }
        else if (numberPeople >= 12) {
            price -= price * 0.25;
        }

        if (numberPeople % 2 == 0) {
            price -= price * 0.05;
        }
    }
    else if (seasson == "Summer") {
        price = 4200;

        if (numberPeople <= 6) {
            price -= price * 0.10;
        }
        else if (numberPeople >= 7 && numberPeople <= 11) {
            price -= price * 0.15;
        }
        else if (numberPeople >= 12) {
            price -= price * 0.25;
        }

        if (numberPeople % 2 == 0) {
            price -= price * 0.05;
        }
    }
    else if (seasson == "Autumn") {
        price = 4200;

        if (numberPeople <= 6) {
            price -= price * 0.10;
        }
        else if (numberPeople >= 7 && numberPeople <= 11) {
            price -= price * 0.15;
        }
        else if (numberPeople >= 12) {
            price -= price * 0.25;
        }
    }
    else if (seasson == "Winter") {
        price = 2600;

        if (numberPeople <= 6) {
            price -= price * 0.10;
        }
        else if (numberPeople >= 7 && numberPeople <= 11) {
            price -= price * 0.15;
        }
        else if (numberPeople >= 12) {
            price -= price * 0.25;
        }

        if (numberPeople % 2 == 0) {
            price -= price * 0.05;
        }
    }

    if (budget >= price) {
        let leftMoney = budget - price;
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
    }
    else {
        let needMoney = price - budget;
        console.log(`Not enough money! You need ${needMoney.toFixed(2)} leva.`);
    }
}

fishingBoat(
    3600,
    "Autumn",
    6
)