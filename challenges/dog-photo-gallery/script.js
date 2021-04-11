let targetButton = document.getElementById("btn");
// console.log(targetButton);
targetButton.addEventListener("click", getDogImages);

let listItem = document.getElementById("listItem")
// console.log(listItem);
listItem.style.listStyle = "none"

let imageItem = document.getElementById("imageItem")
// console.log(imageItem);

function getDogImages() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
        .then(data => {
            console.log("data =", data.message);
            imageItem.src = data.message
        }
    ) 
    .catch(error => console.log(`Oh no ${error}`));    
}