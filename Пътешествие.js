function journey(budget, seasson) {
    let holidayType = "";
    let destination = "";
    let price = 0;

    if (budget <= 100) {
        destination = "Bulgaria";

        if (seasson == "Summer") {
            holidayType = "Camp";
            price = budget * 0.30;
        }
        else if (seasson == "Winter") {
            holidayType = "Hotel";
            price = budget * 0.70;
        }
    }
    else if (budget > 100 && budget <= 1000) {
        destination = "Balkans";

        if (seasson == "Summer") {
            holidayType = "Camp";
            price = budget * 0.40;
        }
        else if (seasson == "Winter") {
            holidayType = "Hotel";
            price = budget * 0.80;
        }
    }
    else if (budget > 1000) {
        destination = "Europe";

        if (seasson == "Summer") {
            holidayType = "Camp";
            price = budget * 0.90;
        }
        else if (seasson == "Winter") {
            holidayType = "Hotel";
            price = budget * 0.90;
        }
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${holidayType} - ${price.toFixed(2)}`);
}

journey(
    1500,
    "Summer"
)