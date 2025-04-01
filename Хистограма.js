function histogram(input) {
    let numberOfDigits = Number(input.shift());
    let percent1 = 0;
    let percent1Counter = 0;
    let percent2 = 0;
    let percent2Counter = 0;
    let percent3 = 0;
    let percent3Counter = 0;
    let percent4 = 0;
    let percent4Counter = 0;
    let percent5 = 0;
    let percent5Counter = 0;

    for (let i = 0; i < numberOfDigits; i++) {
        let currentDigit = Number(input[i]);

        if (currentDigit < 200) {
            percent1Counter++;
        }
        else if (currentDigit >= 200 && currentDigit <= 399) {
            percent2Counter++;
        }
        else if (currentDigit >= 400 && currentDigit <= 599) {
            percent3Counter++;
        }
        else if (currentDigit >= 600 && currentDigit <= 799) {
            percent4Counter++;
        }
        else if (currentDigit >= 800) {
            percent5Counter++;
        }
    }

    percent1 = percent1Counter / numberOfDigits * 100;
    percent2 = percent2Counter / numberOfDigits * 100;
    percent3 = percent3Counter / numberOfDigits * 100;
    percent4 = percent4Counter / numberOfDigits * 100;
    percent5 = percent5Counter / numberOfDigits * 100;

    console.log(`${percent1.toFixed(2)}%`);
    console.log(`${percent2.toFixed(2)}%`);
    console.log(`${percent3.toFixed(2)}%`);
    console.log(`${percent4.toFixed(2)}%`);
    console.log(`${percent5.toFixed(2)}%`);

}

histogram(
    [
        7,
        800,
        801,
        250,
        199,
        399,
        599,
        799
    ]
)