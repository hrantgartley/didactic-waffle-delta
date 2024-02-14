/* eslint-disable no-unused-vars */
/* global $ */
console.log("Document ready");
$("#fact-button").on("click", function () {
    displayFact();
});

$("#name-input").on("keypress", function (e) {
    if (e.which === 13) {
        displayFact();
    }
});

/**
 * Calculates the length of the text entered in the name input field.
 * @returns {number} The length of the text entered, excluding spaces. Returns 0 if no text is entered.
 */
function getLength() {
    let text = $("#name-input").val();
    if (text !== undefined) {
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] !== " ") {
                count++;
            }
        }
        return count;
    } else {
        return 0;
    }
}

/**
 * Retrieves the spirit animal based on the input name.
 * @returns {string} The spirit animal.
 */
function getSpiritAnimal() {
    let text = $("#name-input").val();
    if (text !== undefined) {
        let animals = [
            "Cat",
            "Dog",
            "Elephant",
            "Lion",
            "Tiger",
            "Bear",
            "Wolf",
            "Fox",
            "Horse",
            "Eagle",
        ];
        let index = text.length % animals.length;
        return animals[index];
    } else {
        return "No name";
    }
}

/**
 * Displays various facts about the user's name.
 */
function displayFact() {
    let text = $("#name-input").val();
    let fact = `${text} is ${getLength()} characters long.`;
    $("#length").hide().text(fact).fadeIn();
    $("#fact").hide().text(`Random Fact:  ${randomFacts()}`).fadeIn();
    $("#animal")
        .hide()
        .text(`Your spirit animal is: ${getSpiritAnimal()}`)
        .fadeIn();
    $("#first-letter")
        .hide()
        .text(`The first letter of your name is: ${text[0]}`)
        .fadeIn();
    $("#last-letter")
        .hide()
        .text(`The last letter of your name is: ${text[text.length - 1]}`)
        .fadeIn();
    if (getVowels() === 0) {
        $("#num-vowels").hide().text(`Your name has no vowels`).fadeIn();
    } else if (getVowels() === 1) {
        $("#num-vowels").hide().text(`Your name has 1 vowel`).fadeIn();
    } else {
        $("#num-vowels")
            .hide()
            .text(`Your name has ${getVowels()} vowels`)
            .fadeIn();
    }
}

/**
 * Generates a random fact from an array of facts.
 * @returns {string} A random fact.
 */
function randomFacts() {
    let facts = [
        "Ants stretch when they wake up in the morning.",
        "Ostriches can run faster than horses.",
        "Olympic gold medals are actually made mostly of silver.",
        "You are born with 300 bones; by the time you are an adult you will have 206.",
        "It takes about 8 minutes for light from the Sun to reach Earth.",
        "Some bamboo plants can grow almost a meter in just one day.",
        "The state of Florida is bigger than England.",
        "Some penguins can leap 2-3 meters out of the water.",
        "On average, it takes 66 days to form a new habit.",
        "Mammoths still walked the Earth when the Great Pyramid was being built.",
        "Rabbit's teeth never stop growing.",
        "The average person spends 6 months of their lifetime waiting on a red light to turn green.",
    ];
    let index = Math.floor(Math.random() * facts.length);
    return facts[index];
}

// eslint-disable-next-line no-unused-vars
function refreshPage() {
    window.location.reload();
}

/**
 * Calculates the number of vowels in the input text.
 *
 * @returns {number} The count of vowels in the input text.
 */
function getVowels() {
    let text = $("#name-input").val();
    if (text !== undefined) {
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if (
                text[i] === "a" ||
                text[i] === "e" ||
                text[i] === "i" ||
                text[i] === "o" ||
                text[i] === "u"
            ) {
                count++;
            }
        }
        return count;
    } else {
        return 0;
    }
}

// eslint-disable-next-line no-unused-vars
function validate_input() {
    let data = $("#name-input").val().trim();
    if (data.length === 0) {
        return null;
    }
    return data;
}

/**
 * Reverses a given string.
 *
 * @param {string} name - The string to be reversed.
 * @returns {string} - The reversed string.
 */
// eslint-disable-next-line no-unused-vars
function reverseString(name) {
    return name.split("").reverse().join("");
}

function sanitizeInput() {
    let data = $("#name-input").val().trim();
    return data;
}

const myFunc = () => {
    return "Hello";
};
