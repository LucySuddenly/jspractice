let div = document.getElementById("root")
let p1 = document.createElement("p")
let p2 = document.createElement("p")
let p3 = document.createElement("p")
let p4 = document.createElement("p")
let p5 = document.createElement("p")
let p6 = document.createElement("p")
let img = document.createElement("img")
div.appendChild(img)
div.appendChild(p1)
div.appendChild(p2)
div.appendChild(p3)
div.appendChild(p4)
div.appendChild(p5)
div.appendChild(p6)

fetch("https://randomuser.me/api/", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
    }
)
.then(resp => resp.json())
.then(json => displayData(json))

displayData = (json) => {
    console.log(json)
    img.setAttribute("src", json.results[0].picture.large )
    p1.innerText = json.results[0].name.title + " " + json.results[0].name.first + " " + json.results[0].name.last
    p2.innerText = json.results[0].gender
    p3.innerText = "Date of birth: " + json.results[0].dob.date
    p4.innerText = json.results[0].email
    p5.innerText = json.results[0].cell
    p6.innerText = json.results[0].login.username
}