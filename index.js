let div = document.getElementsById("root")
let p1 = document.createElement("p")
let p2 = document.createElement("p")
let p3 = document.createElement("p")
let p4 = document.createElement("p")
let p5 = document.createElement("p")
let p6 = document.createElement("p")
div.appendChild(p1)
div.appendChild(p2)
div.appendChild(p3)
div.appendChild(p4)
div.appendChild(p5)
div.appendChild(p6)

fetch("https://randomuser.me/api/", 
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
)
.then(resp => resp.json())
.then(json => displayData(json))

