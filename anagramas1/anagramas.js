console.log(palavras)
let ul = document.querySelector(".ListaAnagramas")
const button = document.getElementById("findButton");

function getAnagramsOf(typedText) {
    let anagrama = alphabetize(typedText)

    let arrayAnagramas = []


    for (let i = 0; i < palavras.length; i++) {
        let palvrasAnagramas = alphabetize(palavras[i])
        if (anagrama == palvrasAnagramas) {
            arrayAnagramas.push(palavras[i])
        }
    }

    let li = document.createElement("li")
    li.innerText = `${arrayAnagramas}`
    ul.appendChild(li)
    console.log(arrayAnagramas)

    return ul
}

button.addEventListener("click", function () {
    ul.innerText = ""
    let typedText = document.getElementById("input");
    getAnagramsOf(typedText.value);
});

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}