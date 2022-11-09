const inputBoxEl = document.getElementById("input-box")
const submitBtnEl = document.getElementById("submit-btn")
const resetBtnEl = document.getElementById("reset-btn")
const ulList = document.getElementById("list-table")
let x = 0
const listData = document.getElementById("list-table").children

console.log(listData)

let todoData = ""


submitBtnEl.addEventListener("click", submit)
resetBtnEl.addEventListener("click", reset)
inputBoxEl.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
      submit()
    }
});


function submit() {

    todoData = inputBoxEl.value
    ulList.innerHTML += `<li id="${x}">${todoData} <input class="check-button" type="button" value="DONE" id="check-${x}" onclick="done(${x})"><input type="button" value="X" class="delete-button" onclick="deleteEl(${x})"></li>`
    inputBoxEl.value = ""
    x += 1
}

function reset(){
    ulList.innerHTML = ""
    x = 0
}

function done(x){

    temp = document.getElementById(x)
    temp.style.textDecoration = "line-through"
    temp.style.color = "green"
}

function deleteEl(x){
    temp = document.getElementById(x)
    temp.style.textDecoration = "line-through"
    temp.style.color = "red"
    temp.remove()
}













