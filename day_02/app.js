let num1 = "50";
let num2 = 100;
// if(num1 === num2) {
//     console.log(1);
//     console.log("num1 and num2 are equal...");
// }
// else if(num1 > num2) {
//     console.log(2);
//     console.log("num1 is greater than num2...");
// }
// else {
//     console.log(3);
//     console.log("num1 and num2 are not equal...");
// }

// if(num1 === num2)
//     console.log("num1 and num2 are equal...");
// else if(num1 > num2)
//     console.log("num1 is greater than num2...");
// else
//     console.log("num1 and num2 are not equal...");


// Get the name of the day
// Print message "Today is <day>" using if statement
// Print "Today is weekday!" if day is not saturday or sunday
// If day is sunday or saturday print "Today is weekend"

const nameOfDay = "Wednesday";

if(nameOfDay === "Monday") {
    console.log("Today is Monday");
    console.log("Today is weekday!");
}
else if(nameOfDay === "Tuesday") {
    console.log("Today is Tuesday");
    console.log("Today is weekday!");
}
else if(nameOfDay === "Wednesday") {
    console.log("Today is Wednesday");
    console.log("Today is weekday!");
}
else if(nameOfDay === "Thursday") {
    console.log("Today is Thursday");
    console.log("Today is weekday!");
}
else if(nameOfDay === "Friday") {
    console.log("Today is Friday");
    console.log("Today is weekday!");
}
else {
    console.log("Today is weekend");
}


switch(nameOfDay) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log(`Today is ${nameOfDay}`);
        console.log("Today is weekday!");
        break;
    default:
        console.log("Today is weekend");
}

function getMonthName(mo) {
    mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    if (months[mo]) {
      return months[mo];
    } else {
      throw new Error("InvalidMonthNo"); // throw keyword is used here
    }
  }

// try {
//     const firstName =  "Alex";
//     const lastName = "Lee";
//     const fullName = firstName + " " + lastName;
//     console.log({fullName});
//     throw new Error('Something went wrong!');
// }
// catch {
//     console.log('Some error');
// }
// finally {
//     console.log('Finally I am done!');
// }

try {
    const month = getMonthName(0);
    console.log({month});
}
catch(error) {
    console.log({error});
}
console.log('Something to do with the month!');