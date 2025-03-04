function cinema(projectType, rumberRow, numberCol) {
    let price = 0;

    if (projectType == "Premiere") {
        price = rumberRow * numberCol * 12;
    }
    else if (projectType == "Normal") {
        price = rumberRow * numberCol * 7.50;
    }
    else if (projectType == "Discount") {
        price = rumberRow * numberCol * 5;
    }

    console.log(`${price.toFixed(2)} leva`);
}

cinema(
    "Premiere",
    10,
    12
)