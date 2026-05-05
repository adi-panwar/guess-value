let form = document.querySelector("form")
let input = document.querySelector("input")
let p = document.querySelector("p")
let section = document.querySelector("section")

let computerNumber = Math.floor(Math.random() * 100)

const runProgram = (e) => {
    e.preventDefault()

    const userGuess = input.valueAsNumber

    if (userGuess === computerNumber) {
        p.innerText = "🎉 You are right!"
        p.className = "p-3 mb-4 font-semibold text-lg rounded-lg bg-green-500/80 text-white"
    }
    else if (userGuess > computerNumber) {
        p.innerText = "⬇️ Guess lower number"
        p.className = "p-3 mb-4 font-semibold text-lg rounded-lg bg-yellow-400/80 text-black"
    }
    else {
        p.innerText = "⬆️ Guess higher number"
        p.className = "p-3 mb-4 font-semibold text-lg rounded-lg bg-blue-500/80 text-white"
    }

    form.reset()
}

form.addEventListener("submit", runProgram)