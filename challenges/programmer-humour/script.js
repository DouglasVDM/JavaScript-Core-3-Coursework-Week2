let imageItem = document.getElementById("image");
console.log("image =", image);

function getJoke() {
    fetch("https://xkcd.now.sh/?comic=latest")
        .then(response => response.json())
        .then(data => imageItem.src = data.img)
        .catch(error => console.log(error));
    
}
getJoke();