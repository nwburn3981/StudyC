//var, let const

let apples = 5; //number

let speed: string = "fast"; //'fast' both valid

let hasName: boolean = true; // or false

let nothingHere: null = null;
let nothing: undefined = undefined

//built-in
let today: Date = new Date();

//Arrays
let colors: string[] = ["red", "green", "yellow"];

let nums: number[] = [1,2,3]
let truths: boolean[] = [true, false]

let words: string[] = ["red", "green", "yellow"];

function getWords() {
    let foundWord;
    for (let i = 0; i < words.length; i++) {
        foundWord = words[i];
        console.log(foundWord)
    }
}

getWords()

const logNumber = (i: number) => void = (i: number) => {
    console.log(i);
}

let myString
myString = 'string'

//class = real life entity




