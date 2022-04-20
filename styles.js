const jokeEl = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")




jokeBtn.addEventListener("click", generateJoke)


generateJoke()

// USing .THEN
async function generateJoke() {
    const headerfeed = {
        headers: {
            "Accept": 'application/json'
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', headerfeed)

    const data = await res.json()

    jokeEl.innerHTML = data.joke

}






// USING ASYNC/AWAIT

// jokeBtn.addEventListener("click", generateJoke)


// generateJoke()

// function generateJoke() {
//     const headerfeed = {
//         headers: {
//             "Accept": 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', headerfeed)
//     .then((res) =>res.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })
// }

