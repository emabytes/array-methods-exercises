//lev_1_1 split

let meinText1 = "Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.";
let meinText2 = "Wie geht es dir heute?";
let meinText3 = "Heute ist ein großer Tag für uns.";

let split1 = meinText1.split();
let split2 = meinText1.split("");
let split3 = meinText1.split(" ");

console.log(split1); // ["Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag."]
console.log(split2); //["H", "a", "l", "l", "o", " ", "W", "e", "l", "t", ".", " ", "I", "c", "h", " ", "w", "ü", "n", "s", "c", "h", "e", " ", "e", "u", "c", "h", " ", "a", "l", "l", "e", "n", " ", "e", "i", "n", "e", "n", " ", "g", "u", "t", "e", "n", " ", "A", "r", "b", "e", "i", "t", "s", "t", "a", "g", "."]
console.log(split3); //["Hallo", "Welt.", "Ich", "wünsche", "euch", "allen", "einen", "guten", "Arbeitstag."]

//LEV_1_1 sort

var languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

function sortierung(elt) { 
    elt.sort();
}
sortierung(languages)
console.log(languages)//["C", "C#", "C++", "CSS", "Go", "Java", "JavaScript", "PHP", "Python", "Ruby", "Swift", "TypeScript"]

//1_2 

function sortierung2(elt) {
    let sort2 = elt.sort();
    sort2.reverse();
}
sortierung2(languages)
console.log(languages)

//1_3 Sortiere die Nummern aufsteigend.
var numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
console.log(numArray1.sort())
numArray1.sort((a, b) => {
    if (a > b) {
        return 1 // move to position 1
    } else if (a < b) {
        return -1 // move to position -1
    } else {
        return 0
    }
})
console.log(numArray1)//

//Lev 2_1
function stringReverse(element) {
    let myArray = element.split("");
    // console.log(myArray);
    let reversed = myArray.reverse();
    // console.log(reversed);
    let backToString = reversed.join("");
    console.log(backToString);
    return backToString;
}
stringReverse("Ema");
stringReverse("Sergio");
stringReverse("Georg");
stringReverse("Ella mag alle Bohnen");
stringReverse("Hanne sah zum ersten Mal Hasen von nah");

//Lev 2_2
var numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
console.log(numArray2.sort())
numArray2.sort((a, b) => {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1 
    } else {
        return 0
    }
})
console.log(numArray2)//[36, 62, 88, 98, 99, 122, 324, 1000]