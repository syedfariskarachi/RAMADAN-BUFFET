#! /usr/bin/env node
import inquirer from "inquirer";
console.log("This is RAMADAN we are only provide IFTAR and SEHRI:");
let chose = await inquirer.prompt({
    message: "what you want!",
    name: "choose",
    type: "list",
    choices: ["Iftar = 1500", "Sehri = 999", "Lunch = 1000"],
});
if (chose.choose === "Iftar = 1500") {
    function iftar() {
        console.log("We offer you:");
        console.log("1:ROOH AFZA");
        console.log("2:FRUIT CHAAT");
        console.log("3:PAKORA");
        console.log("4:SAMOSA");
        console.log("5:DATES");
        console.log("THANK YOU FOR YOUR VISIT!");
    }
    iftar();
}
else if (chose.choose === "Sehri = 999") {
    console.log("We Offer You");
    console.log("1:PARATHA");
    console.log("2:KARAI");
    console.log("3:LASSI");
    console.log("THANK YOU FOR YOUR VISIT!");
}
else {
    console.log("Soory! We are not provide lunch in RAMADAN");
}
