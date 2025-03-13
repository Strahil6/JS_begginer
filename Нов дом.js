function newHome(flowerType, numberFlower, budget) {
    let price = 0;

    if (flowerType == "Roses") {
        price = numberFlower * 5;
        if (numberFlower >= 80) {
            price -= price * 0.10;
        }
    }
    else if (flowerType == "Dahlias") {
        price = numberFlower * 3.80;
        if (numberFlower >= 90) {
            price -= price * 0.15;
        }
    }
    else if (flowerType == "Tulips") {
        price = numberFlower * 2.80;
        if (numberFlower >= 80) {
            price -= price * 0.15;
        }
    }
    else if (flowerType == "Narcissus") {
        price = numberFlower * 3;
        if (numberFlower < 120) {
            price += price * 0.15;
        }
    }
    else if (flowerType == "Gladiolus") {
        price = numberFlower * 2.50;
        if (numberFlower < 80) {
            price += price * 0.20;
        }
    }

    if (budget >= price) {
        let leftMoney = budget - price;
        console.log(`Hey, you have a great garden with ${numberFlower} ${flowerType} and ${leftMoney.toFixed(2)} leva left.`);
    }
    else if (budget < price) {
        let needMoney = price - budget;
        console.log(`Not enough money, you need ${needMoney.toFixed(2)} leva more.`);
    }
}

newHome(
    "Narcissus",
    119,
    360
)