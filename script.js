const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        const responseText = this.responseText;
        displayResponse(responseText);
    }
});

xhr.open('GET', 'https://wordle-answers-solutions.p.rapidapi.com/today');
xhr.setRequestHeader('X-RapidAPI-Key', 'c22cea6a35msh8686355e38fd89ep15d166jsna9d3f23d956c');
xhr.setRequestHeader('X-RapidAPI-Host', 'wordle-answers-solutions.p.rapidapi.com');

xhr.send();

function displayResponse(responseText) {
    const responseObj = JSON.parse(responseText);
    const todayWord = responseObj.today;
    const formattedWord = todayWord.toUpperCase().charAt(0) + todayWord.toLowerCase().slice(1);
    const apiResponseElement = document.getElementById('apiResponse');
    apiResponseElement.textContent = formattedWord;
}
