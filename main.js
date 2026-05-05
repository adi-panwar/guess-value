let form = document.querySelector("form")
let input = document.querySelector("input")
let p = document.querySelector("p")
let body = document.querySelector("body")


let computerNumber = Math.floor(Math.random() * 100)

const runProgram = (e) => {
    e.preventDefault()

    const userGuess = input.valueAsNumber

    if (userGuess === computerNumber) {
        p.innerText = "🎉 You are right!"
        p.className = "p-3 mb-4 font-semibold text-lg rounded-lg bg-green-500/80 text-white"
        body.className = "min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-600 transition-all duration-500"
        computerNumber = Math.floor(Math.random() * 100)


    }
    else if (userGuess > computerNumber) {
        p.innerText = "⬇️ Guess lower number"
        p.className = "p-3 mb-4 font-semibold text-lg rounded-lg bg-yellow-400/80 text-black"
        body.className = "min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-500"

    }
    else {
        p.innerText = "⬆️ Guess higher number"
        p.className = "p-3 mb-4 font-semibold text-lg rounded-lg bg-blue-500/80 text-white"
        body.className = "min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 transition-all duration-500"

    }

    form.reset()
}

form.addEventListener("submit", runProgram)