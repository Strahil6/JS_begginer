function hotelRoom(month, numberNight) {
    let priceForStudio = 0;
    let priceForApartment = 0
    let studio = 0;
    let apartment = 0;

    if (month == "Май" || month == "Октомври") {
        studio = 50;
        apartment = 65;

        if (numberNight >= 7 && numberNight <= 14) {
            studio -= studio * 0.05;
        }
        else if (numberNight > 14) {
            studio -= studio * 0.30;
            apartment -= apartment * 0.10;
        }
    }
    else if (month == "Юни" || month == "Септември") {
        studio = 75.20;
        apartment = 68.70;

        if (numberNight > 14) {
            studio -= studio * 0.20;
            apartment -= apartment * 0.10;
        }
    }
    else if (month == "Юли" || month == "Август") {
        studio = 76;
        apartment = 77;

        if (numberNight > 14) {
            apartment -= apartment * 0.10;
        }
    }

    priceForStudio = numberNight * studio;
    priceForApartment = numberNight * apartment;

    console.log(`Apartment: ${priceForApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceForStudio.toFixed(2)} lv.`);
}

hotelRoom(
    "Август",
    20
)