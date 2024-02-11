/* global $ */
$("#fact-button").on("click", function () {
    displayFact()
})
$("#name-input").on("keypress", function (e) {
    if (e.which === 13) {
        displayFact()
    }
})
function getLength() {
    let text = $("#name-input").val()
    if (text !== undefined) {
        let count = 0
        for (let i = 0; i < text.length; i++) {
            if (text[i] !== " ") {
                count++
            }
        }
        return count
    } else {
        return 0
    }
}

function getSpiritAnimal() {
    let text = $("#name-input").val()
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
            "Rabbit",
        ]
        let index = text.length % animals.length
        return animals[index]
    } else {
        return "No name"
    }
}

function displayFact() {
    let text = $("#name-input").val()
    let fact = `${text} is ${getLength()} characters long.`
    $("#length").hide().text(fact).fadeIn()
    $("#fact").hide().text(`Random Fact:  ${randomFacts()}`).fadeIn()
    $("#animal")
        .hide()
        .text(`Your spirit animal is: ${getSpiritAnimal()}`)
        .fadeIn()
}

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
    ]
    let index = Math.floor(Math.random() * facts.length)
    return facts[index]
}

// eslint-disable-next-line no-unused-vars
function refreshPage() {
    window.location.reload()
}
