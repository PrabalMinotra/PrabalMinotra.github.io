const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        const responseText = this.responseText;
        displayResponse(responseText);
    }
});

xhr.open('GET', 'https://wordle-answers-solutions.p.rapidapi.com/today');
xhr.setRequestHeader('X-RapidAPI-Key', 'a7db15b896mshaa0eec529d4db5ep1de9ddjsnd0c01ac55756');
xhr.setRequestHeader('X-RapidAPI-Host', 'wordle-answers-solutions.p.rapidapi.com');

xhr.send();

function displayResponse(responseText) {
    const responseObj = JSON.parse(responseText);
    const todayWord = responseObj.today;
    const formattedWord = todayWord.toUpperCase().charAt(0) + todayWord.toLowerCase().slice(1);
    const apiResponseElement = document.getElementById('apiResponse');
    apiResponseElement.textContent = formattedWord;
}
