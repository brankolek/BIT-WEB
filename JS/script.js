// function log() {


//     console.log(navigator.appName);
//     console.log(navigator.platform);
//     console.log(navigator.vendor);


// }


// function screenLog() {

//     console.log(screen.availHeight);
//     console.log(screen.availWidth);
// }

// function locationLog() {

//     console.log()
// }

// log();
// screenLog();

function storeLocalStorage(key, value) {

    localStorage.setItem(key, value);

}


function readLocalStorage(key) {

    for (var i = 0; i < localStorage.length; i++) {


        console.log(localStorage.getItem(localStorage.key(i)));

    }



}
function removeLocalStorage(key) {

    window.localStorage.removeItem(key);


}


storeLocalStorage("Branko", "CAR");
storeLocalStorage("RaDAK", "ISTOCAR");
storeLocalStorage("lorem", "ipsum");
storeLocalStorage("Vucic", "Andrej");

removeLocalStorage("SABSAB");

readLocalStorage();






