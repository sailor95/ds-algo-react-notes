// Q1 make a 'double click JS function'

function clickAction() {
    // Do something here
}

function doubleClickAction() {
    // Do something here
}

let timer = 0;
let clickTypeLock = false;
const delay = 200;

$('#button')
    .on("click", function () {
        timer++;
        clickTypeLock = false;

        setTimeout(function () {
            if (!clickTypeLock) {
                // call clickAction if nothing happened in 200ms
                clickAction();
            }
        }, delay);

        if (timer > 1) {
            // if there's second click, lock the clickAction
            clickTypeLock = true;
            timer = 0;
            doubleClickAction();
        }
    })
// .on("dblclick", function () {
//     clearTimeout(timer);
//     clickTypeLock = true;
//     doubleClickAction();
// });


// Q2: JS memoize function with Map,
// Check whether some sort of combination already exist in db.
// Example:
// db = {
//     "A+B": "3",
//     "B+A": "3",
//     "A+C": "5"
// }
// dbChecker(A, C) -> return 5