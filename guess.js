// game

let com = 10;
let guss = null;

while (com  !==  guss) {
    guss = Number(prompt('enter your number : '));
    if (com === guss) {
        alert('you are win ');

    }
    else if (com > guss) {
        alert('incress your number ');
    }
    else if (com < guss) {
        alert('descress your number ');
    }
    else {
        alert('please enter valid number ');
    }
}
