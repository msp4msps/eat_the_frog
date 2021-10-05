var btn = document.querySelector('.joke-container button');
var jokeTxt = document.querySelector('.joke-container p');

document.addEventListener('DOMContentLoaded', getJoke)


btn.addEventListener('click', getJoke);

function getJoke(){
    fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept': 'application/json'
            }
    }) 
    .then(data => data.json())
    .then(object => jokeTxt.innerHTML = object.joke)
}

