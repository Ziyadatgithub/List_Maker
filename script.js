const text = document.querySelector("#add")
const add = document.querySelector("#submit")
const list = document.querySelector("#list")

add.addEventListener("click",function(){
    const listtwo = document.createElement("li")
    listtwo.innerHTML = text.value
    list.append(listtwo)
})