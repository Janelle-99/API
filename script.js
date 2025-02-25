document.addEventListener("DOMContentLoaded", function () {
    let displayText = document.getElementById('par');
    let imgDisplay = document.getElementById('imgDisplay');

    function fetchDog() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                displayText.innerText = "🐶 Here's a cute dog! 🐶";
                imgDisplay.src = data.message;
                imgDisplay.style.display = "block";
            })
    }

    function fetchCat() {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                displayText.innerText = "🐱 Here's a cute cat! 🐱";
                imgDisplay.src = data[0].url;
                imgDisplay.style.display = "block";
            })
    }

    function fetchQuote() {
        displayText.innerText = "Generating Quote... ⏳";
        imgDisplay.style.display = "none";
    
        fetch('https://inspirobot.me/api?generate=true')
            .then(response => response.text())  
            .then(data => {
                let img = new Image();
                img.onload = function () {
                    displayText.innerText = "📝 Inspirational Quote: 📝";
                    imgDisplay.src = data;
                    imgDisplay.style.display = "block";
                };
                img.src = data;
            })
    }

    document.getElementById('dogBtn').addEventListener('click', fetchDog);
    document.getElementById('catBtn').addEventListener('click', fetchCat);
    document.getElementById('quoteBtn').addEventListener('click', fetchQuote);
});
