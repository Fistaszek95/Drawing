const Names = ["Azor", "Puszek", "Pusia", "Misiek", "Muszka", "Ares", "Bonifacy", "Fafik"];

const btnAdd = document.querySelector('button.add');
const input = document.querySelector('input');
const btnReset = document.querySelector(".clean")
const btnShow = document.querySelector(".showName")
const h1 = document.querySelector("h1")
const btnOptions = document.querySelector(".showOptions")

const addName = (e) => {
    e.preventDefault()
    if (input.value.length) {
        const text = input.value
        Names.push(text);
        console.log(Names)
        alert(`Dodałeś imię: ${text}`)
        input.value = "";
    }
}

btnAdd.addEventListener("click", addName)

const clearNames = (e) => {
    e.preventDefault()
    Names.length = 0;
    h1.textContent = "";

}
btnReset.addEventListener("click", clearNames)


const showName = () => {
    h1.textContent = "";
    const index = Math.floor(Math.random() * Names.length)
    h1.textContent = Names[index];
}

btnShow.addEventListener("click", showName)

const showOptions = () => {
    if (Names.length) {
        const sortedNames = Names.sort()
        alert(`Imiona do wylosowania to:  ${sortedNames.join("---")}`)
    } else {
        alert("Nie ma zadnych imion do losowania")
    }
}

btnOptions.addEventListener("click", showOptions)