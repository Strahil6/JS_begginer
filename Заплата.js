function salary(input) {
    let numberOpenTabs = Number(input.shift());
    let money = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let currentTab = input[i];

        if (currentTab == "Facebook") {
            money -= 150;
        }
        else if (currentTab == "Instagram") {
            money -= 100;
        }
        else if (currentTab == "Reddit") {
            money -= 50;
        }

        if (money <= 0) {
            console.log("You have lost your salary!");
            break;
        }
    }

    if (money > 0) {
        console.log(money);
    }
}

salary(
    [
        "3",
        "500",
        "Facebook",
        "Stackoverflow.com",
        "softuni.bg"
    ]
)    