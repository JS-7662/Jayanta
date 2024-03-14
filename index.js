let friend = document.querySelector(".friend")
let btn = document.querySelector(".btn")
console.log(friend)

let i = 0


btn.addEventListener("click", function () {
    if (0 === i) {
        i = 1
        friend.innerHTML = "Friend"
        friend.classList.add("fri")
        btn.innerHTML = "Unfriend"
        btn.classList.add("btn-Margin-1")
        btn.classList.remove("btn-Margin-2")
    } else {
        i = 0
        friend.innerHTML = ""
        friend.classList.remove("fri")
        btn.innerHTML = "Add friend"
        btn.classList.remove("btn-Margin-1")
        btn.classList.add("btn-Margin-2")
    }
})
